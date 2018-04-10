class Request {
	constructor() {
		this._promise;
		this._lastPromise;
		this._lastResult = null;
	}
    
	get() {
		if (!this._promise) {
			this._promise = this.addTostack(...arguments);
		} else {
			this._promise
				.then(() => {
					this._lastPromise = this.addTostack(...arguments);
					this._promise = this._lastPromise;
					return this._promise;
				});
		}

		return this;
	}

	addTostack(url, resolve, reject) {
		return fetch(url)
			.then(res => {
				return res.json();
			})
			.then(data => {
				resolve(this._lastResult, data);
				this._lastResult = data;
			})
			.catch(error => {
				reject({url: url, error: error});
				throw new Error('errror');
			});
	}
} 


export default Request;