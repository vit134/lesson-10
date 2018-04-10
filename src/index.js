/* eslint-disable no-console */

import Request from './utils/requests';

const request = new Request();
const app = document.getElementById('app');
const button = document.querySelector('.button');

const rootResolve = (lastResult,result) => {
	console.log('first',lastResult,result);
};

const secondResult = (lastResult,result) => {
	console.log('second', lastResult, result);
	let currentId = result.data.id;
	let inner = '<img src="https://avatars0.githubusercontent.com/u/22002714?v=4">';

	lastResult.data.forEach(element => {
		if (element.id === currentId) {
			inner = `<div class="result"><div class="result__title">${element.title}</div><img src="${element.images.original.url}"></div>`;
		}
	});

	app.innerHTML = inner;
};

const thirdResolve = (lastResult,result) => {
	console.log('third',lastResult, result);
};

const fourResolve = (lastResult, result) => {
	console.log('four',lastResult, result);
	alert('Пришел ответ от последнего запроса');
};

const errorHandler = error => {
	console.log('error',error);
};

button.addEventListener('click', () => {
	request
		.get('http://api.giphy.com/v1/gifs/search?q=spider+man&api_key=cnYQ0SVForCz0knt3SthTB9wPJqcAI88&limit=100', rootResolve, errorHandler) // как будто попросил сторонний API отдать мне список гифок
		.get('http://api.giphy.com/v1/gifs/random?tag=spider+man&api_key=cnYQ0SVForCz0knt3SthTB9wPJqcAI88', secondResult, errorHandler) // как будто запросил у кого-то id какой-то гифки
		.get('/users?type=third', thirdResolve, errorHandler) // а теперь хочу получить еще каки то данные 
		.get('/users?type=four', fourResolve, errorHandler); // а теперь хочу получить еще каки то данные
});