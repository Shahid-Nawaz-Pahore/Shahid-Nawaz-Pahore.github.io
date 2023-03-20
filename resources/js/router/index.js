import { createRouter , createWebHistory} from "vue-router";
//admin
import homeAdminIndex from '../components/admin/home/index.vue' ;
import aboutAdminIndex from '../components/admin/about/index.vue';
import adminServiceIndex from '../components/admin/services/index.vue';
// pages
import homePageIndex from '../components/pages/home/index.vue';
import login from '../components/auth/login.vue'
//not found
import notfound from '../components/notFound.vue';
// const routes =
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
     
      //admin
      {
          path:'/admin/home',
          name:'adminHome',
          component: homeAdminIndex,
          meta:{
              requiresAuth:true
          }
      },
      //about
      {
        path:'/admin/about',
        name:'adminAbout',
        component:aboutAdminIndex,
        meta:{
          requiresAuth:true
        }
      },
       //about
       {
        path:'/admin/services',
        name:'adminService',
        component:adminServiceIndex,
        meta:{
          requiresAuth:true
        }
      },
      //login
      {
        path:'/login',
          name:'Login',
        component:login,
          meta:{
              requiresAuth:false
          }
      },
         //pages
         {
          path:'/',
            name:'Home',
          component: homePageIndex,
            meta:{
                requiresAuth:false
            }
      },
       //notFound
       {
          path:'/:pathMatch(.*)*',
           name:'natMatch',
          component: notfound,
           meta:{
               requiresAuth:false
           }
      }
  ]
 });
router.beforeEach((to,from)=>{
     if(to.meta.requiresAuth && !localStorage.getItem('token') ){
        return { name: 'Login'}
     }
     if (to.meta.requiresAuth == false && localStorage.getItem('token') ){
         return {name: 'adminHome'}
     }
})
 export default router;
