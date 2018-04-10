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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/requests */ \"./src/utils/requests.js\");\n/* eslint-disable no-console */\n\n\n\nconst request = new _utils_requests__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nconst app = document.getElementById('app');\n\nconst rootResolve = (lastResult,result) => {\n\tconsole.log('first',lastResult,result);\n};\n\nconst secondResult = (lastResult,result) => {\n\tconsole.log('second', lastResult, result);\n\tlet currentId = result.id;\n\tlet inner = '<img src=\"https://avatars0.githubusercontent.com/u/22002714?v=4\">';\n\n\tlastResult.forEach(element => {\n\t\tif (element.id === currentId) {\n\t\t\tinner = `<div class=\"bla\"><div class=\"bla__title\">${element.title}</div><img src=\"${element.images.original.url}\"></div>`;\n\t\t}\n\t});\n\n\tapp.innerHTML = inner;\n};\n\nconst thirdResolve = (lastResult,result) => {\n\tconsole.log('third',lastResult, result);\n};\n\nconst fourResolve = (lastResult, result) => {\n\tconsole.log('four',lastResult, result);\n};\n\nconst errorHandler = error => {\n\tconsole.log('error',error);\n};\n\nrequest\n\t.get('/users?type=root', rootResolve, errorHandler) // как будто попросил сторонний API отдать мне список гифок\n\t.get('/users?type=second', secondResult, errorHandler) // как будто запросил у кого-то id какой-то гифки\n\t.get('/users?type=third', thirdResolve, errorHandler) // а теперь хочу получить еще каки то данные \n\t.get('/users?type=four', fourResolve, errorHandler); // а теперь хочу получить еще каки то данные\n\n\n\n/* const p = new Promise((resolve, reject) => {\n\tsetTimeout(() => {\n\t\tresolve(1);\n\t}, 3000);\n});\n\np\n\t.then((result) => {\n\t\treturn fetch('/users?type=root')\n\t\t\t.then(res => {\n\t\t\t\treturn res.json();\n\t\t\t})\n\t\t\t.then(data => {\n\t\t\t\tconsole.log('data',data);\n\t\t\t})\n\t\t\t.catch(error => {\n\t\t\t\t//reject({url: url, error: error});\n\t\t\t\tthrow new Error('errror');\n\t\t\t}).then(result => {\n\t\t\t\treturn fetch('/uasdasdsers?type=root')\n\t\t\t\t\t.then(res => {\n\t\t\t\t\t\treturn res.json();\n\t\t\t\t\t})\n\t\t\t\t\t.then(data => {\n\t\t\t\t\t\tconsole.log('result',result);\n\t\t\t\t\t})\n\t\t\t\t\t.catch(error => {\n\t\t\t\t\t\t//reject({url: url, error: error});\n\t\t\t\t\t\tconsole.log('error',error);\n\t\t\t\t\t})\n\t\t\t\t\t.then(resssult => {\n\t\t\t\t\t\treturn fetch('/users?type=root')\n\t\t\t\t\t\t\t.then(res => {\n\t\t\t\t\t\t\t\treturn res.json();\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t.then(data => {\n\t\t\t\t\t\t\t\tconsole.log('resssult',resssult);\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t.catch(error => {\n\t\t\t\t\t\t\t\t//reject({url: url, error: error});\n\t\t\t\t\t\t\t\tthrow new Error('errror');\n\t\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t});\n\t});\n */\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/requests.js":
/*!*******************************!*\
  !*** ./src/utils/requests.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Request {\n\tconstructor() {\n\t\tthis._promise;\n\t\tthis._lastPromise;\n\t\tthis._lastResult = null;\n\t}\n    \n\tget() {\n\t\tif (!this._promise) {\n\t\t\tthis._promise = this.addTostack(...arguments);\n\t\t} else {\n\t\t\tthis._promise\n\t\t\t\t.then(() => {\n\t\t\t\t\tthis._lastPromise = this.addTostack(...arguments);\n\t\t\t\t\tthis._promise = this._lastPromise;\n\t\t\t\t\treturn this._promise;\n\t\t\t\t});\n\t\t}\n\n\t\treturn this;\n\t}\n\n\taddTostack(url, resolve, reject) {\n\t\treturn fetch(url)\n\t\t\t.then(res => {\n\t\t\t\treturn res.json();\n\t\t\t})\n\t\t\t.then(data => {\n\t\t\t\tresolve(this._lastResult, data);\n\t\t\t\tthis._lastResult = data;\n\t\t\t})\n\t\t\t.catch(error => {\n\t\t\t\treject({url: url, error: error});\n\t\t\t\tthrow new Error('errror');\n\t\t\t});\n\t}\n} \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Request);\n\n//# sourceURL=webpack:///./src/utils/requests.js?");

/***/ })

/******/ });