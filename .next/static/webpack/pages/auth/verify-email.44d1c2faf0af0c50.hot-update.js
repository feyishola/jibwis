"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/verify-email",{

/***/ "./src/pages/auth/verify-email.js":
/*!****************************************!*\
  !*** ./src/pages/auth/verify-email.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_config_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/config-variables */ \"./src/config-variables.js\");\n/* harmony import */ var src_contexts_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/contexts/store */ \"./src/contexts/store.js\");\n/* harmony import */ var realm_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! realm-web */ \"./node_modules/realm-web/dist/bundle.dom.es.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const realmApp = new realm_web__WEBPACK_IMPORTED_MODULE_5__.App({\n        id: \"application-0-qroqk\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [render, setRender] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { login  } = (0,src_contexts_store__WEBPACK_IMPORTED_MODULE_4__.useBearStore)();\n    //   console.log({ token, tokenId });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // const validateUser = async () => {\n        const { token , tokenId  } = router.query;\n        try {\n            if (token) {\n                console.log({\n                    tokenId,\n                    token\n                });\n                setRender([\n                    token,\n                    tokenId\n                ]);\n                realmApp.emailPasswordAuth.confirmUser({\n                    token,\n                    tokenId\n                }).then((res)=>{\n                    alert(\"user validated\");\n                }).catch((err)=>{\n                    console.log(err.message);\n                });\n            } else {\n                throw new Error(\"token not available\");\n            }\n        } catch (error) {\n            console.log(error.message);\n            console.log(render);\n        }\n    // };\n    // validateUser();\n    // if (token) {\n    //   realmApp.emailPasswordAuth\n    //     .confirmUser({ token, tokenId })\n    //     .then((res) => console.log(res))\n    //     //   .then((res) => console.log({ res }))\n    //     .catch((err) => console.log(err.message));\n    // } else {\n    //   alert(\"token not available\");\n    // }\n    }, [\n        router.query\n    ]);\n    //   useEffect(() => {\n    //       // Get the 'token' query parameter from the URL\n    //       const { token, tokenId } = router.query;\n    //       setRender(\"validating .....\");\n    //       if (token) {\n    //         // Do so{mething with the token (e.g., send it to the server for processing)\n    //         // fetch(`${configs.baseUrl}/auth/verify-email`, {\n    //         //   method: \"POST\",\n    //         //   headers: {\n    //         //     \"Content-Type\": \"application/json\",\n    //         //   },\n    //         //   body: JSON.stringify(token),\n    //         // })\n    //         //   .then((res) => res.json())\n    //         //   .then((res) => {\n    //         //     const { ok, data, message } = res;\n    //         //     let { user, token: jwt } = data;\n    //         //     setRender(message);\n    //         //     if (ok) {\n    //         //       setRender(\"setting up stuff\");\n    //         //       login(user, jwt);\n    //         //       // router.push('/');\n    //         //       return;\n    //         //     } else {\n    //         //       setRender(message);\n    //         //       // router.push('/'); // route guard will catch this\n    //         //       return;\n    //         //     }\n    //         //   });\n    //\n    //       } else {\n    //         setRender(message);\n    //         setTimeout(() => {\n    //           router.push(\"/\"); // route guard will catch this\n    //         }, 3000);\n    //       }\n    //     }, [router.query]);\n    //     return <div>{render}</div>;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: render\n        }, void 0, false, {\n            fileName: \"/home/feyishola/Desktop/mydev/FRONT-END/jibwis/src/pages/auth/verify-email.js\",\n            lineNumber: 97,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/feyishola/Desktop/mydev/FRONT-END/jibwis/src/pages/auth/verify-email.js\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"s0QROnGvPDEVsSmKCXNgprJIYCg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        src_contexts_store__WEBPACK_IMPORTED_MODULE_4__.useBearStore\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXV0aC92ZXJpZnktZW1haWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDd0M7QUFDSTtBQUNHO0FBQ0c7QUFDZjtBQUVuQyxNQUFNTSxPQUFPLElBQU07O0lBQ2pCLE1BQU1DLFdBQVcsSUFBSUYsMENBQVMsQ0FBQztRQUFFSSxJQUFJO0lBQXNCO0lBQzNELE1BQU1DLFNBQVNWLHNEQUFTQTtJQUN4QixNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxFQUFFVyxNQUFLLEVBQUUsR0FBR1QsZ0VBQVlBO0lBRTlCLHFDQUFxQztJQUVyQ0gsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLHFDQUFxQztRQUNyQyxNQUFNLEVBQUVhLE1BQUssRUFBRUMsUUFBTyxFQUFFLEdBQUdMLE9BQU9NLEtBQUs7UUFDdkMsSUFBSTtZQUNGLElBQUlGLE9BQU87Z0JBQ1RHLFFBQVFDLEdBQUcsQ0FBQztvQkFBRUg7b0JBQVNEO2dCQUFNO2dCQUM3QkYsVUFBVTtvQkFBQ0U7b0JBQU9DO2lCQUFRO2dCQUMxQlIsU0FBU1ksaUJBQWlCLENBQ3ZCQyxXQUFXLENBQUM7b0JBQ1hOO29CQUNBQztnQkFDRixHQUNDTSxJQUFJLENBQUMsQ0FBQ0MsTUFBUTtvQkFDYkMsTUFBTTtnQkFDUixHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsTUFBUTtvQkFDZFIsUUFBUUMsR0FBRyxDQUFDTyxJQUFJQyxPQUFPO2dCQUN6QjtZQUNKLE9BQU87Z0JBQ0wsTUFBTSxJQUFJQyxNQUFNLHVCQUF1QjtZQUN6QyxDQUFDO1FBQ0gsRUFBRSxPQUFPQyxPQUFPO1lBQ2RYLFFBQVFDLEdBQUcsQ0FBQ1UsTUFBTUYsT0FBTztZQUN6QlQsUUFBUUMsR0FBRyxDQUFDUDtRQUNkO0lBQ0EsS0FBSztJQUVMLGtCQUFrQjtJQUVsQixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsZ0RBQWdEO0lBQ2hELGlEQUFpRDtJQUNqRCxXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLElBQUk7SUFDTixHQUFHO1FBQUNELE9BQU9NLEtBQUs7S0FBQztJQUVqQixzQkFBc0I7SUFDdEIsd0RBQXdEO0lBQ3hELGlEQUFpRDtJQUNqRCx1Q0FBdUM7SUFDdkMscUJBQXFCO0lBQ3JCLHVGQUF1RjtJQUN2Riw2REFBNkQ7SUFDN0QsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixxREFBcUQ7SUFDckQsa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLGdDQUFnQztJQUNoQyxvREFBb0Q7SUFDcEQsa0RBQWtEO0lBQ2xELHFDQUFxQztJQUNyQywyQkFBMkI7SUFDM0Isa0RBQWtEO0lBQ2xELHFDQUFxQztJQUNyQyx3Q0FBd0M7SUFDeEMsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQix1Q0FBdUM7SUFDdkMsdUVBQXVFO0lBQ3ZFLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLEVBQUU7SUFDRixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw2REFBNkQ7SUFDN0Qsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDViwwQkFBMEI7SUFFMUIsa0NBQWtDO0lBQ2xDLHFCQUNFLDhEQUFDYTtrQkFDQyw0RUFBQ0M7c0JBQUluQjs7Ozs7Ozs7Ozs7QUFHWDtHQTVGTUw7O1FBRVdOLGtEQUFTQTtRQUVOSSw0REFBWUE7OztLQUoxQkU7QUE4Rk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2F1dGgvdmVyaWZ5LWVtYWlsLmpzP2EwM2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbmZpZ3MgfSBmcm9tIFwic3JjL2NvbmZpZy12YXJpYWJsZXNcIjtcbmltcG9ydCB7IHVzZUJlYXJTdG9yZSB9IGZyb20gXCJzcmMvY29udGV4dHMvc3RvcmVcIjtcbmltcG9ydCAqIGFzIFJlYWxtIGZyb20gXCJyZWFsbS13ZWJcIjtcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgcmVhbG1BcHAgPSBuZXcgUmVhbG0uQXBwKHsgaWQ6IFwiYXBwbGljYXRpb24tMC1xcm9xa1wiIH0pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3JlbmRlciwgc2V0UmVuZGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCB7IGxvZ2luIH0gPSB1c2VCZWFyU3RvcmUoKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKHsgdG9rZW4sIHRva2VuSWQgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zdCB2YWxpZGF0ZVVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyB0b2tlbiwgdG9rZW5JZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIHRyeSB7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coeyB0b2tlbklkLCB0b2tlbiB9KTtcbiAgICAgICAgc2V0UmVuZGVyKFt0b2tlbiwgdG9rZW5JZF0pO1xuICAgICAgICByZWFsbUFwcC5lbWFpbFBhc3N3b3JkQXV0aFxuICAgICAgICAgIC5jb25maXJtVXNlcih7XG4gICAgICAgICAgICB0b2tlbixcbiAgICAgICAgICAgIHRva2VuSWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcInVzZXIgdmFsaWRhdGVkXCIpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInRva2VuIG5vdCBhdmFpbGFibGVcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgY29uc29sZS5sb2cocmVuZGVyKTtcbiAgICB9XG4gICAgLy8gfTtcblxuICAgIC8vIHZhbGlkYXRlVXNlcigpO1xuXG4gICAgLy8gaWYgKHRva2VuKSB7XG4gICAgLy8gICByZWFsbUFwcC5lbWFpbFBhc3N3b3JkQXV0aFxuICAgIC8vICAgICAuY29uZmlybVVzZXIoeyB0b2tlbiwgdG9rZW5JZCB9KVxuICAgIC8vICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgIC8vICAgICAvLyAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHsgcmVzIH0pKVxuICAgIC8vICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgYWxlcnQoXCJ0b2tlbiBub3QgYXZhaWxhYmxlXCIpO1xuICAgIC8vIH1cbiAgfSwgW3JvdXRlci5xdWVyeV0pO1xuXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgICAgLy8gR2V0IHRoZSAndG9rZW4nIHF1ZXJ5IHBhcmFtZXRlciBmcm9tIHRoZSBVUkxcbiAgLy8gICAgICAgY29uc3QgeyB0b2tlbiwgdG9rZW5JZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICAvLyAgICAgICBzZXRSZW5kZXIoXCJ2YWxpZGF0aW5nIC4uLi4uXCIpO1xuICAvLyAgICAgICBpZiAodG9rZW4pIHtcbiAgLy8gICAgICAgICAvLyBEbyBzb3ttZXRoaW5nIHdpdGggdGhlIHRva2VuIChlLmcuLCBzZW5kIGl0IHRvIHRoZSBzZXJ2ZXIgZm9yIHByb2Nlc3NpbmcpXG4gIC8vICAgICAgICAgLy8gZmV0Y2goYCR7Y29uZmlncy5iYXNlVXJsfS9hdXRoL3ZlcmlmeS1lbWFpbGAsIHtcbiAgLy8gICAgICAgICAvLyAgIG1ldGhvZDogXCJQT1NUXCIsXG4gIC8vICAgICAgICAgLy8gICBoZWFkZXJzOiB7XG4gIC8vICAgICAgICAgLy8gICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAvLyAgICAgICAgIC8vICAgfSxcbiAgLy8gICAgICAgICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRva2VuKSxcbiAgLy8gICAgICAgICAvLyB9KVxuICAvLyAgICAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgLy8gICAgICAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcbiAgLy8gICAgICAgICAvLyAgICAgY29uc3QgeyBvaywgZGF0YSwgbWVzc2FnZSB9ID0gcmVzO1xuICAvLyAgICAgICAgIC8vICAgICBsZXQgeyB1c2VyLCB0b2tlbjogand0IH0gPSBkYXRhO1xuICAvLyAgICAgICAgIC8vICAgICBzZXRSZW5kZXIobWVzc2FnZSk7XG4gIC8vICAgICAgICAgLy8gICAgIGlmIChvaykge1xuICAvLyAgICAgICAgIC8vICAgICAgIHNldFJlbmRlcihcInNldHRpbmcgdXAgc3R1ZmZcIik7XG4gIC8vICAgICAgICAgLy8gICAgICAgbG9naW4odXNlciwgand0KTtcbiAgLy8gICAgICAgICAvLyAgICAgICAvLyByb3V0ZXIucHVzaCgnLycpO1xuICAvLyAgICAgICAgIC8vICAgICAgIHJldHVybjtcbiAgLy8gICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAvLyAgICAgICBzZXRSZW5kZXIobWVzc2FnZSk7XG4gIC8vICAgICAgICAgLy8gICAgICAgLy8gcm91dGVyLnB1c2goJy8nKTsgLy8gcm91dGUgZ3VhcmQgd2lsbCBjYXRjaCB0aGlzXG4gIC8vICAgICAgICAgLy8gICAgICAgcmV0dXJuO1xuICAvLyAgICAgICAgIC8vICAgICB9XG4gIC8vICAgICAgICAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBzZXRSZW5kZXIobWVzc2FnZSk7XG4gIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7IC8vIHJvdXRlIGd1YXJkIHdpbGwgY2F0Y2ggdGhpc1xuICAvLyAgICAgICAgIH0sIDMwMDApO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9LCBbcm91dGVyLnF1ZXJ5XSk7XG5cbiAgLy8gICAgIHJldHVybiA8ZGl2PntyZW5kZXJ9PC9kaXY+O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+e3JlbmRlcn08L2gzPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbmZpZ3MiLCJ1c2VCZWFyU3RvcmUiLCJSZWFsbSIsIlBhZ2UiLCJyZWFsbUFwcCIsIkFwcCIsImlkIiwicm91dGVyIiwicmVuZGVyIiwic2V0UmVuZGVyIiwibG9naW4iLCJ0b2tlbiIsInRva2VuSWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbFBhc3N3b3JkQXV0aCIsImNvbmZpcm1Vc2VyIiwidGhlbiIsInJlcyIsImFsZXJ0IiwiY2F0Y2giLCJlcnIiLCJtZXNzYWdlIiwiRXJyb3IiLCJlcnJvciIsImRpdiIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/auth/verify-email.js\n"));

/***/ })

});