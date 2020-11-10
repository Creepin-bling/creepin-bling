exports.ids = [4];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return register; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 用户登录

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; // 用户注册

const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users',
    data
  });
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/register/index.vue?vue&type=template&id=441c0fff&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-6 offset-md-3 col-xs-12\"><h1 class=\"text-xs-center\">"+_vm._ssrEscape(" "+_vm._s(_vm.isLogin? 'Sign in':'Sign up'))+"</h1> <p class=\"text-xs-center\"><a href>Have an account?</a></p> <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(message,filed){return ((_vm._ssrList((message),function(message,index){return ("<li>"+_vm._ssrEscape(" "+_vm._s(filed)+" "+_vm._s(message))+"</li>")})))}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input required=\"required\" type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"email\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" minlength=\"6\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.isLogin? 'Sign in':'Sign up')+"\n                    ")+"</button></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/register/index.vue?vue&type=template&id=441c0fff&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var registervue_type_script_lang_js_ = ({
  name: 'Login',
  components: {},

  data() {
    return {
      user: {
        "username": "",
        "email": "",
        "password": ""
      },
      errors: {}
    };
  },

  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },
  methods: {
    async onSubmit() {
      try {
        const {
          data
        } = await Object(user["b" /* register */])({
          user: this.user
        });
      } catch (error) {
        this.errors = err.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/register/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/register/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "36cdce3d"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map