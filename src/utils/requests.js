export default class Request {
	constructor() {
		this._promise; // текущий промис
		this._allResults = []; // результаты всех запросов
		this._lastResult = null; // результат последнего промиса
		this._promises = []; // массив промиссов
		this._doneHandler;
	}
	
	/**
	 * @param  {string} url : url запроса
	 * @param  {function} resolve : функция успешного выполнения запроса
	 * @param  {function} reject : функция не успешного выполнения запроса
	 */
	get() {
		if (!this._promise) {
			this._promise = this._addToStack(...arguments);
		} else {
			this._promises.push([...arguments]);
		}
		return this;
	}
	/**
	 * @param {function} handler : функция обработчик 
	 */
	done(handler) {
		this._doneHandler = handler;
		this._promises.push(this._doneHandler);
		return this;
	}

	/**
	 * Удаляет первый промис из массива и устанавливает его в качестве текущего промиса
	 */
	_next() {
		if (this._promises.length) {
			let arg = this._promises.shift();

			if (typeof arg !== 'function') {
				this._promise = this._addToStack(...arg);
			} else {
				this._done();
			}
		}
	}

	/**
	 * Возвращает функцию обработчик с результатами всех запросов
	 */
	_done() {
		return this._doneHandler(this._allResults);
	}
	
	/**
	 * Запускает запрос в случает успеха идет дальше по цепочке, в случае ошибки вываливается
	 */
	_addToStack(url, resolve, reject) {
		return fetch(url)
			.then(res => {
				return res.json();
			})
			.then(data => {
				resolve(this._lastResult, data);
				this._lastResult = data;
				this._allResults.push(data);
			})
			.catch(error => {
				reject({url: url, error: error});
				this._lastResult = null;
				this._allResults.push(null);
				throw new Error(error);
			})
			.then(() => {
				this._next();
			});
	}
}