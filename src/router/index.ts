import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from "@/views/ContactView.vue";

// these are import only needed for development, NOT the actual build
import TestComponent from "@/components/development-only/TestComponent.vue";
import DevPreView from '@/views/development-only/DevPreView.vue';
import TestView from "@/views/development-only/TestView.vue";

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
    },
    {
      path: "/dev-preview",
      name: "dev-preview",
      component: DevPreView,
      meta: {
        title: "Dev Preview"
      },
      children: [
        {
          path: "component",
          component: TestComponent
        },
        {
          path: "view",
          component: TestView
        }
      ]
    }
  ]
})

router.beforeEach((to, from) => {
  // @ts-ignore
  document.title = to.meta?.title ?? 'None'
})

export default router
