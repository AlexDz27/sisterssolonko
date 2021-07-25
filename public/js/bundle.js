/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/scss/index.scss":
/*!***************************************!*\
  !*** ./resources/src/scss/index.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./resources/src/scss/index.scss?");

/***/ }),

/***/ "./resources/src/index.js":
/*!********************************!*\
  !*** ./resources/src/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ \"./resources/src/scss/index.scss\");\n/* harmony import */ var _js_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/home */ \"./resources/src/js/home.js\");\n\r\n\r\n\n\n//# sourceURL=webpack:///./resources/src/index.js?");

/***/ }),

/***/ "./resources/src/js/components/Preview.js":
/*!************************************************!*\
  !*** ./resources/src/js/components/Preview.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Preview\": () => (/* binding */ Preview)\n/* harmony export */ });\nclass Preview {\r\n  rootElement;\r\n  closeButton;\r\n\r\n  constructor(rootElement) {\r\n    this.rootElement = rootElement;\r\n    this.closeButton = this.rootElement.querySelector('#previewCloseButton');\r\n\r\n    this.setEventHandlers();\r\n  }\r\n\r\n  setEventHandlers() {\r\n    this.closeButton.addEventListener('click', this.close.bind(this));\r\n  }\r\n\r\n  close() {\r\n    this.rootElement.style.display = 'none';\r\n  }\r\n}\n\n//# sourceURL=webpack:///./resources/src/js/components/Preview.js?");

/***/ }),

/***/ "./resources/src/js/home.js":
/*!**********************************!*\
  !*** ./resources/src/js/home.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Preview */ \"./resources/src/js/components/Preview.js\");\n\r\n\r\nconst previewContainer = document.querySelector('#preview');\r\nconst preview = new _components_Preview__WEBPACK_IMPORTED_MODULE_0__.Preview(previewContainer);\r\n\r\nconst featuredDresses = document.querySelectorAll('#featuredDress');\r\nfeaturedDresses.forEach((dress) => {\r\n  dress.addEventListener('click', () => {\r\n    const wantedDressId = dress.dataset.id;\r\n    const wantedDress = window.dresses.find(dress => dress.id == wantedDressId);\r\n\r\n    console.log(wantedDress.image);\r\n  });\r\n});\n\n//# sourceURL=webpack:///./resources/src/js/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/src/index.js");
/******/ 	
/******/ })()
;