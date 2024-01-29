"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/verify-email";
exports.ids = ["pages/auth/verify-email"];
exports.modules = {

/***/ "./src/config-variables.js":
/*!*********************************!*\
  !*** ./src/config-variables.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"configs\": () => (/* binding */ configs)\n/* harmony export */ });\nconst configs = {\n    baseUrl: `http://localhost:4000/api/v1`\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLXZhcmlhYmxlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsVUFBVTtJQUNuQkMsU0FBUyxDQUFDLDRCQUE0QixDQUFDO0FBQzNDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRlcmlhbC1raXQtcmVhY3QvLi9zcmMvY29uZmlnLXZhcmlhYmxlcy5qcz8xYzdjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb25maWdzID0ge1xuICAgIGJhc2VVcmw6IGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3YxYCxcbn0iXSwibmFtZXMiOlsiY29uZmlncyIsImJhc2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config-variables.js\n");

/***/ }),

/***/ "./src/contexts/store.js":
/*!*******************************!*\
  !*** ./src/contexts/store.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useBearStore\": () => (/* binding */ useBearStore)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"zustand\");\n/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand/middleware */ \"zustand/middleware\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__, zustand_middleware__WEBPACK_IMPORTED_MODULE_1__]);\n([zustand__WEBPACK_IMPORTED_MODULE_0__, zustand_middleware__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst useBearStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.persist)((set, get)=>({\n        user: true,\n        token: null,\n        login: (user, token)=>set(()=>{\n                return {\n                    user: user,\n                    token: token\n                };\n            }),\n        logout: ()=>set(()=>{\n                localStorage.clear();\n                return {\n                    user: null,\n                    token: null\n                };\n            })\n    }), {\n    name: \"hass_user\",\n    storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.createJSONStorage)(()=>localStorage)\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBQzhCO0FBRXhELE1BQU1HLGVBQWVILCtDQUFNQSxDQUM5QkMsMkRBQU9BLENBQ0gsQ0FBQ0csS0FBS0MsTUFBUztRQUNYQyxNQUFNLElBQUk7UUFDVkMsT0FBTyxJQUFJO1FBQ1hDLE9BQU8sQ0FBQ0YsTUFBTUMsUUFDVkgsSUFBSSxJQUFNO2dCQUNOLE9BQU87b0JBQ0hFLE1BQU1BO29CQUNOQyxPQUFPQTtnQkFDWDtZQUNKO1FBQ0pFLFFBQVEsSUFDSkwsSUFBSSxJQUFNO2dCQUNOTSxhQUFhQyxLQUFLO2dCQUNsQixPQUFPO29CQUNITCxNQUFNLElBQUk7b0JBQ1ZDLE9BQU8sSUFBSTtnQkFDZjtZQUNKO0lBQ1IsSUFDQTtJQUNJSyxNQUFNO0lBQ05DLFNBQVNYLHFFQUFpQkEsQ0FBQyxJQUFNUTtBQUNyQyxJQUVQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0ZXJpYWwta2l0LXJlYWN0Ly4vc3JjL2NvbnRleHRzL3N0b3JlLmpzP2RhMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcInp1c3RhbmRcIjtcbmltcG9ydCB7IHBlcnNpc3QsIGNyZWF0ZUpTT05TdG9yYWdlIH0gZnJvbSAnenVzdGFuZC9taWRkbGV3YXJlJ1xuXG5leHBvcnQgY29uc3QgdXNlQmVhclN0b3JlID0gY3JlYXRlKFxuICAgIHBlcnNpc3QoXG4gICAgICAgIChzZXQsIGdldCkgPT4gKHtcbiAgICAgICAgICAgIHVzZXI6IHRydWUsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxvZ2luOiAodXNlciwgdG9rZW4pID0+XG4gICAgICAgICAgICAgICAgc2V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IHVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGxvZ291dDogKCkgPT5cbiAgICAgICAgICAgICAgICBzZXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaGFzc191c2VyJyxcbiAgICAgICAgICAgIHN0b3JhZ2U6IGNyZWF0ZUpTT05TdG9yYWdlKCgpID0+IGxvY2FsU3RvcmFnZSksIFxuICAgICAgICB9XG4gICAgKVxuKSJdLCJuYW1lcyI6WyJjcmVhdGUiLCJwZXJzaXN0IiwiY3JlYXRlSlNPTlN0b3JhZ2UiLCJ1c2VCZWFyU3RvcmUiLCJzZXQiLCJnZXQiLCJ1c2VyIiwidG9rZW4iLCJsb2dpbiIsImxvZ291dCIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwibmFtZSIsInN0b3JhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/store.js\n");

/***/ }),

/***/ "./src/pages/auth/verify-email.js":
/*!****************************************!*\
  !*** ./src/pages/auth/verify-email.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_config_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/config-variables */ \"./src/config-variables.js\");\n/* harmony import */ var src_contexts_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/contexts/store */ \"./src/contexts/store.js\");\n/* harmony import */ var realm_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! realm-web */ \"realm-web\");\n/* harmony import */ var realm_web__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(realm_web__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_contexts_store__WEBPACK_IMPORTED_MODULE_4__]);\nsrc_contexts_store__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\"use client\";\n\n\n\n\n\n\nconst Page = ()=>{\n    const realmApp = new realm_web__WEBPACK_IMPORTED_MODULE_5__.App({\n        id: \"application-0-qroqk\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [render, setRender] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { login  } = (0,src_contexts_store__WEBPACK_IMPORTED_MODULE_4__.useBearStore)();\n    //   console.log({ token, tokenId });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // const validateUser = async () => {\n        const { token , tokenId  } = router.query;\n        try {\n            if (token) {\n                console.log({\n                    tokenId,\n                    token\n                });\n                setRender([\n                    token,\n                    tokenId\n                ]);\n                realmApp.emailPasswordAuth.confirmUser({\n                    token,\n                    tokenId\n                }).then((res)=>{\n                    // alert(\"user validated\");\n                    console.log(res, \">>>>\");\n                }).catch((err)=>{\n                    console.log(err.message);\n                });\n            } else {\n                throw new Error(\"token not available\");\n            }\n        } catch (error) {\n            console.log(error.message);\n            console.log(render);\n        }\n    // };\n    // validateUser();\n    // if (token) {\n    //   realmApp.emailPasswordAuth\n    //     .confirmUser({ token, tokenId })\n    //     .then((res) => console.log(res))\n    //     //   .then((res) => console.log({ res }))\n    //     .catch((err) => console.log(err.message));\n    // } else {\n    //   alert(\"token not available\");\n    // }\n    }, [\n        router.query\n    ]);\n    //   useEffect(() => {\n    //       // Get the 'token' query parameter from the URL\n    //       const { token, tokenId } = router.query;\n    //       setRender(\"validating .....\");\n    //       if (token) {\n    //         // Do so{mething with the token (e.g., send it to the server for processing)\n    //         // fetch(`${configs.baseUrl}/auth/verify-email`, {\n    //         //   method: \"POST\",\n    //         //   headers: {\n    //         //     \"Content-Type\": \"application/json\",\n    //         //   },\n    //         //   body: JSON.stringify(token),\n    //         // })\n    //         //   .then((res) => res.json())\n    //         //   .then((res) => {\n    //         //     const { ok, data, message } = res;\n    //         //     let { user, token: jwt } = data;\n    //         //     setRender(message);\n    //         //     if (ok) {\n    //         //       setRender(\"setting up stuff\");\n    //         //       login(user, jwt);\n    //         //       // router.push('/');\n    //         //       return;\n    //         //     } else {\n    //         //       setRender(message);\n    //         //       // router.push('/'); // route guard will catch this\n    //         //       return;\n    //         //     }\n    //         //   });\n    //\n    //       } else {\n    //         setRender(message);\n    //         setTimeout(() => {\n    //           router.push(\"/\"); // route guard will catch this\n    //         }, 3000);\n    //       }\n    //     }, [router.query]);\n    //     return <div>{render}</div>;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: render\n        }, void 0, false, {\n            fileName: \"/home/feyishola/Desktop/mydev/FRONT-END/jibwis/src/pages/auth/verify-email.js\",\n            lineNumber: 98,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/feyishola/Desktop/mydev/FRONT-END/jibwis/src/pages/auth/verify-email.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXV0aC92ZXJpZnktZW1haWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDd0M7QUFDSTtBQUNHO0FBQ0c7QUFDZjtBQUVuQyxNQUFNTSxPQUFPLElBQU07SUFDakIsTUFBTUMsV0FBVyxJQUFJRiwwQ0FBUyxDQUFDO1FBQUVJLElBQUk7SUFBc0I7SUFDM0QsTUFBTUMsU0FBU1Ysc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLEVBQUVXLE1BQUssRUFBRSxHQUFHVCxnRUFBWUE7SUFFOUIscUNBQXFDO0lBRXJDSCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QscUNBQXFDO1FBQ3JDLE1BQU0sRUFBRWEsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR0wsT0FBT00sS0FBSztRQUN2QyxJQUFJO1lBQ0YsSUFBSUYsT0FBTztnQkFDVEcsUUFBUUMsR0FBRyxDQUFDO29CQUFFSDtvQkFBU0Q7Z0JBQU07Z0JBQzdCRixVQUFVO29CQUFDRTtvQkFBT0M7aUJBQVE7Z0JBQzFCUixTQUFTWSxpQkFBaUIsQ0FDdkJDLFdBQVcsQ0FBQztvQkFDWE47b0JBQ0FDO2dCQUNGLEdBQ0NNLElBQUksQ0FBQyxDQUFDQyxNQUFRO29CQUNiLDJCQUEyQjtvQkFDM0JMLFFBQVFDLEdBQUcsQ0FBQ0ksS0FBSztnQkFDbkIsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLE1BQVE7b0JBQ2RQLFFBQVFDLEdBQUcsQ0FBQ00sSUFBSUMsT0FBTztnQkFDekI7WUFDSixPQUFPO2dCQUNMLE1BQU0sSUFBSUMsTUFBTSx1QkFBdUI7WUFDekMsQ0FBQztRQUNILEVBQUUsT0FBT0MsT0FBTztZQUNkVixRQUFRQyxHQUFHLENBQUNTLE1BQU1GLE9BQU87WUFDekJSLFFBQVFDLEdBQUcsQ0FBQ1A7UUFDZDtJQUNBLEtBQUs7SUFFTCxrQkFBa0I7SUFFbEIsZUFBZTtJQUNmLCtCQUErQjtJQUMvQix1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLGdEQUFnRDtJQUNoRCxpREFBaUQ7SUFDakQsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxJQUFJO0lBQ04sR0FBRztRQUFDRCxPQUFPTSxLQUFLO0tBQUM7SUFFakIsc0JBQXNCO0lBQ3RCLHdEQUF3RDtJQUN4RCxpREFBaUQ7SUFDakQsdUNBQXVDO0lBQ3ZDLHFCQUFxQjtJQUNyQix1RkFBdUY7SUFDdkYsNkRBQTZEO0lBQzdELCtCQUErQjtJQUMvQiwwQkFBMEI7SUFDMUIscURBQXFEO0lBQ3JELGtCQUFrQjtJQUNsQiw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxnQ0FBZ0M7SUFDaEMsb0RBQW9EO0lBQ3BELGtEQUFrRDtJQUNsRCxxQ0FBcUM7SUFDckMsMkJBQTJCO0lBQzNCLGtEQUFrRDtJQUNsRCxxQ0FBcUM7SUFDckMsd0NBQXdDO0lBQ3hDLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsdUNBQXVDO0lBQ3ZDLHVFQUF1RTtJQUN2RSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixFQUFFO0lBQ0YsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsNkRBQTZEO0lBQzdELG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsMEJBQTBCO0lBRTFCLGtDQUFrQztJQUNsQyxxQkFDRSw4REFBQ1k7a0JBQ0MsNEVBQUNDO3NCQUFJbEI7Ozs7Ozs7Ozs7O0FBR1g7QUFFQSxpRUFBZUwsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGVyaWFsLWtpdC1yZWFjdC8uL3NyYy9wYWdlcy9hdXRoL3ZlcmlmeS1lbWFpbC5qcz9hMDNmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25maWdzIH0gZnJvbSBcInNyYy9jb25maWctdmFyaWFibGVzXCI7XG5pbXBvcnQgeyB1c2VCZWFyU3RvcmUgfSBmcm9tIFwic3JjL2NvbnRleHRzL3N0b3JlXCI7XG5pbXBvcnQgKiBhcyBSZWFsbSBmcm9tIFwicmVhbG0td2ViXCI7XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJlYWxtQXBwID0gbmV3IFJlYWxtLkFwcCh7IGlkOiBcImFwcGxpY2F0aW9uLTAtcXJvcWtcIiB9KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtyZW5kZXIsIHNldFJlbmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgeyBsb2dpbiB9ID0gdXNlQmVhclN0b3JlKCk7XG5cbiAgLy8gICBjb25zb2xlLmxvZyh7IHRva2VuLCB0b2tlbklkIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc3QgdmFsaWRhdGVVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgdG9rZW4sIHRva2VuSWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgICB0cnkge1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHsgdG9rZW5JZCwgdG9rZW4gfSk7XG4gICAgICAgIHNldFJlbmRlcihbdG9rZW4sIHRva2VuSWRdKTtcbiAgICAgICAgcmVhbG1BcHAuZW1haWxQYXNzd29yZEF1dGhcbiAgICAgICAgICAuY29uZmlybVVzZXIoe1xuICAgICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgICB0b2tlbklkLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gYWxlcnQoXCJ1c2VyIHZhbGlkYXRlZFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgXCI+Pj4+XCIpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInRva2VuIG5vdCBhdmFpbGFibGVcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgY29uc29sZS5sb2cocmVuZGVyKTtcbiAgICB9XG4gICAgLy8gfTtcblxuICAgIC8vIHZhbGlkYXRlVXNlcigpO1xuXG4gICAgLy8gaWYgKHRva2VuKSB7XG4gICAgLy8gICByZWFsbUFwcC5lbWFpbFBhc3N3b3JkQXV0aFxuICAgIC8vICAgICAuY29uZmlybVVzZXIoeyB0b2tlbiwgdG9rZW5JZCB9KVxuICAgIC8vICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgIC8vICAgICAvLyAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHsgcmVzIH0pKVxuICAgIC8vICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgYWxlcnQoXCJ0b2tlbiBub3QgYXZhaWxhYmxlXCIpO1xuICAgIC8vIH1cbiAgfSwgW3JvdXRlci5xdWVyeV0pO1xuXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgICAgLy8gR2V0IHRoZSAndG9rZW4nIHF1ZXJ5IHBhcmFtZXRlciBmcm9tIHRoZSBVUkxcbiAgLy8gICAgICAgY29uc3QgeyB0b2tlbiwgdG9rZW5JZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICAvLyAgICAgICBzZXRSZW5kZXIoXCJ2YWxpZGF0aW5nIC4uLi4uXCIpO1xuICAvLyAgICAgICBpZiAodG9rZW4pIHtcbiAgLy8gICAgICAgICAvLyBEbyBzb3ttZXRoaW5nIHdpdGggdGhlIHRva2VuIChlLmcuLCBzZW5kIGl0IHRvIHRoZSBzZXJ2ZXIgZm9yIHByb2Nlc3NpbmcpXG4gIC8vICAgICAgICAgLy8gZmV0Y2goYCR7Y29uZmlncy5iYXNlVXJsfS9hdXRoL3ZlcmlmeS1lbWFpbGAsIHtcbiAgLy8gICAgICAgICAvLyAgIG1ldGhvZDogXCJQT1NUXCIsXG4gIC8vICAgICAgICAgLy8gICBoZWFkZXJzOiB7XG4gIC8vICAgICAgICAgLy8gICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAvLyAgICAgICAgIC8vICAgfSxcbiAgLy8gICAgICAgICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRva2VuKSxcbiAgLy8gICAgICAgICAvLyB9KVxuICAvLyAgICAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgLy8gICAgICAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcbiAgLy8gICAgICAgICAvLyAgICAgY29uc3QgeyBvaywgZGF0YSwgbWVzc2FnZSB9ID0gcmVzO1xuICAvLyAgICAgICAgIC8vICAgICBsZXQgeyB1c2VyLCB0b2tlbjogand0IH0gPSBkYXRhO1xuICAvLyAgICAgICAgIC8vICAgICBzZXRSZW5kZXIobWVzc2FnZSk7XG4gIC8vICAgICAgICAgLy8gICAgIGlmIChvaykge1xuICAvLyAgICAgICAgIC8vICAgICAgIHNldFJlbmRlcihcInNldHRpbmcgdXAgc3R1ZmZcIik7XG4gIC8vICAgICAgICAgLy8gICAgICAgbG9naW4odXNlciwgand0KTtcbiAgLy8gICAgICAgICAvLyAgICAgICAvLyByb3V0ZXIucHVzaCgnLycpO1xuICAvLyAgICAgICAgIC8vICAgICAgIHJldHVybjtcbiAgLy8gICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAvLyAgICAgICBzZXRSZW5kZXIobWVzc2FnZSk7XG4gIC8vICAgICAgICAgLy8gICAgICAgLy8gcm91dGVyLnB1c2goJy8nKTsgLy8gcm91dGUgZ3VhcmQgd2lsbCBjYXRjaCB0aGlzXG4gIC8vICAgICAgICAgLy8gICAgICAgcmV0dXJuO1xuICAvLyAgICAgICAgIC8vICAgICB9XG4gIC8vICAgICAgICAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBzZXRSZW5kZXIobWVzc2FnZSk7XG4gIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7IC8vIHJvdXRlIGd1YXJkIHdpbGwgY2F0Y2ggdGhpc1xuICAvLyAgICAgICAgIH0sIDMwMDApO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9LCBbcm91dGVyLnF1ZXJ5XSk7XG5cbiAgLy8gICAgIHJldHVybiA8ZGl2PntyZW5kZXJ9PC9kaXY+O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+e3JlbmRlcn08L2gzPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbmZpZ3MiLCJ1c2VCZWFyU3RvcmUiLCJSZWFsbSIsIlBhZ2UiLCJyZWFsbUFwcCIsIkFwcCIsImlkIiwicm91dGVyIiwicmVuZGVyIiwic2V0UmVuZGVyIiwibG9naW4iLCJ0b2tlbiIsInRva2VuSWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbFBhc3N3b3JkQXV0aCIsImNvbmZpcm1Vc2VyIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsIkVycm9yIiwiZXJyb3IiLCJkaXYiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/auth/verify-email.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "realm-web":
/*!****************************!*\
  !*** external "realm-web" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("realm-web");

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("zustand");;

/***/ }),

/***/ "zustand/middleware":
/*!*************************************!*\
  !*** external "zustand/middleware" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("zustand/middleware");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/auth/verify-email.js"));
module.exports = __webpack_exports__;

})();