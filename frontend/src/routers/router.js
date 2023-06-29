import { createWebHistory, createRouter } from 'vue-router'
import Login from '@/components/Login'
import Plate from '@/components/Plate'
import Autodraw from '@/components/Autodraw'
import FinalPlate from '@/components/FinalPlate'
import Signup from  '@/components/Signup'
import Finalhome from  '@/components/Finalhome'



const routes = [
    {
        path: '/',
        name: 'Finalhome',
        component: Finalhome
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/plate',
        name: 'Plate',
        component: Plate
    },

    {
        path: '/autodraw',
        name: 'Autodraw',
        component: Autodraw
    },

    {
        path: '/finalplate',
        name: 'FinalPlate',
        component: FinalPlate
    },

    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    
    
    
   
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router