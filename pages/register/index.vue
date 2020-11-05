<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center"> {{isLogin? 'Sign in':'Sign up'}}</h1>
                    <p class="text-xs-center">
                        <a href="">Have an account?</a>
                    </p>

                    <ul class="error-messages">
                        <template v-for="(message,filed) in errors">
                            <li v-for="(message,index) in message" :key="index"> {{filed}} {{message}}</li>
                        </template>

                    </ul>

                    <form @submit.prevent="onSubmit">
                        <fieldset v-if="!isLogin" class="form-group">
                            <input v-model="user.username" required class="form-control form-control-lg" type="text"
                                placeholder="Your Name">
                        </fieldset>
                        <fieldset class="form-group">
                            <input v-model="user.email" class="form-control form-control-lg" type="email"
                                placeholder="Email">
                        </fieldset>
                        <fieldset class="form-group">
                            <input v-model="user.password" class="form-control form-control-lg" type="password"
                                minlength="6" placeholder="Password">
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
        register
    } from '@/api/user'
    export default {
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
                    const {
                        data
                    } = await register({
                        user: this.user
                    })
                } catch (error) {
                    this.errors = err.response.data.errors
                }
            },
        }
    }
</script>