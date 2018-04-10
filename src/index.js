/* eslint-disable no-console */

import Request from './utils/requests';

const request = new Request();

const app = document.getElementById('app');

const rootResolve = (lastResult,result) => {
	console.log('first',lastResult,result);
};

const secondResult = (lastResult,result) => {
	console.log('second', lastResult, result);
	let currentId = result.id;
	let inner = '<img src="https://avatars0.githubusercontent.com/u/22002714?v=4">';

	lastResult.forEach(element => {
		if (element.id === currentId) {
			inner = `<div class="bla"><div class="bla__title">${element.title}</div><img src="${element.images.original.url}"></div>`;
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
};

request
	.get('/users?type=root', rootResolve, errorHandler) // как будто попросил сторонний API отдать мне список гифок
	.get('/users?type=second', secondResult, errorHandler) // как будто запросил у кого-то id какой-то гифки
	.get('/users?type=third', thirdResolve, errorHandler) // а теперь хочу получить еще каки то данные 
	.get('/users?type=four', fourResolve, errorHandler); // а теперь хочу получить еще каки то данные



/* const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(1);
	}, 3000);
});

p
	.then((result) => {
		return fetch('/users?type=root')
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log('data',data);
			})
			.catch(error => {
				//reject({url: url, error: error});
				throw new Error('errror');
			}).then(result => {
				return fetch('/uasdasdsers?type=root')
					.then(res => {
						return res.json();
					})
					.then(data => {
						console.log('result',result);
					})
					.catch(error => {
						//reject({url: url, error: error});
						console.log('error',error);
					})
					.then(resssult => {
						return fetch('/users?type=root')
							.then(res => {
								return res.json();
							})
							.then(data => {
								console.log('resssult',resssult);
							})
							.catch(error => {
								//reject({url: url, error: error});
								throw new Error('errror');
							});
					});
			});
	});
 */