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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_config_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config-variables */ \"./src/config-variables.js\");\n/* harmony import */ var src_contexts_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/contexts/store */ \"./src/contexts/store.js\");\n/* harmony import */ var realm_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! realm-web */ \"./node_modules/realm-web/dist/bundle.dom.es.js\");\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const realmApp = new realm_web__WEBPACK_IMPORTED_MODULE_4__.App({\n        id: \"application-0-qroqk\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    const [render, setRender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { login  } = (0,src_contexts_store__WEBPACK_IMPORTED_MODULE_3__.useBearStore)();\n    //   console.log({ token, tokenId });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const validateUser = async ()=>{\n            const { token , tokenId  } = router.query;\n            try {\n                if (token) {\n                    const response = await realmApp.emailPasswordAuth.confirmUser({\n                        token,\n                        tokenId\n                    });\n                    console.log(response);\n                } else {\n                    throw new Error(\"token not available\");\n                }\n            } catch (error) {\n                console.log(error.message);\n            }\n        };\n        validateUser();\n    // if (token) {\n    //   realmApp.emailPasswordAuth\n    //     .confirmUser({ token, tokenId })\n    //     .then((res) => console.log(res))\n    //     //   .then((res) => console.log({ res }))\n    //     .catch((err) => console.log(err.message));\n    // } else {\n    //   alert(\"token not available\");\n    // }\n    }, [\n        router.query\n    ]);\n//   useEffect(() => {\n//       // Get the 'token' query parameter from the URL\n//       const { token, tokenId } = router.query;\n//       setRender(\"validating .....\");\n//       if (token) {\n//         // Do so{mething with the token (e.g., send it to the server for processing)\n//         // fetch(`${configs.baseUrl}/auth/verify-email`, {\n//         //   method: \"POST\",\n//         //   headers: {\n//         //     \"Content-Type\": \"application/json\",\n//         //   },\n//         //   body: JSON.stringify(token),\n//         // })\n//         //   .then((res) => res.json())\n//         //   .then((res) => {\n//         //     const { ok, data, message } = res;\n//         //     let { user, token: jwt } = data;\n//         //     setRender(message);\n//         //     if (ok) {\n//         //       setRender(\"setting up stuff\");\n//         //       login(user, jwt);\n//         //       // router.push('/');\n//         //       return;\n//         //     } else {\n//         //       setRender(message);\n//         //       // router.push('/'); // route guard will catch this\n//         //       return;\n//         //     }\n//         //   });\n//         validateUser();\n//       } else {\n//         setRender(message);\n//         setTimeout(() => {\n//           router.push(\"/\"); // route guard will catch this\n//         }, 3000);\n//       }\n//     }, [router.query]);\n//     return <div>{render}</div>;\n//   return (\n//     <div>\n//       <h3>verify email</h3>\n//     </div>\n//   );\n};\n_s(Page, \"s0QROnGvPDEVsSmKCXNgprJIYCg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter,\n        src_contexts_store__WEBPACK_IMPORTED_MODULE_3__.useBearStore\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXV0aC92ZXJpZnktZW1haWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDd0M7QUFDSTtBQUNHO0FBQ0c7QUFDZjtBQUVuQyxNQUFNTSxPQUFPLElBQU07O0lBQ2pCLE1BQU1DLFdBQVcsSUFBSUYsMENBQVMsQ0FBQztRQUFFSSxJQUFJO0lBQXNCO0lBQzNELE1BQU1DLFNBQVNWLHNEQUFTQTtJQUN4QixNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxFQUFFVyxNQUFLLEVBQUUsR0FBR1QsZ0VBQVlBO0lBRTlCLHFDQUFxQztJQUVyQ0gsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1hLGVBQWUsVUFBWTtZQUMvQixNQUFNLEVBQUVDLE1BQUssRUFBRUMsUUFBTyxFQUFFLEdBQUdOLE9BQU9PLEtBQUs7WUFDdkMsSUFBSTtnQkFDRixJQUFJRixPQUFPO29CQUNULE1BQU1HLFdBQVcsTUFBTVgsU0FBU1ksaUJBQWlCLENBQUNDLFdBQVcsQ0FBQzt3QkFDNURMO3dCQUNBQztvQkFDRjtvQkFDQUssUUFBUUMsR0FBRyxDQUFDSjtnQkFDZCxPQUFPO29CQUNMLE1BQU0sSUFBSUssTUFBTSx1QkFBdUI7Z0JBQ3pDLENBQUM7WUFDSCxFQUFFLE9BQU9DLE9BQU87Z0JBQ2RILFFBQVFDLEdBQUcsQ0FBQ0UsTUFBTUMsT0FBTztZQUMzQjtRQUNGO1FBRUFYO0lBRUEsZUFBZTtJQUNmLCtCQUErQjtJQUMvQix1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLGdEQUFnRDtJQUNoRCxpREFBaUQ7SUFDakQsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxJQUFJO0lBQ04sR0FBRztRQUFDSixPQUFPTyxLQUFLO0tBQUM7QUFFakIsc0JBQXNCO0FBQ3RCLHdEQUF3RDtBQUN4RCxpREFBaUQ7QUFDakQsdUNBQXVDO0FBQ3ZDLHFCQUFxQjtBQUNyQix1RkFBdUY7QUFDdkYsNkRBQTZEO0FBQzdELCtCQUErQjtBQUMvQiwwQkFBMEI7QUFDMUIscURBQXFEO0FBQ3JELGtCQUFrQjtBQUNsQiw0Q0FBNEM7QUFDNUMsZ0JBQWdCO0FBQ2hCLDBDQUEwQztBQUMxQyxnQ0FBZ0M7QUFDaEMsb0RBQW9EO0FBQ3BELGtEQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsMkJBQTJCO0FBQzNCLGtEQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsd0NBQXdDO0FBQ3hDLDJCQUEyQjtBQUMzQiwwQkFBMEI7QUFDMUIsdUNBQXVDO0FBQ3ZDLHVFQUF1RTtBQUN2RSwyQkFBMkI7QUFDM0IsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQiwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0IsNkRBQTZEO0FBQzdELG9CQUFvQjtBQUNwQixVQUFVO0FBQ1YsMEJBQTBCO0FBRTFCLGtDQUFrQztBQUNsQyxhQUFhO0FBQ2IsWUFBWTtBQUNaLDhCQUE4QjtBQUM5QixhQUFhO0FBQ2IsT0FBTztBQUNUO0dBbkZNWDs7UUFFV04sa0RBQVNBO1FBRU5JLDREQUFZQTs7O0tBSjFCRTtBQXFGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYXV0aC92ZXJpZnktZW1haWwuanM/YTAzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29uZmlncyB9IGZyb20gXCJzcmMvY29uZmlnLXZhcmlhYmxlc1wiO1xuaW1wb3J0IHsgdXNlQmVhclN0b3JlIH0gZnJvbSBcInNyYy9jb250ZXh0cy9zdG9yZVwiO1xuaW1wb3J0ICogYXMgUmVhbG0gZnJvbSBcInJlYWxtLXdlYlwiO1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCByZWFsbUFwcCA9IG5ldyBSZWFsbS5BcHAoeyBpZDogXCJhcHBsaWNhdGlvbi0wLXFyb3FrXCIgfSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbcmVuZGVyLCBzZXRSZW5kZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHsgbG9naW4gfSA9IHVzZUJlYXJTdG9yZSgpO1xuXG4gIC8vICAgY29uc29sZS5sb2coeyB0b2tlbiwgdG9rZW5JZCB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHZhbGlkYXRlVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgdG9rZW4sIHRva2VuSWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVhbG1BcHAuZW1haWxQYXNzd29yZEF1dGguY29uZmlybVVzZXIoe1xuICAgICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgICB0b2tlbklkLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0b2tlbiBub3QgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFsaWRhdGVVc2VyKCk7XG5cbiAgICAvLyBpZiAodG9rZW4pIHtcbiAgICAvLyAgIHJlYWxtQXBwLmVtYWlsUGFzc3dvcmRBdXRoXG4gICAgLy8gICAgIC5jb25maXJtVXNlcih7IHRva2VuLCB0b2tlbklkIH0pXG4gICAgLy8gICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gICAgLy8gICAgIC8vICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2coeyByZXMgfSkpXG4gICAgLy8gICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBhbGVydChcInRva2VuIG5vdCBhdmFpbGFibGVcIik7XG4gICAgLy8gfVxuICB9LCBbcm91dGVyLnF1ZXJ5XSk7XG5cbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgICAvLyBHZXQgdGhlICd0b2tlbicgcXVlcnkgcGFyYW1ldGVyIGZyb20gdGhlIFVSTFxuICAvLyAgICAgICBjb25zdCB7IHRva2VuLCB0b2tlbklkIH0gPSByb3V0ZXIucXVlcnk7XG4gIC8vICAgICAgIHNldFJlbmRlcihcInZhbGlkYXRpbmcgLi4uLi5cIik7XG4gIC8vICAgICAgIGlmICh0b2tlbikge1xuICAvLyAgICAgICAgIC8vIERvIHNve21ldGhpbmcgd2l0aCB0aGUgdG9rZW4gKGUuZy4sIHNlbmQgaXQgdG8gdGhlIHNlcnZlciBmb3IgcHJvY2Vzc2luZylcbiAgLy8gICAgICAgICAvLyBmZXRjaChgJHtjb25maWdzLmJhc2VVcmx9L2F1dGgvdmVyaWZ5LWVtYWlsYCwge1xuICAvLyAgICAgICAgIC8vICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgLy8gICAgICAgICAvLyAgIGhlYWRlcnM6IHtcbiAgLy8gICAgICAgICAvLyAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIC8vICAgICAgICAgLy8gICB9LFxuICAvLyAgICAgICAgIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkodG9rZW4pLFxuICAvLyAgICAgICAgIC8vIH0pXG4gIC8vICAgICAgICAgLy8gICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAvLyAgICAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xuICAvLyAgICAgICAgIC8vICAgICBjb25zdCB7IG9rLCBkYXRhLCBtZXNzYWdlIH0gPSByZXM7XG4gIC8vICAgICAgICAgLy8gICAgIGxldCB7IHVzZXIsIHRva2VuOiBqd3QgfSA9IGRhdGE7XG4gIC8vICAgICAgICAgLy8gICAgIHNldFJlbmRlcihtZXNzYWdlKTtcbiAgLy8gICAgICAgICAvLyAgICAgaWYgKG9rKSB7XG4gIC8vICAgICAgICAgLy8gICAgICAgc2V0UmVuZGVyKFwic2V0dGluZyB1cCBzdHVmZlwiKTtcbiAgLy8gICAgICAgICAvLyAgICAgICBsb2dpbih1c2VyLCBqd3QpO1xuICAvLyAgICAgICAgIC8vICAgICAgIC8vIHJvdXRlci5wdXNoKCcvJyk7XG4gIC8vICAgICAgICAgLy8gICAgICAgcmV0dXJuO1xuICAvLyAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgIC8vICAgICAgIHNldFJlbmRlcihtZXNzYWdlKTtcbiAgLy8gICAgICAgICAvLyAgICAgICAvLyByb3V0ZXIucHVzaCgnLycpOyAvLyByb3V0ZSBndWFyZCB3aWxsIGNhdGNoIHRoaXNcbiAgLy8gICAgICAgICAvLyAgICAgICByZXR1cm47XG4gIC8vICAgICAgICAgLy8gICAgIH1cbiAgLy8gICAgICAgICAvLyAgIH0pO1xuICAvLyAgICAgICAgIHZhbGlkYXRlVXNlcigpO1xuICAvLyAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgIHNldFJlbmRlcihtZXNzYWdlKTtcbiAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTsgLy8gcm91dGUgZ3VhcmQgd2lsbCBjYXRjaCB0aGlzXG4gIC8vICAgICAgICAgfSwgMzAwMCk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0sIFtyb3V0ZXIucXVlcnldKTtcblxuICAvLyAgICAgcmV0dXJuIDxkaXY+e3JlbmRlcn08L2Rpdj47XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIDxkaXY+XG4gIC8vICAgICAgIDxoMz52ZXJpZnkgZW1haWw8L2gzPlxuICAvLyAgICAgPC9kaXY+XG4gIC8vICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb25maWdzIiwidXNlQmVhclN0b3JlIiwiUmVhbG0iLCJQYWdlIiwicmVhbG1BcHAiLCJBcHAiLCJpZCIsInJvdXRlciIsInJlbmRlciIsInNldFJlbmRlciIsImxvZ2luIiwidmFsaWRhdGVVc2VyIiwidG9rZW4iLCJ0b2tlbklkIiwicXVlcnkiLCJyZXNwb25zZSIsImVtYWlsUGFzc3dvcmRBdXRoIiwiY29uZmlybVVzZXIiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/auth/verify-email.js\n"));

/***/ })

});