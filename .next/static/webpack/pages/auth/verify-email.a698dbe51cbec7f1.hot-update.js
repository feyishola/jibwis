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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_config_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config-variables */ \"./src/config-variables.js\");\n/* harmony import */ var src_contexts_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/contexts/store */ \"./src/contexts/store.js\");\n/* harmony import */ var realm_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! realm-web */ \"./node_modules/realm-web/dist/bundle.dom.es.js\");\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const realmApp = new realm_web__WEBPACK_IMPORTED_MODULE_4__.App({\n        id: \"application-0-qroqk\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    const [render, setRender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { login  } = (0,src_contexts_store__WEBPACK_IMPORTED_MODULE_3__.useBearStore)();\n    //   console.log({ token, tokenId });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { token , tokenId  } = router.query;\n        // async function validateUser() {\n        //   console.log({ token, tokenId });\n        //   try {\n        //     await realmApp.emailPasswordAuth.confirmUser({ token, tokenId });\n        //   } catch (error) {\n        //     alert(error.message);\n        //   }\n        // }\n        // if (token) {\n        //   validateUser();\n        // } else {\n        //   alert(\"token not available\");\n        // }\n        realmApp.emailPasswordAuth.confirmUser({\n            token,\n            tokenId\n        }).then((res)=>console.log(res))//   .then((res) => console.log({ res }))\n        .catch((err)=>console.log(err.message));\n    }, [\n        router.query\n    ]);\n//   useEffect(() => {\n//       // Get the 'token' query parameter from the URL\n//       const { token, tokenId } = router.query;\n//       setRender(\"validating .....\");\n//       if (token) {\n//         // Do so{mething with the token (e.g., send it to the server for processing)\n//         // fetch(`${configs.baseUrl}/auth/verify-email`, {\n//         //   method: \"POST\",\n//         //   headers: {\n//         //     \"Content-Type\": \"application/json\",\n//         //   },\n//         //   body: JSON.stringify(token),\n//         // })\n//         //   .then((res) => res.json())\n//         //   .then((res) => {\n//         //     const { ok, data, message } = res;\n//         //     let { user, token: jwt } = data;\n//         //     setRender(message);\n//         //     if (ok) {\n//         //       setRender(\"setting up stuff\");\n//         //       login(user, jwt);\n//         //       // router.push('/');\n//         //       return;\n//         //     } else {\n//         //       setRender(message);\n//         //       // router.push('/'); // route guard will catch this\n//         //       return;\n//         //     }\n//         //   });\n//         validateUser();\n//       } else {\n//         setRender(message);\n//         setTimeout(() => {\n//           router.push(\"/\"); // route guard will catch this\n//         }, 3000);\n//       }\n//     }, [router.query]);\n//     return <div>{render}</div>;\n//   return (\n//     <div>\n//       <h3>verify email</h3>\n//     </div>\n//   );\n};\n_s(Page, \"s0QROnGvPDEVsSmKCXNgprJIYCg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter,\n        src_contexts_store__WEBPACK_IMPORTED_MODULE_3__.useBearStore\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXV0aC92ZXJpZnktZW1haWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDd0M7QUFDSTtBQUNHO0FBQ0c7QUFDZjtBQUVuQyxNQUFNTSxPQUFPLElBQU07O0lBQ2pCLE1BQU1DLFdBQVcsSUFBSUYsMENBQVMsQ0FBQztRQUFFSSxJQUFJO0lBQXNCO0lBQzNELE1BQU1DLFNBQVNWLHNEQUFTQTtJQUN4QixNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxFQUFFVyxNQUFLLEVBQUUsR0FBR1QsZ0VBQVlBO0lBRTlCLHFDQUFxQztJQUVyQ0gsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU0sRUFBRWEsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR0wsT0FBT00sS0FBSztRQUV2QyxrQ0FBa0M7UUFDbEMscUNBQXFDO1FBQ3JDLFVBQVU7UUFDVix3RUFBd0U7UUFDeEUsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QixNQUFNO1FBQ04sSUFBSTtRQUNKLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsV0FBVztRQUNYLGtDQUFrQztRQUNsQyxJQUFJO1FBRUpULFNBQVNVLGlCQUFpQixDQUN2QkMsV0FBVyxDQUFDO1lBQUVKO1lBQU9DO1FBQVEsR0FDN0JJLElBQUksQ0FBQyxDQUFDQyxNQUFRQyxRQUFRQyxHQUFHLENBQUNGLEtBQzNCLHlDQUF5QztTQUN4Q0csS0FBSyxDQUFDLENBQUNDLE1BQVFILFFBQVFDLEdBQUcsQ0FBQ0UsSUFBSUMsT0FBTztJQUMzQyxHQUFHO1FBQUNmLE9BQU9NLEtBQUs7S0FBQztBQUVqQixzQkFBc0I7QUFDdEIsd0RBQXdEO0FBQ3hELGlEQUFpRDtBQUNqRCx1Q0FBdUM7QUFDdkMscUJBQXFCO0FBQ3JCLHVGQUF1RjtBQUN2Riw2REFBNkQ7QUFDN0QsK0JBQStCO0FBQy9CLDBCQUEwQjtBQUMxQixxREFBcUQ7QUFDckQsa0JBQWtCO0FBQ2xCLDRDQUE0QztBQUM1QyxnQkFBZ0I7QUFDaEIsMENBQTBDO0FBQzFDLGdDQUFnQztBQUNoQyxvREFBb0Q7QUFDcEQsa0RBQWtEO0FBQ2xELHFDQUFxQztBQUNyQywyQkFBMkI7QUFDM0Isa0RBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyx3Q0FBd0M7QUFDeEMsMkJBQTJCO0FBQzNCLDBCQUEwQjtBQUMxQix1Q0FBdUM7QUFDdkMsdUVBQXVFO0FBQ3ZFLDJCQUEyQjtBQUMzQixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakIsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3Qiw2REFBNkQ7QUFDN0Qsb0JBQW9CO0FBQ3BCLFVBQVU7QUFDViwwQkFBMEI7QUFFMUIsa0NBQWtDO0FBQ2xDLGFBQWE7QUFDYixZQUFZO0FBQ1osOEJBQThCO0FBQzlCLGFBQWE7QUFDYixPQUFPO0FBQ1Q7R0E1RU1WOztRQUVXTixrREFBU0E7UUFFTkksNERBQVlBOzs7S0FKMUJFO0FBOEVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hdXRoL3ZlcmlmeS1lbWFpbC5qcz9hMDNmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25maWdzIH0gZnJvbSBcInNyYy9jb25maWctdmFyaWFibGVzXCI7XG5pbXBvcnQgeyB1c2VCZWFyU3RvcmUgfSBmcm9tIFwic3JjL2NvbnRleHRzL3N0b3JlXCI7XG5pbXBvcnQgKiBhcyBSZWFsbSBmcm9tIFwicmVhbG0td2ViXCI7XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJlYWxtQXBwID0gbmV3IFJlYWxtLkFwcCh7IGlkOiBcImFwcGxpY2F0aW9uLTAtcXJvcWtcIiB9KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtyZW5kZXIsIHNldFJlbmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgeyBsb2dpbiB9ID0gdXNlQmVhclN0b3JlKCk7XG5cbiAgLy8gICBjb25zb2xlLmxvZyh7IHRva2VuLCB0b2tlbklkIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyB0b2tlbiwgdG9rZW5JZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gICAgLy8gYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVVc2VyKCkge1xuICAgIC8vICAgY29uc29sZS5sb2coeyB0b2tlbiwgdG9rZW5JZCB9KTtcbiAgICAvLyAgIHRyeSB7XG4gICAgLy8gICAgIGF3YWl0IHJlYWxtQXBwLmVtYWlsUGFzc3dvcmRBdXRoLmNvbmZpcm1Vc2VyKHsgdG9rZW4sIHRva2VuSWQgfSk7XG4gICAgLy8gICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy8gaWYgKHRva2VuKSB7XG4gICAgLy8gICB2YWxpZGF0ZVVzZXIoKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgYWxlcnQoXCJ0b2tlbiBub3QgYXZhaWxhYmxlXCIpO1xuICAgIC8vIH1cblxuICAgIHJlYWxtQXBwLmVtYWlsUGFzc3dvcmRBdXRoXG4gICAgICAuY29uZmlybVVzZXIoeyB0b2tlbiwgdG9rZW5JZCB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSlcbiAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2coeyByZXMgfSkpXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcbiAgfSwgW3JvdXRlci5xdWVyeV0pO1xuXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgICAgLy8gR2V0IHRoZSAndG9rZW4nIHF1ZXJ5IHBhcmFtZXRlciBmcm9tIHRoZSBVUkxcbiAgLy8gICAgICAgY29uc3QgeyB0b2tlbiwgdG9rZW5JZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICAvLyAgICAgICBzZXRSZW5kZXIoXCJ2YWxpZGF0aW5nIC4uLi4uXCIpO1xuICAvLyAgICAgICBpZiAodG9rZW4pIHtcbiAgLy8gICAgICAgICAvLyBEbyBzb3ttZXRoaW5nIHdpdGggdGhlIHRva2VuIChlLmcuLCBzZW5kIGl0IHRvIHRoZSBzZXJ2ZXIgZm9yIHByb2Nlc3NpbmcpXG4gIC8vICAgICAgICAgLy8gZmV0Y2goYCR7Y29uZmlncy5iYXNlVXJsfS9hdXRoL3ZlcmlmeS1lbWFpbGAsIHtcbiAgLy8gICAgICAgICAvLyAgIG1ldGhvZDogXCJQT1NUXCIsXG4gIC8vICAgICAgICAgLy8gICBoZWFkZXJzOiB7XG4gIC8vICAgICAgICAgLy8gICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAvLyAgICAgICAgIC8vICAgfSxcbiAgLy8gICAgICAgICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRva2VuKSxcbiAgLy8gICAgICAgICAvLyB9KVxuICAvLyAgICAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgLy8gICAgICAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcbiAgLy8gICAgICAgICAvLyAgICAgY29uc3QgeyBvaywgZGF0YSwgbWVzc2FnZSB9ID0gcmVzO1xuICAvLyAgICAgICAgIC8vICAgICBsZXQgeyB1c2VyLCB0b2tlbjogand0IH0gPSBkYXRhO1xuICAvLyAgICAgICAgIC8vICAgICBzZXRSZW5kZXIobWVzc2FnZSk7XG4gIC8vICAgICAgICAgLy8gICAgIGlmIChvaykge1xuICAvLyAgICAgICAgIC8vICAgICAgIHNldFJlbmRlcihcInNldHRpbmcgdXAgc3R1ZmZcIik7XG4gIC8vICAgICAgICAgLy8gICAgICAgbG9naW4odXNlciwgand0KTtcbiAgLy8gICAgICAgICAvLyAgICAgICAvLyByb3V0ZXIucHVzaCgnLycpO1xuICAvLyAgICAgICAgIC8vICAgICAgIHJldHVybjtcbiAgLy8gICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAvLyAgICAgICBzZXRSZW5kZXIobWVzc2FnZSk7XG4gIC8vICAgICAgICAgLy8gICAgICAgLy8gcm91dGVyLnB1c2goJy8nKTsgLy8gcm91dGUgZ3VhcmQgd2lsbCBjYXRjaCB0aGlzXG4gIC8vICAgICAgICAgLy8gICAgICAgcmV0dXJuO1xuICAvLyAgICAgICAgIC8vICAgICB9XG4gIC8vICAgICAgICAgLy8gICB9KTtcbiAgLy8gICAgICAgICB2YWxpZGF0ZVVzZXIoKTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBzZXRSZW5kZXIobWVzc2FnZSk7XG4gIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7IC8vIHJvdXRlIGd1YXJkIHdpbGwgY2F0Y2ggdGhpc1xuICAvLyAgICAgICAgIH0sIDMwMDApO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9LCBbcm91dGVyLnF1ZXJ5XSk7XG5cbiAgLy8gICAgIHJldHVybiA8ZGl2PntyZW5kZXJ9PC9kaXY+O1xuICAvLyAgIHJldHVybiAoXG4gIC8vICAgICA8ZGl2PlxuICAvLyAgICAgICA8aDM+dmVyaWZ5IGVtYWlsPC9oMz5cbiAgLy8gICAgIDwvZGl2PlxuICAvLyAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29uZmlncyIsInVzZUJlYXJTdG9yZSIsIlJlYWxtIiwiUGFnZSIsInJlYWxtQXBwIiwiQXBwIiwiaWQiLCJyb3V0ZXIiLCJyZW5kZXIiLCJzZXRSZW5kZXIiLCJsb2dpbiIsInRva2VuIiwidG9rZW5JZCIsInF1ZXJ5IiwiZW1haWxQYXNzd29yZEF1dGgiLCJjb25maXJtVXNlciIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/auth/verify-email.js\n"));

/***/ })

});