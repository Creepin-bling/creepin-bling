/*
 NUxt.js配置文件
 */
module.exports = {
    router: {
        // 全局配置激活类名
        linkActiveClass: 'active',
        // 自定义路由表规则
        extendRoutes(routes, resolve) {
            // 删除NUxt.js基于pages默认生成的路由表
            routes.splice(0)
            // 添加自己的路由规则
            routes.push(...[{
                    path: '/',
                    component: resolve(__dirname, 'pages/layout/'),
                    children: [{
                            path: '', //默认子路由
                            name: 'home',
                            component: resolve(__dirname, 'pages/home/')
                        },
                        {
                            path: '/login',
                            name: 'login',
                            component: resolve(__dirname, 'pages/login/')
                        },
                        {
                            path: '/profile/:username',
                            name: 'profile',
                            component: resolve(__dirname, 'pages/profile/')
                        },
                        {
                            path: '/register',
                            name: 'register',
                            component: resolve(__dirname, 'pages/register/')
                        },
                        {
                            path: '/setting',
                            name: 'setting',
                            component: resolve(__dirname, 'pages/settings/')
                        },
                        {
                            path: '/editor',
                            name: 'editor',
                            component: resolve(__dirname, 'pages/editor/')
                        },
                        {
                            path: '/article/:slug',
                            name: 'article',
                            component: resolve(__dirname, 'pages/article/')
                        }
                    ]
                },

            ])

        }
    },
    server: {
        host: '0.0.0.0', //默认localhost
        port: 3000
    },
    // 注册插件
    plugins: [
        '~/plugins/request.js',
        '~/plugins/dayjs.js'

    ]
}