"use strict";
exports.id = 741;
exports.ids = [741];
exports.modules = {

/***/ 741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants_systemSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3398);


class BaseService {
    ping = ()=>{
        return axios__WEBPACK_IMPORTED_MODULE_0___default()({
            url: `${_utils_constants_systemSetting__WEBPACK_IMPORTED_MODULE_1__/* .BACKEND_DOMAIN */ .mL}/api/ping/`,
            method: "POST",
            data: ""
        });
    };
    get = (url, auth)=>{
        if (auth) {
            return axios__WEBPACK_IMPORTED_MODULE_0___default()({
                url: `${_utils_constants_systemSetting__WEBPACK_IMPORTED_MODULE_1__/* .BACKEND_DOMAIN */ .mL}/${url}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${this.getAccessToken()}`
                }
            });
        }
        return axios__WEBPACK_IMPORTED_MODULE_0___default()({
            url: `${_utils_constants_systemSetting__WEBPACK_IMPORTED_MODULE_1__/* .BACKEND_DOMAIN */ .mL}/${url}`,
            method: "GET"
        });
    };
    post = (url, model, auth)=>{
        if (auth) {
            return axios__WEBPACK_IMPORTED_MODULE_0___default()({
                url: `${_utils_constants_systemSetting__WEBPACK_IMPORTED_MODULE_1__/* .BACKEND_DOMAIN */ .mL}/${url}`,
                method: "POST",
                data: model,
                headers: {
                    Authorization: `Bearer ${this.getAccessToken()}`
                }
            });
        }
        return axios__WEBPACK_IMPORTED_MODULE_0___default()({
            url: `${_utils_constants_systemSetting__WEBPACK_IMPORTED_MODULE_1__/* .BACKEND_DOMAIN */ .mL}/${url}`,
            method: "POST",
            data: model
        });
    };
    put = (url, model, auth)=>{
        if (auth) {
            return axios__WEBPACK_IMPORTED_MODULE_0___default()({
                url: `${_utils_constants_systemSetting__WEBPACK_IMPORTED_MODULE_1__/* .BACKEND_DOMAIN */ .mL}/${url}`,
                method: "PUT",
                data: model,
                headers: {
                    Authorization: `Bearer ${this.getAccessToken()}`
                }
            });
        }
        return axios__WEBPACK_IMPORTED_MODULE_0___default()({
            url: `${_utils_constants_systemSetting__WEBPACK_IMPORTED_MODULE_1__/* .BACKEND_DOMAIN */ .mL}/${url}`,
            method: "PUT",
            data: model
        });
    };
    delete = (url)=>{
        return axios__WEBPACK_IMPORTED_MODULE_0___default()({
            url: `${_utils_constants_systemSetting__WEBPACK_IMPORTED_MODULE_1__/* .BACKEND_DOMAIN */ .mL}/${url}`,
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${this.getAccessToken()}`
            }
        });
    };
}


/***/ }),

/***/ 3398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mL": () => (/* binding */ BACKEND_DOMAIN),
/* harmony export */   "MU": () => (/* binding */ STATUS_CODE),
/* harmony export */   "pk": () => (/* binding */ pk)
/* harmony export */ });
/* unused harmony export MAXIMUM_ICONS */
const BACKEND_DOMAIN = "http://localhost:8080";
// export const BACKEND_DOMAIN = "https://himylink-334607.wl.r.appspot.com";
// USER MAXIMUM ICON COUNTS
const MAXIMUM_ICONS = 5;
const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    NOT_ACCEPTABLE: 406,
    UNPROCESSABLE_ENTITY: 422,
    SERVER_ERROR: 500
};
const pk = "pk_test_7c3a8ea786307a6b484cdef864bce8471dcac015";


/***/ })

};
;