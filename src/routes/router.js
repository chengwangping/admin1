import {asyncComponent} from './AsyncComponent'

// const ImportPage = page => asyncComponent(() => import(/* webpackChunkName:
// file */ `@/pages/${file}`))

// 公共布局 Layout
export const layout = asyncComponent(() => {
  return import(/* webpackChunkName: "layout" */ '../pages/layout')
})

// 登陆
export const login = asyncComponent(() => {
  return import(/* webpackChunkName: "login" */ '../pages/login')
})

// 首页
export const index = asyncComponent(() => {
  return import(/* webpackChunkName: "index" */ '../pages/index')
})

// // 找不到资源 export const  notfound = asyncComponent(() =>   import ( /*
// webpackChunkName: "Notfound" */ "../pages/notfound") );

export const routes = [
  {
    path: '/',
    component: index,
    exact: true
  }, {
    path: '/login',
    component: login,
    exact: true
  }
]
