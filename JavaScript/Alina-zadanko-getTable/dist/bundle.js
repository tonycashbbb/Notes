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

/***/ "./src/components/Details.js":
/*!***********************************!*\
  !*** ./src/components/Details.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Details = (root) => {\r\n  root.insertAdjacentHTML('beforeend', `\r\n    <div class=\"details hide\">\r\n      <h3>Details:</h3>\r\n    </div>\r\n    <button class=\"goBackBtn hide\">Go back</button>\r\n  `)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);\r\n\n\n//# sourceURL=webpack://alina-zadanko/./src/components/Details.js?");

/***/ }),

/***/ "./src/components/Table.js":
/*!*********************************!*\
  !*** ./src/components/Table.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Table = (root) => {\r\n  root.insertAdjacentHTML('beforeend', `\r\n    <table>\r\n      <tr>\r\n        <th>First name</th>\r\n        <th>Last name</th>\r\n        <th>Avatar</th>\r\n        <th>Email</th>\r\n        <th>More</th>\r\n      </tr>\r\n    </table>\r\n  `)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);\r\n\n\n//# sourceURL=webpack://alina-zadanko/./src/components/Table.js?");

/***/ }),

/***/ "./src/components/TableRow.js":
/*!************************************!*\
  !*** ./src/components/TableRow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TableRow = (table, users) => {\r\n  users.forEach((item, i) => {\r\n    table.insertAdjacentHTML('beforeend', `\r\n        <tr>\r\n          <td><img src=${item.avatar} alt=\"ava\"></td>\r\n          <td>${item.first_name}</td>\r\n          <td>${item.last_name}</td>\r\n          <td>${item.email}</td>\r\n          <td><button class=\"viewDetails\" id=\"${i+1}\">View details</button></td>\r\n        </tr>\r\n      `)\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableRow);\r\n\n\n//# sourceURL=webpack://alina-zadanko/./src/components/TableRow.js?");

/***/ }),

/***/ "./src/components/UserDetails.js":
/*!***************************************!*\
  !*** ./src/components/UserDetails.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst UserDetails = (details, user) => {\r\n  details.insertAdjacentHTML('beforeend', `\r\n    <ul>\r\n      <li><img src=\"${user.avatar}\" alt=\"ava\"></li>\r\n      <li>First name: ${user.first_name}</li>\r\n      <li>Last name: ${user.last_name}</li>\r\n      <li>Email: ${user.email}</li>\r\n    </ul>\r\n  `)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserDetails);\r\n\n\n//# sourceURL=webpack://alina-zadanko/./src/components/UserDetails.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/service */ \"./src/services/service.js\");\n/* harmony import */ var _components_TableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TableRow */ \"./src/components/TableRow.js\");\n/* harmony import */ var _components_UserDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/UserDetails */ \"./src/components/UserDetails.js\");\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Table */ \"./src/components/Table.js\");\n/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Details */ \"./src/components/Details.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst root = document.querySelector('#root')\r\n\r\n;(0,_components_Table__WEBPACK_IMPORTED_MODULE_3__.default)(root)\r\n;(0,_components_Details__WEBPACK_IMPORTED_MODULE_4__.default)(root)\r\n\r\nconst table = root.firstElementChild\r\n\r\n;(0,_services_service__WEBPACK_IMPORTED_MODULE_0__.getAllUsers)()\r\n  .then(users => {\r\n    ;(0,_components_TableRow__WEBPACK_IMPORTED_MODULE_1__.default)(table, users)\r\n\r\n    table.addEventListener('click', event => {\r\n      if (event.target.tagName === 'BUTTON') {\r\n        (0,_services_service__WEBPACK_IMPORTED_MODULE_0__.getUser)(event.path[0].id)\r\n          .then(res => {\r\n            (0,_components_UserDetails__WEBPACK_IMPORTED_MODULE_2__.default)(table.nextElementSibling, res.data)\r\n          })\r\n\r\n        table\r\n          .nextElementSibling\r\n          .classList.remove(\"hide\")\r\n        table\r\n          .nextElementSibling\r\n          .nextElementSibling\r\n          .classList.remove('hide')\r\n        table.classList.add('hide')\r\n      }\r\n    })\r\n    // document\r\n    //   .querySelectorAll('.viewDetails')\r\n    //   .forEach(btn => {\r\n    //     btn.addEventListener('click', event => {\r\n    //       getUser(event.path[0].id)\r\n    //         .then(res => {\r\n    //           UserDetails(table.nextElementSibling, res.data)\r\n    //         })\r\n    //\r\n    //       table\r\n    //         .nextElementSibling\r\n    //         .classList.remove(\"hide\")\r\n    //       table\r\n    //         .nextElementSibling\r\n    //         .nextElementSibling\r\n    //         .classList.remove('hide')\r\n    //       table.classList.add('hide')\r\n    //     })\r\n    //   })\r\n  })\r\n\r\ntable\r\n  .nextElementSibling\r\n  .nextElementSibling\r\n  .addEventListener('click', (e) => {\r\n    table.classList.remove('hide')\r\n    table.nextElementSibling.classList.add('hide')\r\n    e.target.classList.add('hide')\r\n\r\n    table.nextElementSibling.lastElementChild.remove()\r\n  })\r\n\n\n//# sourceURL=webpack://alina-zadanko/./src/index.js?");

/***/ }),

/***/ "./src/services/service.js":
/*!*********************************!*\
  !*** ./src/services/service.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllUsers\": () => (/* binding */ getAllUsers),\n/* harmony export */   \"getUser\": () => (/* binding */ getUser)\n/* harmony export */ });\nconst apiBase = 'https://reqres.in/api/users/'\r\n\r\nconst getResource = async (url = '') => {\r\n  const response = await fetch(`${apiBase}${url}`)\r\n\r\n  if (!response.ok) {\r\n    throw new Error(`Response is not okay, could not fetch ${url}, status: ${response.status}`)\r\n  }\r\n\r\n  return await response.json()\r\n}\r\n\r\nconst getAllUsers = async () => {\r\n  const users = await getResource()\r\n  return users.data\r\n}\r\n\r\nconst getUser = async (id) => {\r\n  return getResource(`${id}`)\r\n}\r\n\n\n//# sourceURL=webpack://alina-zadanko/./src/services/service.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;