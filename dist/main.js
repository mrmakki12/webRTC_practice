/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// get video\r\nconst video = document.querySelector('video')\r\n\r\n// play video\r\nconst playMedia = async () => {\r\n    try {\r\n        const constraints = {'video': true, 'audio': true}\r\n        const stream = await navigator.mediaDevices.getUserMedia(constraints)\r\n        console.log(video)\r\n        video.srcObject = stream\r\n    } catch(err) {\r\n        console.log(err)\r\n    }\r\n}\r\n\r\nplayMedia()\n\n//# sourceURL=webpack://webrtc_practice/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;