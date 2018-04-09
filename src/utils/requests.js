console.log('request.js');

class Request {
    constructor() {
        this._stack = [];
        this._promise;
        this._lastResult;
    }
    
    get(url, onResolve, onReject) {
        if (!this._promise) {
            this._promise = this.addTostack({
                url: url,
                res: onResolve,
                rej: onReject
            })
        } else {
            this._promise
                .then(() => this.addTostack({
                    url: url,
                    res: onResolve,
                    rej: onReject
                }))
        }

        return this;
    }

    addTostack(el) {
        return fetch(el.url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                el.res(this._lastResult, data);
                this._lastResult = data;

                return;
            })
            .catch(error => {
                el.rej(error)
            })
    }


    getStack() {
        return this._stack;
    }
} 


export default Request;