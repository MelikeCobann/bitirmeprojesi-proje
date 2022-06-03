import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/loginpage.vue'
import Register from '../views/registerpage.vue'
import Meeting from '../views/meetingpage.vue'


const routes = [{
        path: '/login',
        name: 'LoginPage',
        component: Login
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: Register
    },
    {
        path: '/main',
        name: 'MeetingPage',
        component: Meeting
    },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router