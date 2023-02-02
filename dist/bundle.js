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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Game = void 0;\nconst canvas_1 = __webpack_require__(/*! ../graphics/canvas */ \"./graphics/canvas.ts\");\nconst player_1 = __webpack_require__(/*! ./player */ \"./game/player.ts\");\nclass Game {\n    constructor() {\n        // The width and height of the canvas \n        this.WIDTH = 500;\n        this.HEIGHT = 500;\n        // Array of players in the game\n        this.players = [];\n        // Tick rate of the game\n        this.TICKRATE = 60;\n        this.canvas = new canvas_1.Canvas(this.WIDTH, this.HEIGHT);\n        this.mouseInput = this.canvas.getMouseInput();\n    }\n    // Handles setup\n    init() {\n        this.players.push(new player_1.Player(20, 20, 20));\n        // Starts running the game\n        this.run();\n    }\n    // Function for updating all assets\n    update() {\n        this.players.forEach(player => {\n            player.update(this.canvas.getMouseInput());\n        });\n    }\n    // Function for drawing all assets\n    render(ctx) {\n        // Clear the current canvas\n        ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);\n        // Draw here\n        this.players.forEach(player => {\n            player.render(ctx);\n        });\n    }\n    run() {\n        // Limit the tick rate\n        let delta = 0;\n        let startTime = performance.now();\n        while (performance.now() - startTime < 1000 / this.TICKRATE) {\n            delta = performance.now() - startTime;\n        }\n        // Update and render\n        this.update();\n        this.render(this.canvas.getContext());\n        // Request next frame\n        window.requestAnimationFrame(() => this.run());\n    }\n}\nexports.Game = Game;\n\n\n//# sourceURL=webpack:///./game/game.ts?");

/***/ }),

/***/ "./game/player.ts":
/*!************************!*\
  !*** ./game/player.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Player = void 0;\nclass Player {\n    constructor(startX, startY, size) {\n        this.x = startX;\n        this.y = startY;\n        this.size = size;\n        this.xVel = 0;\n        this.yVel = 0;\n    }\n    update(mouseInput) {\n        // ---- TESTING BOOST METHOD ----------\n        if (mouseInput.isLeftClick()) {\n            this.boost(mouseInput.getMouseX(), mouseInput.getMouseY());\n        }\n        // -----------------------------------\n        // Change the current location by the corresponding velocity\n        this.x += this.xVel;\n        this.y += this.yVel;\n    }\n    render(ctx) {\n        ctx.fillRect(this.x, this.y, this.size, this.size);\n    }\n    // Add force towards a location\n    boost(targetX, targetY) {\n        let dX = targetX - this.x;\n        let dY = targetY - this.y;\n        let theta = Math.atan((dY / dX));\n        console.log(dX);\n        console.log(dY);\n        console.log(theta);\n    }\n}\nexports.Player = Player;\n\n\n//# sourceURL=webpack:///./game/player.ts?");

/***/ }),

/***/ "./graphics/canvas.ts":
/*!****************************!*\
  !*** ./graphics/canvas.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Canvas = void 0;\nconst mouseInput_1 = __webpack_require__(/*! ../input/mouseInput */ \"./input/mouseInput.ts\");\nclass Canvas {\n    constructor(width, height) {\n        this.width = width;\n        this.height = height;\n        // Create canvas element\n        this.canvas = document.createElement('canvas');\n        this.canvas.width = this.width;\n        this.canvas.height = this.height;\n        this.canvas.style.border = \"1px solid\";\n        document.body.appendChild(this.canvas);\n        this.context = this.canvas.getContext(\"2d\");\n        // Create a mouse listener\n        this.mouseInput = new mouseInput_1.MouseInput(this.canvas);\n    }\n    getContext() {\n        return this.context;\n    }\n    getMouseInput() {\n        return this.mouseInput;\n    }\n}\nexports.Canvas = Canvas;\n\n\n//# sourceURL=webpack:///./graphics/canvas.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst game_1 = __webpack_require__(/*! ./game/game */ \"./game/game.ts\");\n// Create and init a new game\nlet game = new game_1.Game();\ngame.init();\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./input/mouseInput.ts":
/*!*****************************!*\
  !*** ./input/mouseInput.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MouseInput = void 0;\nclass MouseInput {\n    constructor(canvas) {\n        this.mouseX = 0;\n        this.mouseY = 0;\n        this.leftClick = false;\n        canvas.addEventListener('mousedown', (mousedown) => {\n            this.mouseX = mousedown.offsetX;\n            this.mouseY = mousedown.offsetY;\n            this.leftClickPressed();\n        });\n        canvas.addEventListener('mouseup', (mouseup) => {\n            this.leftClickReleased();\n        });\n    }\n    leftClickPressed() {\n        this.leftClick = true;\n        console.log(\"Mousedown @ \" + this.mouseX + \", \" + this.mouseY);\n    }\n    leftClickReleased() {\n        this.leftClick = false;\n        console.log(\"Mouseup\");\n    }\n    isLeftClick() {\n        if (this.leftClick == true) {\n            return true;\n        }\n        return false;\n    }\n    getMouseX() {\n        return this.mouseX;\n    }\n    getMouseY() {\n        return this.mouseY;\n    }\n}\nexports.MouseInput = MouseInput;\n\n\n//# sourceURL=webpack:///./input/mouseInput.ts?");

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