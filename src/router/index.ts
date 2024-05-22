import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "home",
      component: HomeView,
      meta: {
        title: "Home"
      }
    },
    {
      path: '/contact',
      name: "contact",
      component: ContactView,
      meta: {
        title: "Contact"
      }
    }
  ]
})

router.beforeEach((to, from) => {
  // @ts-ignore
  document.title = to.meta?.title ?? 'None'
})

export default router
