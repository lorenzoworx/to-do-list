"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpacktemplate"] = self["webpackChunkwebpacktemplate"] || []).push([["main"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 80vh;\\n}\\n\\n.todolist {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  border: 1px solid #808080;\\n  width: 40vw;\\n  border-radius: 5px;\\n}\\n\\n.header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n  padding: 10px;\\n}\\n.borderBottom { border-bottom: 1px solid #ccc; }\\n::-webkit-input-placeholder { font-style: italic; }\\n\\n.list {\\n  list-style: none;\\n  padding: 0;\\n}\\n\\n.todoForm { width: 100%; }\\n\\n.input {\\n  display: flex;\\n  align-items: center;\\n  padding: 8px;\\n}\\n\\n.listInput {\\n  flex: 1;\\n  border: none;\\n  outline: none;\\n  font-size: 16px;\\n}\\n\\n.inputButton {\\n  background-color: white;\\n  border: none;\\n  padding: 8px;\\n  cursor: pointer;\\n}\\n\\n.listItem {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 10px;\\n  padding-right: 18px;\\n}\\n\\n.inputEntry {\\n  display: flex;\\n  width: 50%;\\n  gap: 20px;\\n}\\n\\n.clear {\\n  padding: 10px;\\n  background-color: whitesmoke;\\n}\\n\\n.clearBtn {\\n  width: 100%;\\n  font-size: 16px;\\n  border: none;\\n  background-color: whitesmoke;\\n}\\n\\n.hide { display: none; }\\n\\n#editInput {\\n  border: none;\\n  outline: none;\\n}\\n\\n#editInput:focus {\\n  border: none;\\n  outline: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/crud.js */ \"./src/modules/crud.js\");\n\n\n\nconst newList = new _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nnewList.restoreList();\nconst todosInput = document.querySelector('.listInput');\nconst addTaskBtn = document.querySelector('.inputButton');\n\nconst taskList = document.querySelector('.list');\n\ntodosInput.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    e.preventDefault();\n    if (todosInput.value) {\n      newList.addTask();\n    }\n    todosInput.value = '';\n  }\n});\n\naddTaskBtn.addEventListener('click', (e) => {\n  if (e.target.previousElementSibling.value) {\n    newList.addTask();\n  }\n  todosInput.value = '';\n});\n\ntaskList.addEventListener('click', (e) => {\n  if (e.target.id === 'edit') {\n    e.target.classList.add('hide');\n    e.target.nextElementSibling.classList.remove('hide');\n\n    const label = [...e.target.previousElementSibling.children];\n    label.forEach((element) => {\n      if (element.id === 'label') {\n        element.classList.add('hide');\n      } else if (element.id === 'editInput') {\n        element.classList.remove('hide');\n        element.value = element.previousElementSibling.textContent;\n        element.classList.focus();\n      }\n    });\n  } else if (e.target.id === 'save') {\n    e.target.classList.add('hide');\n    e.target.previousElementSibling.classList.remove('hide');\n\n    const label = [...e.target.previousElementSibling.previousElementSibling.children];\n    label.forEach((element) => {\n      if (element.id === 'label') {\n        element.classList.remove('hide');\n        element.textContent = element.nextElementSibling.value;\n        newList.updateTask(element.parentNode.parentNode.id, element.nextElementSibling.value);\n      } else if (element.id === 'editInput') {\n        element.classList.add('hide');\n      }\n    });\n  } else if (e.target.id === 'delete') {\n    const li = e.target.parentNode;\n    const index = li.querySelector('.inputEntry').id;\n    newList.deleteTask(index);\n  }\n});\n\n\n//# sourceURL=webpack://webpacktemplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/crud.js":
/*!*****************************!*\
  !*** ./src/modules/crud.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\n\n\n\nclass List {\n  constructor() {\n    this.myTasks = [];\n    this.store = new _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  updateLocalStore() {\n    this.store.updateLocalStore(this.myTasks);\n  }\n\n  displayTasks() {\n    this.myTasks.forEach((task) => {\n      (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderList)(task);\n    });\n  }\n\n  addTask() {\n    const todoInput = document.querySelector('.listInput');\n    const description = todoInput.value;\n    const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](description, this.myTasks.length + 1);\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderList)(newTask);\n    this.myTasks.push(newTask);\n    this.updateLocalStore();\n  }\n\n  updateTask(index, newDescription) {\n    this.myTasks[index].description = newDescription;\n    this.updateLocalStore();\n  }\n\n  deleteTask(index) {\n    this.myTasks.splice(index, 1);\n    this.updateIndex();\n    _render_js__WEBPACK_IMPORTED_MODULE_1__.taskList.innerHTML = '';\n    this.displayTasks();\n  }\n\n  updateIndex() {\n    this.myTasks.forEach((task, index) => {\n      task.index = index + 1;\n    });\n    this.updateLocalStore();\n  }\n\n  restoreList() {\n    if (!localStorage.getItem('MyTasks')) {\n      this.store.updateLocalStore(this.myTasks);\n      this.myTasks = this.store.getLocalStore();\n    } else {\n      this.myTasks = this.store.getLocalStore();\n    }\n    this.displayTasks();\n  }\n}\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/crud.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderList\": () => (/* binding */ renderList),\n/* harmony export */   \"taskList\": () => (/* binding */ taskList)\n/* harmony export */ });\nconst taskList = document.querySelector('.list');\nfunction renderList(task) {\n  taskList.innerHTML += `\n  <li class='listItem borderBottom' id=\"${task.index - 1}\" >\n    <div class=\"inputEntry\">\n      <input type=\"checkbox\" name=\"\" id=\"\">\n      <p class=\"taskDescription\" id=\"label\">${task.description}</p>\n      <input type=\"text\" id=\"editInput\" class=\"hide\">      \n    </div>\n    <i class=\"fa-solid fa-pen-to-square\" id=\"edit\"></i> \n    <i class=\"fa-solid fa-floppy-disk hide\" id=\"save\"></i>\n    <i class=\"fa-solid fa-trash\" id=\"delete\"></i>    \n  </li>\n  `;\n}\n\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n  getLocalStore = () => {\n    const myTasks = JSON.parse(localStorage.getItem('MyTasks'));\n    return myTasks;\n  }\n\n  updateLocalStore = (myTasks) => {\n    localStorage.setItem('MyTasks', JSON.stringify(myTasks));\n  }\n}\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(description, index, completed = false) {\n    this.description = description;\n    this.index = index;\n    this.completed = completed;\n  }\n}\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/task.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);