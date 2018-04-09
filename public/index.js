/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/requests */ \"./src/utils/requests.js\");\n\r\n\r\nconst request = new _utils_requests__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nconst app = document.getElementById('app');\r\n\r\nconst searchResolve = (lastResult,result) => {\r\n    console.log('lastResult',lastResult);\r\n    console.log('resultSearch',result);\r\n}\r\n\r\nconst randomResult = (lastResult,result) => {\r\n    console.log('lastResult',lastResult);\r\n    console.log('result',result);\r\n\r\n    let currentId = result.data.id;\r\n    let inner = `<img src=\"https://avatars0.githubusercontent.com/u/22002714?v=4\">`;\r\n\r\n\r\n    lastResult.data.forEach(element => {\r\n        if (element.id === currentId) {\r\n            inner = `<div class=\"bla\"><div class=\"bla__title\">${element.title}</div><img src=\"${element.images.original.url}\"></div>`\r\n        }\r\n    });\r\n\r\n    app.innerHTML = inner;\r\n}\r\n\r\nconst errorHandler = error => {\r\n    console.log('error',error);\r\n}\r\n\r\nrequest\r\n    //.get('http://api.giphy.com/v1/gifs/search?api_key=cnYQ0SVForCz0knt3SthTB9wPJqcAI88&q=spider_man&limit=1000', searchResolve, errorHandler)\r\n    .get('/users?type=root', searchResolve, errorHandler)\r\n    .get('http://api.giphy.com/v1/gifs/random?api_key=cnYQ0SVForCz0knt3SthTB9wPJqcAI88&tag=spider_man', randomResult, errorHandler);\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/requests.js":
/*!*******************************!*\
  !*** ./src/utils/requests.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconsole.log('request.js');\r\n\r\nclass Request {\r\n    constructor() {\r\n        this._stack = [];\r\n        this._promise;\r\n        this._lastResult;\r\n    }\r\n    \r\n    get(url, onResolve, onReject) {\r\n        if (!this._promise) {\r\n            this._promise = this.addTostack({\r\n                url: url,\r\n                res: onResolve,\r\n                rej: onReject\r\n            })\r\n        } else {\r\n            this._promise\r\n                .then(() => this.addTostack({\r\n                    url: url,\r\n                    res: onResolve,\r\n                    rej: onReject\r\n                }))\r\n        }\r\n\r\n        return this;\r\n    }\r\n\r\n    addTostack(el) {\r\n        return fetch(el.url)\r\n            .then(res => {\r\n                return res.json();\r\n            })\r\n            .then(data => {\r\n                el.res(this._lastResult, data);\r\n                this._lastResult = data;\r\n\r\n                return;\r\n            })\r\n            .catch(error => {\r\n                el.rej(error)\r\n            })\r\n    }\r\n\r\n\r\n    getStack() {\r\n        return this._stack;\r\n    }\r\n} \r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Request);\n\n//# sourceURL=webpack:///./src/utils/requests.js?");

/***/ })

/******/ });