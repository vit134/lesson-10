import Request from './utils/requests';

const request = new Request();

const app = document.getElementById('app');

const searchResolve = (lastResult,result) => {
    console.log('lastResult',lastResult);
    console.log('resultSearch',result);
}

const randomResult = (lastResult,result) => {
    console.log('lastResult',lastResult);
    console.log('result',result);

    let currentId = result.data.id;
    let inner = `<img src="https://avatars0.githubusercontent.com/u/22002714?v=4">`;


    lastResult.data.forEach(element => {
        if (element.id === currentId) {
            inner = `<div class="bla"><div class="bla__title">${element.title}</div><img src="${element.images.original.url}"></div>`
        }
    });

    app.innerHTML = inner;
}

const errorHandler = error => {
    console.log('error',error);
}

request
    //.get('http://api.giphy.com/v1/gifs/search?api_key=cnYQ0SVForCz0knt3SthTB9wPJqcAI88&q=spider_man&limit=1000', searchResolve, errorHandler)
    .get('/users?type=root', searchResolve, errorHandler)
    .get('http://api.giphy.com/v1/gifs/random?api_key=cnYQ0SVForCz0knt3SthTB9wPJqcAI88&tag=spider_man', randomResult, errorHandler);

