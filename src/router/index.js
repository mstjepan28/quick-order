import Vue from 'vue'
import VueRouter from 'vue-router'
import Croppa from 'vue-croppa'


Vue.use(VueRouter);

Vue.use(Croppa);

const routes = [
  /*-----------------------------------------------------*/
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  /*-----------------------------------------------------*/
  {
    path: '/',
    name: 'main_menu',
    component: () => import('../views/main_menu.vue')
  },
  /*-----------------------------------------------------*/
  {
    path: '/food',
    name: 'food',
    component: () => import('../views/food.vue'),
    children:[
      {
        path: '',
        name: 'food_options',
        component: () => import('../views/food_options.vue')
      },
      {
        path: '/food_selection/:i',
        name: 'food_selection',
        component: () => import('../views/food_selection.vue')
      }
    ]
  },
  /*-----------------------------------------------------*/
  {
    path: '/drinks',
    name: 'drinks',
    component: () => import('../views/drinks.vue'),
    children:[
      {
        path: '',
        name: 'drinks_options',
        component: () => import('../views/drinks_options.vue')
      },
      {
        path: '/drinks_selection/:i',
        name: 'drinks_selection',
        component: () => import('../views/drinks_selection.vue')
      },
    ]
  },
  /*-----------------------------------------------------*/
  {
    path: '/my_order',
    name: 'my_order',
    component: () => import('../views/my_order.vue')
  },
  {
    path: '/most_ordered',
    name: 'most_ordered',
    component: () => import('../views/most_ordered.vue'),
  },
  /*-----------------------------------------------------*/
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/help.vue')
  },
  /*-----------------------------------------------------*/
  {
    path: '/terms_conditions',
    name: 'terms_conditions',
    component: () => import('../views/terms_conditions.vue')
  },
  /*-----------------------------------------------------*/
  {
    path: '/food_info/:id',
    name: 'food_info',
    component: () => import('../views/food_info.vue')
  },
  /*-----------------------------------------------------*/
  {
    path: '/calls',
    name: 'calls',
    component: () => import('../views/calls.vue')
  },
  /*-----------------------------------------------------*/
  {
    path: '/orders/:i',
    name: 'orders',
    component: () => import('../views/orders.vue'),
  },
  /*-----------------------------------------------------*/
  {
    path: '/order_info/:id',
    name: 'order_info',
    component: () => import('../views/order_info.vue')
  },
  /*-----------------------------------------------------*/
  {
    path: '/statistics',
    name: 'statistics',
    component: () => import('../views/statistics.vue')
  },
  {
    path: '/employee_info',
    name: 'employee_info',
    component: () => import('../views/employee_info.vue')
  },
  {
    path: '/employees',
    name: 'employees',
    component: () => import('../views/employees.vue')
  },
  {
    path: '/add_employee',
    name: 'add_employee',
    component: () => import('../views/add_employee.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/products.vue')
  },
  {
    path: '/add_product',
    name: 'add_product',
    component: () => import('../views/add_product.vue')
  },
  {
    path: '/order_status',
    name: 'order_status',
    component: () => import('../views/order_status.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  //Resetira scroll position da pri otvaranju novog view-a uvjek pocinjemo od vrha
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
