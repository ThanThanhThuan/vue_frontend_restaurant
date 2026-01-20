import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReservationView from '../views/ReservationView.vue'
import TicketView from '../views/TicketView.vue'
import MenuView from '../views/MenuView.vue'
import AdminView from '../views/AdminView.vue' // Import new view


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/reservation',
            name: 'reservation',
            component: ReservationView
        },
        {
            path: '/tickets',
            name: 'ticket',
            component: TicketView
        },
        {
            path: '/menu', // New route
            name: 'menu',
            component: MenuView
        },
        {
            path: '/admin', // New route
            name: 'admin',
            component: AdminView
        }

    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        return { top: 0 }
    }
})

export default router