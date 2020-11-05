import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8f458b50 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _ca15b0e6 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _782fdb0a = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _4354303b = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _39cb5a51 = () => interopDefault(import('..\\pages\\register' /* webpackChunkName: "" */))
const _8f1c305e = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _a6e33eca = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _2a1e7388 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _8f458b50,
    children: [{
      path: "",
      component: _ca15b0e6,
      name: "home"
    }, {
      path: "/login",
      component: _782fdb0a,
      name: "login"
    }, {
      path: "/profile/:username",
      component: _4354303b,
      name: "profile"
    }, {
      path: "/register",
      component: _39cb5a51,
      name: "register"
    }, {
      path: "/setting",
      component: _8f1c305e,
      name: "setting"
    }, {
      path: "/editor",
      component: _a6e33eca,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _2a1e7388,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
