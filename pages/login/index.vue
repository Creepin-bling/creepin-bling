<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center"> {{isLogin? 'Sign in':'Sign up'}}</h1>
                    <p class="text-xs-center">
                        <nuxt-link to="/login" v-if="!isLogin">Have a account?</nuxt-link>
                        <nuxt-link to="/register" v-if="isLogin">Need a account?</nuxt-link>
                    </p>

                    <ul class="error-messages">
                        <template v-for="(message,filed) in errors">
                            <li v-for="(message,index) in message" :key="index"> {{filed}} {{message}}</li>
                        </template>

                    </ul>

                    <form @submit.prevent="onSubmit">
                        <fieldset v-if="!isLogin" class="form-group">
                            <input required class="form-control  form-control-lg" type="text" placeholder="Your Name">
                        </fieldset>
                        <fieldset class="form-group">
                            <input required v-model="user.email" class="form-control form-control-lg" type="email"
                                placeholder="Email">
                        </fieldset>
                        <fieldset class="form-group">
                            <input required v-model="user.password" class="form-control form-control-lg" type="password"
                                placeholder="Password">
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right">
                            {{isLogin? 'Sign in':'Sign up'}}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {
        login
    } from '@/api/user'
    // 仅在客户端加载第三方包
    const Cookie = process.client ? require('js-cookie') : undefined


    export default {
        middleware: 'notAuthenticated',
        name: 'LoginIndex',
        components: {},
        data() {
            return {
                user: {
                    "email": "",
                    "password": ""
                },
                errors: {}
            }
        },
        computed: {
            isLogin() {
                return this.$route.name === 'login'
            }
        },
        methods: {
            async onSubmit() {
                try {
                    // 提交表单请求登录
                    const {
                        data
                    } = await login({
                        user: this.user
                    })
                    console.log(123, data);
                    //TODO： 处理用户用户的登录状态
                    this.$store.commit('setUser', data.user)


                    // 为了防止刷新页面丢失数据，我们需要把数据持久化
                    Cookie.set('user', data.user)

                    // 跳转到首页
                    this.$router.push('/')
                } catch (err) {
                    // console.log('请求失败', err);
                    // console.dir(err);
                    this.errors = err.response.data.errors
                }

            }
        },
    }
</script>