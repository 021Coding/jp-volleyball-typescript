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

/***/ "./game/game.ts":
/*!**********************!*\
  !*** ./game/game.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Game = void 0;\nconst canvas_1 = __webpack_require__(/*! ../graphics/canvas */ \"./graphics/canvas.ts\");\nclass Game {\n    constructor() {\n        this.canvas = new canvas_1.Canvas(500, 500);\n        this.drawPlayer();\n    }\n    // Test method to draw a player on the canvas\n    drawPlayer() {\n        let ctx = this.canvas.getContext();\n        ctx.fillRect(20, 20, 20, 20);\n    }\n}\nexports.Game = Game;\n\n\n//# sourceURL=webpack:///./game/game.ts?");

/***/ }),

/***/ "./graphics/canvas.ts":
/*!****************************!*\
  !*** ./graphics/canvas.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Canvas = void 0;\nclass Canvas {\n    constructor(width, height) {\n        this.width = width;\n        this.height = height;\n        // Create canvas element\n        this.canvas = document.createElement('canvas');\n        this.canvas.width = this.width;\n        this.canvas.height = this.height;\n        this.canvas.style.border = \"1px solid\";\n        document.body.appendChild(this.canvas);\n        this.context = this.canvas.getContext(\"2d\");\n    }\n    getContext() {\n        return this.context;\n    }\n}\nexports.Canvas = Canvas;\n\n\n//# sourceURL=webpack:///./graphics/canvas.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst game_1 = __webpack_require__(/*! ./game/game */ \"./game/game.ts\");\nlet game = new game_1.Game();\n\n\n//# sourceURL=webpack:///./index.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;