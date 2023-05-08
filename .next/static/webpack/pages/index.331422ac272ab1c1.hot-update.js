"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/board.js":
/*!*****************************!*\
  !*** ./components/board.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _Users_henryosterweis_webDev_Final_Project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_henryosterweis_webDev_Final_Project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_henryosterweis_webDev_Final_Project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Board_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Board.module.css */ \"./styles/Board.module.css\");\n/* harmony import */ var _styles_Board_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cell_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cell.js */ \"./components/cell.js\");\n/* harmony import */ var _components_answerList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/answerList.js */ \"./components/answerList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Board = function() {\n    _s();\n    var randomLetter = function() {\n        var letterOdds = \"AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIKJLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ\";\n        var num = Math.floor(Math.random() * 99);\n        if (num == 98) {\n            return \"Z\";\n        }\n        return letterOdds.substring(num, num + 1);\n    };\n    var letterScores = {\n        A: 1,\n        B: 3,\n        C: 3,\n        D: 2,\n        E: 1,\n        F: 4,\n        G: 2,\n        H: 4,\n        I: 1,\n        J: 8,\n        K: 5,\n        L: 1,\n        M: 3,\n        N: 1,\n        O: 1,\n        P: 3,\n        Q: 10,\n        R: 1,\n        S: 1,\n        T: 1,\n        U: 1,\n        V: 4,\n        W: 4,\n        X: 8,\n        Y: 4,\n        Z: 10\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0), score = ref[0], setScore = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), cellLetters = ref1[0], setCellLetters = ref1[1];\n    var letterHolder = [];\n    var generateGame = function() {\n        var rows = 7;\n        var cols = 7;\n        for(var i = 0; i < rows * cols; i++){\n            letterHolder.push(randomLetter());\n        }\n        setCellLetters(letterHolder);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        generateGame();\n    }, []);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), selectedCells = ref2[0], setSelectedCells = ref2[1];\n    var handleSelect = function(index) {\n        setSelectedCells(function(selectedCells) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(selectedCells).concat([\n                index\n            ]);\n        });\n        setScore(function(score) {\n            return score + letterScores[cellLetters[index]];\n        });\n    };\n    var handleDeselect = function(index) {\n        setSelectedCells(function(selectedCells) {\n            var newIndex = selectedCells.indexOf(index);\n            if (newIndex !== -1) {\n                var newSelectedCells = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(selectedCells.slice(0, newIndex)).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(selectedCells.slice(newIndex + 1)));\n                var newScore = newSelectedCells.reduce(function(totalScore, cellIndex) {\n                    return totalScore + letterScores[cellLetters[cellIndex]];\n                }, 0);\n                setScore(newScore);\n                return newSelectedCells;\n            } else {\n                return selectedCells;\n            }\n        });\n    };\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), answersLeft = ref3[0], setAnswersLeft = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), answersRight = ref4[0], setAnswersRight = ref4[1];\n    var submitWord = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_henryosterweis_webDev_Final_Project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var word, isWordValid;\n            return _Users_henryosterweis_webDev_Final_Project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        word = selectedCells.map(function(index) {\n                            return cellLetters[index];\n                        }).join(\"\");\n                        _ctx.next = 3;\n                        return checkWord(word);\n                    case 3:\n                        isWordValid = _ctx.sent;\n                        if (isWordValid) {\n                            console.log(word);\n                            if (answersLeft.length >= 6) {\n                                setAnswersRight((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(answersRight).concat([\n                                    word\n                                ]));\n                            } else {\n                                setAnswersLeft((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(answersLeft).concat([\n                                    word\n                                ]));\n                            }\n                            setScore(function(score) {\n                                return score + word.length;\n                            });\n                            randomizeSelectedCells();\n                        } else {\n                            console.error(\"Invalid word\");\n                        }\n                        setSelectedCells([]);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function submitWord() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var randomizeSelectedCells = function() {\n        setCellLetters(function(cellLetters) {\n            return cellLetters.map(function(letter, index) {\n                if (selectedCells.includes(index)) {\n                    return randomLetter();\n                } else {\n                    return letter;\n                }\n            });\n        });\n    };\n    var checkWord = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_henryosterweis_webDev_Final_Project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(word) {\n            var response, data;\n            return _Users_henryosterweis_webDev_Final_Project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return fetch(\"https://api.dictionaryapi.dev/api/v2/entries/en/\".concat(word));\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.next = 6;\n                        return response.json();\n                    case 6:\n                        data = _ctx.sent;\n                        if (!(data.title === \"No Definitions Found\")) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", false);\n                    case 9:\n                        return _ctx.abrupt(\"return\", true);\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function checkWord(word) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_answerList_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        side: \"left\",\n                        answers: answersLeft\n                    }, void 0, false, {\n                        fileName: \"/Users/henryosterweis/webDev/Final Project/components/board.js\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_8___default().play),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                style: {\n                                    fontSize: \"3em\"\n                                },\n                                children: \"play Squrbble\"\n                            }, void 0, false, {\n                                fileName: \"/Users/henryosterweis/webDev/Final Project/components/board.js\",\n                                lineNumber: 111,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_8___default().word),\n                                children: selectedCells.map(function(index) {\n                                    return cellLetters[index];\n                                }).join(\"\")\n                            }, void 0, false, {\n                                fileName: \"/Users/henryosterweis/webDev/Final Project/components/board.js\",\n                                lineNumber: 112,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: submitWord,\n                                children: \"Submit Word\"\n                            }, void 0, false, {\n                                fileName: \"/Users/henryosterweis/webDev/Final Project/components/board.js\",\n                                lineNumber: 113,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"Score: \",\n                                    score,\n                                    \" Words: \",\n                                    answersLeft.length + answersRight.length,\n                                    \" / 12\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/henryosterweis/webDev/Final Project/components/board.js\",\n                                lineNumber: 114,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_8___default().board),\n                                id: \"board\",\n                                children: cellLetters.map(function(letter, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_cell_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        letter: letter,\n                                        points: letterScores[cellLetters[index]],\n                                        selected: selectedCells.includes(index),\n                                        onSelect: function() {\n                                            return handleSelect(index);\n                                        },\n                                        onDeselect: function() {\n                                            return handleDeselect(index);\n                                        },\n                                        index: index,\n                                        cellLetters: cellLetters\n                                    }, index, false, {\n                                        fileName: \"/Users/henryosterweis/webDev/Final Project/components/board.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 29\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/henryosterweis/webDev/Final Project/components/board.js\",\n                                lineNumber: 115,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/henryosterweis/webDev/Final Project/components/board.js\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_answerList_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        side: \"right\",\n                        answers: answersRight\n                    }, void 0, false, {\n                        fileName: \"/Users/henryosterweis/webDev/Final Project/components/board.js\",\n                        lineNumber: 130,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/henryosterweis/webDev/Final Project/components/board.js\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/docs\",\n                children: \"Documentation\"\n            }, void 0, false, {\n                fileName: \"/Users/henryosterweis/webDev/Final Project/components/board.js\",\n                lineNumber: 132,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/henryosterweis/webDev/Final Project/components/board.js\",\n        lineNumber: 107,\n        columnNumber: 9\n    }, _this);\n};\n_s(Board, \"I//bJOaPc3H8eGbu+z0UuHwBpl0=\");\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsS0FBSztBQWtJWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYm9hcmQuanM/OWVlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Cb2FyZC5tb2R1bGUuY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQ2VsbCBmcm9tICcuLi9jb21wb25lbnRzL2NlbGwuanMnO1xuaW1wb3J0IEFuc3dlckxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9hbnN3ZXJMaXN0LmpzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHJhbmRvbUxldHRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbGV0dGVyT2RkcyA9IGBBQUFBQUFBQUFCQkNDREREREVFRUVFRUVFRUVFRUZGR0dHSEhJSUlJSUlJSUlLSkxMTExNTU5OTk5OTk9PT09PT09PUFBRUlJSUlJSU1NTU1RUVFRUVFVVVVVWVldXWFlZWmA7XG4gICAgICAgIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OSk7XG4gICAgICAgIGlmIChudW0gPT0gOTgpIHtcbiAgICAgICAgICAgIHJldHVybiAnWic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxldHRlck9kZHMuc3Vic3RyaW5nKG51bSwgbnVtICsgMSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxldHRlclNjb3JlcyA9IHtcbiAgICAgICAgQToxLEI6MyxDOjMsRDoyLEU6MSxGOjQsRzoyLEg6NCxJOjEsSjo4LEs6NSxMOjEsTTozLE46MSxPOjEsUDozLFE6MTAsUjoxLFM6MSxUOjEsVToxLFY6NCxXOjQsWDo4LFk6NCxaOjEwXG4gICAgfVxuXG4gICAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IFtjZWxsTGV0dGVycywgc2V0Q2VsbExldHRlcnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IGxldHRlckhvbGRlciA9IFtdO1xuXG4gICAgY29uc3QgZ2VuZXJhdGVHYW1lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByb3dzID0gNztcbiAgICAgICAgY29uc3QgY29scyA9IDc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cyAqIGNvbHM7IGkrKykge1xuICAgICAgICAgICAgbGV0dGVySG9sZGVyLnB1c2gocmFuZG9tTGV0dGVyKCkpO1xuICAgICAgICB9XG4gICAgICAgIHNldENlbGxMZXR0ZXJzKGxldHRlckhvbGRlcik7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdlbmVyYXRlR2FtZSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IFtzZWxlY3RlZENlbGxzLCBzZXRTZWxlY3RlZENlbGxzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZENlbGxzKHNlbGVjdGVkQ2VsbHMgPT4gWy4uLnNlbGVjdGVkQ2VsbHMsIGluZGV4XSk7XG4gICAgICAgIHNldFNjb3JlKHNjb3JlID0+IHNjb3JlICsgbGV0dGVyU2NvcmVzW2NlbGxMZXR0ZXJzW2luZGV4XV0pO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBoYW5kbGVEZXNlbGVjdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZENlbGxzKHNlbGVjdGVkQ2VsbHMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBzZWxlY3RlZENlbGxzLmluZGV4T2YoaW5kZXgpO1xuICAgICAgICAgICAgaWYgKG5ld0luZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NlbGVjdGVkQ2VsbHMgPSBbLi4uc2VsZWN0ZWRDZWxscy5zbGljZSgwLCBuZXdJbmRleCksIC4uLnNlbGVjdGVkQ2VsbHMuc2xpY2UobmV3SW5kZXggKyAxKV07XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U2NvcmUgPSBuZXdTZWxlY3RlZENlbGxzLnJlZHVjZSgodG90YWxTY29yZSwgY2VsbEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsU2NvcmUgKyBsZXR0ZXJTY29yZXNbY2VsbExldHRlcnNbY2VsbEluZGV4XV07XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICBzZXRTY29yZShuZXdTY29yZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1NlbGVjdGVkQ2VsbHM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENlbGxzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBbYW5zd2Vyc0xlZnQsIHNldEFuc3dlcnNMZWZ0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbYW5zd2Vyc1JpZ2h0LCBzZXRBbnN3ZXJzUmlnaHRdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3Qgc3VibWl0V29yZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3Qgd29yZCA9IHNlbGVjdGVkQ2VsbHMubWFwKGluZGV4ID0+IGNlbGxMZXR0ZXJzW2luZGV4XSkuam9pbignJyk7ICAgIFxuICAgICAgICBjb25zdCBpc1dvcmRWYWxpZCA9IGF3YWl0IGNoZWNrV29yZCh3b3JkKTtcbiAgICAgICAgaWYgKGlzV29yZFZhbGlkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3b3JkKVxuICAgICAgICAgICAgaWYgKGFuc3dlcnNMZWZ0Lmxlbmd0aCA+PSA2KSB7XG4gICAgICAgICAgICAgICAgc2V0QW5zd2Vyc1JpZ2h0KFsuLi5hbnN3ZXJzUmlnaHQsIHdvcmRdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0QW5zd2Vyc0xlZnQoWy4uLmFuc3dlcnNMZWZ0LCB3b3JkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRTY29yZShzY29yZSA9PiBzY29yZSArIHdvcmQubGVuZ3RoKTtcbiAgICAgICAgICAgIHJhbmRvbWl6ZVNlbGVjdGVkQ2VsbHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgd29yZCcpO1xuICAgICAgICB9XG4gICAgICAgIHNldFNlbGVjdGVkQ2VsbHMoW10pO1xuICAgIH07XG5cbiAgICBjb25zdCByYW5kb21pemVTZWxlY3RlZENlbGxzID0gKCkgPT4ge1xuICAgICAgICBzZXRDZWxsTGV0dGVycyhjZWxsTGV0dGVycyA9PiBjZWxsTGV0dGVycy5tYXAoKGxldHRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZENlbGxzLmluY2x1ZGVzKGluZGV4KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByYW5kb21MZXR0ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxldHRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja1dvcmQgPSBhc3luYyAod29yZCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZGljdGlvbmFyeWFwaS5kZXYvYXBpL3YyL2VudHJpZXMvZW4vJHt3b3JkfWApO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnRpdGxlID09PSBcIk5vIERlZmluaXRpb25zIEZvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgICAgIDxBbnN3ZXJMaXN0IHNpZGU9eydsZWZ0J30gYW5zd2Vycz17YW5zd2Vyc0xlZnR9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5fT5cbiAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRTaXplOiBcIjNlbVwiLCB9fT5wbGF5IFNxdXJiYmxlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMud29yZH0+e3NlbGVjdGVkQ2VsbHMubWFwKGluZGV4ID0+IGNlbGxMZXR0ZXJzW2luZGV4XSkuam9pbignJyl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdFdvcmR9PlN1Ym1pdCBXb3JkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5TY29yZToge3Njb3JlfSBXb3Jkczoge2Fuc3dlcnNMZWZ0Lmxlbmd0aCArIGFuc3dlcnNSaWdodC5sZW5ndGh9IC8gMTI8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvYXJkfSBpZD0nYm9hcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NlbGxMZXR0ZXJzLm1hcCgobGV0dGVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcj17bGV0dGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludHM9e2xldHRlclNjb3Jlc1tjZWxsTGV0dGVyc1tpbmRleF1dfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRDZWxscy5pbmNsdWRlcyhpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoKSA9PiBoYW5kbGVTZWxlY3QoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlc2VsZWN0PXsoKSA9PiBoYW5kbGVEZXNlbGVjdChpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbExldHRlcnM9e2NlbGxMZXR0ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEFuc3dlckxpc3Qgc2lkZT17J3JpZ2h0J30gYW5zd2Vycz17YW5zd2Vyc1JpZ2h0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPScvZG9jcyc+RG9jdW1lbnRhdGlvbjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJMaW5rIiwiQ2VsbCIsIkFuc3dlckxpc3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJvYXJkIiwicmFuZG9tTGV0dGVyIiwibGV0dGVyT2RkcyIsIm51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInN1YnN0cmluZyIsImxldHRlclNjb3JlcyIsIkEiLCJCIiwiQyIsIkQiLCJFIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJLIiwiTCIsIk0iLCJOIiwiTyIsIlAiLCJRIiwiUiIsIlMiLCJUIiwiVSIsIlYiLCJXIiwiWCIsIlkiLCJaIiwic2NvcmUiLCJzZXRTY29yZSIsImNlbGxMZXR0ZXJzIiwic2V0Q2VsbExldHRlcnMiLCJsZXR0ZXJIb2xkZXIiLCJnZW5lcmF0ZUdhbWUiLCJyb3dzIiwiY29scyIsImkiLCJwdXNoIiwic2VsZWN0ZWRDZWxscyIsInNldFNlbGVjdGVkQ2VsbHMiLCJoYW5kbGVTZWxlY3QiLCJpbmRleCIsImhhbmRsZURlc2VsZWN0IiwibmV3SW5kZXgiLCJpbmRleE9mIiwibmV3U2VsZWN0ZWRDZWxscyIsInNsaWNlIiwibmV3U2NvcmUiLCJyZWR1Y2UiLCJ0b3RhbFNjb3JlIiwiY2VsbEluZGV4IiwiYW5zd2Vyc0xlZnQiLCJzZXRBbnN3ZXJzTGVmdCIsImFuc3dlcnNSaWdodCIsInNldEFuc3dlcnNSaWdodCIsInN1Ym1pdFdvcmQiLCJ3b3JkIiwiaXNXb3JkVmFsaWQiLCJtYXAiLCJqb2luIiwiY2hlY2tXb3JkIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInJhbmRvbWl6ZVNlbGVjdGVkQ2VsbHMiLCJlcnJvciIsImxldHRlciIsImluY2x1ZGVzIiwicmVzcG9uc2UiLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYWluIiwic2lkZSIsImFuc3dlcnMiLCJwbGF5IiwiaDEiLCJzdHlsZSIsImZvbnRTaXplIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsImJvYXJkIiwiaWQiLCJwb2ludHMiLCJzZWxlY3RlZCIsIm9uU2VsZWN0Iiwib25EZXNlbGVjdCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/board.js\n"));

/***/ })

});