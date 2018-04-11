/* eslint-disable no-console */

import Request from './utils/requests';

const request = new Request();
const app = document.getElementById('app');
const button = document.querySelector('.button');
const preloader = document.querySelector('.preloader');

const rootResolve = (lastResult,result) => {
	console.log('first',lastResult,result);
};

const secondResult = (lastResult,result) => {
	console.log('second', lastResult, result);
	let currentId = result.data.id;
	let inner = '<div class="result__empty">Чуда не произошло</div>';

	lastResult.data.forEach(element => {
		if (element.id === currentId) {
			inner = `<div class="result"><div class="result__title">${element.title}</div><img src="${element.images.fixed_height_still.url}"></div>`;
		}
	});

	app.innerHTML = inner;
};

const thirdResolve = (lastResult,result) => {
	console.log('third',lastResult, result);
};

const fourResolve = (lastResult, result) => {
	console.log('four',lastResult, result);
};

const errorHandler = error => {
	console.log('error',error);
	preloader.classList.add('hidden');
	app.innerHTML = 'Произошла ошибка';
};

const onDone = allResults => {
	preloader.classList.add('hidden');
	alert('Сработал done, запросы кончились');
	console.log('allResults',allResults);
};

button.addEventListener('click', () => {
	preloader.classList.remove('hidden');
	app.innerHTML = '';
	request
		.get('http://api.giphy.com/v1/gifs/search?q=spider+man&api_key=cnYQ0SVForCz0knt3SthTB9wPJqcAI88&limit=300', rootResolve, errorHandler) // как будто попросил сторонний API отдать мне список гифок
		.get('http://api.giphy.com/v1/gifs/random?tag=spider+man&api_key=cnYQ0SVForCz0knt3SthTB9wPJqcAI88', secondResult, errorHandler) // как будто запросил у кого-то id какой-то гифки
		.get('/users?type=third', thirdResolve, errorHandler) // а теперь хочу получить еще каки то данные 
		.get('/users?type=four', fourResolve, errorHandler) // а теперь хочу получить еще каки то данные
		.done(onDone); // завершает цепочку вызовов, отдает результаты всех запросов
});