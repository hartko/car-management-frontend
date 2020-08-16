import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/App/User/Login'
import Register from '@/components/App/User/Register'
import ForgotPassword from '@/components/App/User/ForgotPassword'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/login', name: 'Login', component: Login },
        { path: '/register', name: 'Register', component: Register },
        { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },
    ]
})
