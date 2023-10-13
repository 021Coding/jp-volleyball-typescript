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

/***/ "./collisions/Collider.ts":
/*!********************************!*\
  !*** ./collisions/Collider.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Collider = void 0;\nconst utils_1 = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.ts\");\nclass Collider {\n    constructor(player) {\n        this.player = player;\n    }\n    update() {\n        if (this.player.getX() < 0) {\n            this.player.setX(0);\n            this.player.resetXVel();\n        }\n        else if (this.player.getX() + this.player.getSize() > utils_1.GAME_WIDTH) {\n            this.player.setX(utils_1.GAME_WIDTH - this.player.getSize());\n            this.player.resetXVel();\n        }\n        if (this.player.getY() < 0) {\n            this.player.setY(0);\n            this.player.resetYVel();\n        }\n        else if (this.player.getY() + this.player.getSize() > utils_1.GAME_HEIGHT) {\n            this.player.setY(utils_1.GAME_HEIGHT - this.player.getSize());\n            this.player.resetYVel();\n        }\n    }\n}\nexports.Collider = Collider;\n\n\n//# sourceURL=webpack:///./collisions/Collider.ts?");

/***/ }),

/***/ "./game/game.ts":
/*!**********************!*\
  !*** ./game/game.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Game = void 0;\nconst canvas_1 = __webpack_require__(/*! ../graphics/canvas */ \"./graphics/canvas.ts\");\nconst fpsTracker_1 = __webpack_require__(/*! ../utils/fpsTracker */ \"./utils/fpsTracker.ts\");\nconst utils_1 = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.ts\");\nconst player_1 = __webpack_require__(/*! ./player */ \"./game/player.ts\");\nclass Game {\n    constructor() {\n        // The width and height of the canvas \n        this.WIDTH = utils_1.GAME_WIDTH;\n        this.HEIGHT = utils_1.GAME_HEIGHT;\n        // Array of players in the game\n        this.players = [];\n        // Tick rate of the game\n        this.TICKRATE = 60;\n        this.canvas = new canvas_1.Canvas(this.WIDTH, this.HEIGHT);\n        this.mouseInput = this.canvas.getMouseInput();\n        this.keyboardInput = this.canvas.getKeyboardInput();\n        this.fpsTracker = new fpsTracker_1.FPSTracker(this.WIDTH - 38, 10);\n    }\n    // Handles setup\n    init() {\n        this.players.push(new player_1.Player(20, 20, 20));\n        // Starts running the game\n        this.run();\n    }\n    // Function for updating all assets\n    update() {\n        this.fpsTracker.update();\n        this.players.forEach(player => {\n            player.update(this.canvas.getMouseInput(), this.canvas.getKeyboardInput());\n        });\n    }\n    // Function for drawing all assets\n    render(ctx) {\n        // Clear the current canvas\n        ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);\n        // Draw here\n        this.players.forEach(player => {\n            player.render(ctx);\n        });\n        this.fpsTracker.render(ctx);\n    }\n    run() {\n        // Limit the tick rate\n        let delta = 0;\n        let startTime = performance.now();\n        while (performance.now() - startTime < 1000 / this.TICKRATE) {\n            delta = performance.now() - startTime;\n        }\n        // Update and render\n        this.update();\n        this.render(this.canvas.getContext());\n        // Request next frame\n        window.requestAnimationFrame(() => this.run());\n    }\n}\nexports.Game = Game;\n\n\n//# sourceURL=webpack:///./game/game.ts?");

/***/ }),

/***/ "./game/player.ts":
/*!************************!*\
  !*** ./game/player.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Player = void 0;\nconst Collider_1 = __webpack_require__(/*! ../collisions/Collider */ \"./collisions/Collider.ts\");\nclass Player {\n    constructor(startX, startY, size) {\n        this.x = startX;\n        this.y = startY;\n        this.size = size;\n        this.collider = new Collider_1.Collider(this);\n        this.xVel = 0;\n        this.yVel = 0;\n    }\n    update(mouseInput, keyboardInput) {\n        // ---- TESTING BOOST METHOD ----------\n        if (mouseInput.isLeftClick()) {\n            this.boost(mouseInput.getMouseX(), mouseInput.getMouseY());\n        }\n        if (keyboardInput.leftPressed() && !keyboardInput.rightPressed()) {\n            this.xVel -= 0.1;\n        }\n        else if (keyboardInput.rightPressed() && !keyboardInput.leftPressed()) {\n            this.xVel += 0.1;\n        }\n        if (keyboardInput.jumpPressed()) {\n            this.yVel -= 1;\n        }\n        // -----------------------------------\n        // Gravity\n        this.yVel += 0.1;\n        // Change the current location by the corresponding velocity\n        this.x += this.xVel;\n        this.y += this.yVel;\n        // Collide with walls \n        this.collider.update();\n    }\n    render(ctx) {\n        ctx.fillRect(this.x, this.y, this.size, this.size);\n    }\n    // Add force towards a location\n    boost(targetX, targetY) {\n        let dX = targetX - this.x;\n        let dY = targetY - this.y;\n        let theta = Math.atan2(dY, dX);\n        console.log(dX);\n        console.log(dY);\n        console.log(theta);\n        this.xVel += Math.cos(theta) * 5;\n        this.yVel += Math.sin(theta) * 5;\n    }\n    getCollider() {\n        return this.collider;\n    }\n    getX() {\n        return this.x;\n    }\n    getY() {\n        return this.y;\n    }\n    getSize() {\n        return this.size;\n    }\n    setX(x) {\n        this.x = x;\n    }\n    setY(y) {\n        this.y = y;\n    }\n    resetXVel() {\n        this.xVel = 0;\n    }\n    resetYVel() {\n        this.yVel = 0;\n    }\n}\nexports.Player = Player;\n\n\n//# sourceURL=webpack:///./game/player.ts?");

/***/ }),

/***/ "./graphics/canvas.ts":
/*!****************************!*\
  !*** ./graphics/canvas.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Canvas = void 0;\nconst keyboardInput_1 = __webpack_require__(/*! ../input/keyboardInput */ \"./input/keyboardInput.ts\");\nconst mouseInput_1 = __webpack_require__(/*! ../input/mouseInput */ \"./input/mouseInput.ts\");\nclass Canvas {\n    constructor(width, height) {\n        this.width = width;\n        this.height = height;\n        // Create canvas element\n        this.canvas = document.createElement('canvas');\n        this.canvas.width = this.width;\n        this.canvas.height = this.height;\n        this.canvas.style.border = \"3px solid\";\n        document.body.appendChild(this.canvas);\n        this.context = this.canvas.getContext(\"2d\");\n        // Create a mouse listener\n        this.mouseInput = new mouseInput_1.MouseInput(this.canvas);\n        this.keyboardInput = new keyboardInput_1.KeyboardInput(this.canvas);\n    }\n    getContext() {\n        return this.context;\n    }\n    getMouseInput() {\n        return this.mouseInput;\n    }\n    getKeyboardInput() {\n        return this.keyboardInput;\n    }\n}\nexports.Canvas = Canvas;\n\n\n//# sourceURL=webpack:///./graphics/canvas.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst game_1 = __webpack_require__(/*! ./game/game */ \"./game/game.ts\");\n// Create and init a new game\nlet game = new game_1.Game();\ngame.init();\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./input/keyboardInput.ts":
/*!********************************!*\
  !*** ./input/keyboardInput.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.KeyboardInput = void 0;\nclass KeyboardInput {\n    constructor(canvas) {\n        this.left = false;\n        this.right = false;\n        this.jump = false;\n        window.addEventListener('keydown', (keydown) => {\n            if (keydown.key == 'a') {\n                this.left = true;\n                console.log(\"Left pressed\");\n            }\n            if (keydown.key == 'd') {\n                this.right = true;\n                console.log(\"Right pressed\");\n            }\n            if (keydown.key == ' ') {\n                this.jump = true;\n                console.log(\"Jump pressed\");\n            }\n        });\n        window.addEventListener('keyup', (keyup) => {\n            if (keyup.key == 'a') {\n                this.left = false;\n                console.log(\"Left released\");\n            }\n            if (keyup.key == 'd') {\n                this.right = false;\n                console.log(\"Right released\");\n            }\n            if (keyup.key == ' ') {\n                this.jump = false;\n                console.log(\"Jump released\");\n            }\n        });\n    }\n    leftPressed() {\n        return this.left;\n    }\n    rightPressed() {\n        return this.right;\n    }\n    jumpPressed() {\n        return this.jump;\n    }\n}\nexports.KeyboardInput = KeyboardInput;\n\n\n//# sourceURL=webpack:///./input/keyboardInput.ts?");

/***/ }),

/***/ "./input/mouseInput.ts":
/*!*****************************!*\
  !*** ./input/mouseInput.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MouseInput = void 0;\nclass MouseInput {\n    constructor(canvas) {\n        this.mouseX = 0;\n        this.mouseY = 0;\n        this.leftClick = false;\n        canvas.addEventListener('mousedown', (mousedown) => {\n            this.mouseX = mousedown.offsetX;\n            this.mouseY = mousedown.offsetY;\n            this.leftClickPressed();\n        });\n        canvas.addEventListener('mouseup', (mouseup) => {\n            this.leftClickReleased();\n        });\n    }\n    leftClickPressed() {\n        this.leftClick = true;\n        console.log(\"Mousedown @ \" + this.mouseX + \", \" + this.mouseY);\n    }\n    leftClickReleased() {\n        this.leftClick = false;\n        console.log(\"Mouseup\");\n    }\n    isLeftClick() {\n        if (this.leftClick == true) {\n            return true;\n        }\n        return false;\n    }\n    getMouseX() {\n        return this.mouseX;\n    }\n    getMouseY() {\n        return this.mouseY;\n    }\n}\nexports.MouseInput = MouseInput;\n\n\n//# sourceURL=webpack:///./input/mouseInput.ts?");

/***/ }),

/***/ "./utils/fpsTracker.ts":
/*!*****************************!*\
  !*** ./utils/fpsTracker.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FPSTracker = void 0;\nclass FPSTracker {\n    constructor(x, y) {\n        this.framecount = 0;\n        this.x = x;\n        this.y = y;\n        this.fps = 0;\n        this.lastFPStime = performance.now();\n    }\n    update() {\n        if (performance.now() - this.lastFPStime >= 1000) {\n            this.fps = 1000 * this.framecount / (performance.now() - this.lastFPStime);\n            this.framecount = 0;\n            this.lastFPStime = performance.now();\n        }\n        else {\n            this.framecount++;\n        }\n    }\n    render(context) {\n        context.fillStyle = 'black';\n        context.font = \"10px Arial\";\n        context.fillText(\"FPS: \" + Math.round(this.fps).toString(), this.x, this.y);\n    }\n}\nexports.FPSTracker = FPSTracker;\n\n\n//# sourceURL=webpack:///./utils/fpsTracker.ts?");

/***/ }),

/***/ "./utils/utils.ts":
/*!************************!*\
  !*** ./utils/utils.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GAME_HEIGHT = exports.GAME_WIDTH = void 0;\nvar GAME_WIDTH = 800;\nexports.GAME_WIDTH = GAME_WIDTH;\nvar GAME_HEIGHT = GAME_WIDTH * 9 / 16;\nexports.GAME_HEIGHT = GAME_HEIGHT;\n\n\n//# sourceURL=webpack:///./utils/utils.ts?");

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