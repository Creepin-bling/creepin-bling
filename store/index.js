const cookieParser = process.server ? require('cookieparser') : undefined

// 在服务端渲染期间运行的都是同一个实例
// 为了防止数据冲突，务必要把state定义成一个函数，返回数据对象.确保每次调用都会通过函数动态生成一个对象
export const state = () => {
    return {
        // 当前登录用户的状态
        user: null
    }
}

export const mutations = {
    // setUser:用来修改state状态
    setUser(state, data) {
        state.user = data
    }
}

export const actions = {
    // nuxtSerVerInit是一个特殊的action方法
    // 这个action会在服务端渲染期间自动调用
    // 作业：初始化容器数据，传递给客户端使用
    nuxtServerInit({
        commit //提交方法
    }, {
        req //请求对象
    }) {
        // console.log('nuxtServerInit');
        let user = null

        // 如果请求头中有 Cookie
        if (req.headers.cookie) {
            // 使用 cookieparser 把 cookie 字符串转为 JavaScript 对象
            const parsed = cookieParser.parse(req.headers.cookie)
            try {
                // 将字符串还原成js对象
                user = JSON.parse(parsed.user)
            } catch (err) {
                // No valid cookie found
            }
        }

        // 提交 mutation 修改 state 状态
        commit('setUser', user)
    }
}