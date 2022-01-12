import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SceneDetails from '@/components/SceneDetails'
import SceneDetails1 from '@/components/SceneDetails1'
import Register from '@/components/Register'
import TravelRecord from '@/components/TravelRecord'
import HelloWorld from '@/components/HelloWorld'
import SceneRecommend from '@/components/SceneRecommend'
import SceneRecommend1 from '@/components/SceneRecommend1'
import MyTravels from '@/components/MyTravels'
import MyComments from '@/components/MyComments'
import MyCollections from '@/components/MyCollections'
import PersonalCenter from '@/components/PersonalCenter'
import MyContributions from '@/components/MyContributions'
import AllScenes from '@/components/AllScenes'


Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register,
    },
    {
      path:'/',
      name:'HelloWorld',
      component:HelloWorld,
    },
    {
      path: '/sceneDetails',
      name: 'SceneDetails',
      component: SceneDetails,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/sceneDetails1',
      name: 'SceneDetails1',
      component: SceneDetails1,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/travelRecord',
      name: 'TravelRecord',
      component: TravelRecord,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/myTravels',
      name: 'MyTravels',
      component: MyTravels,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/myComments',
      name: 'MyComments',
      component: MyComments,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/myCollections',
      name: 'MyCollections',
      component: MyCollections,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/myContributions',
      name: 'MyContributions',
      component: MyContributions,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/personalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/allScenes',
      name: 'AllScenes',
      component: AllScenes,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/sceneRecommend',
      name: 'SceneRecommend',
      component: SceneRecommend,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/sceneRecommend1',
      name: 'SceneRecommend1',
      component: SceneRecommend1,
      meta:{
        requireAuth:true
      }
    },
  ]
});


// 前端登录拦截
// router.beforeEach(function (to, from ,next) {
//   if (to.matched.some(record => record.meta.requireAuth)) {
//     if (window.localStorage.hasOwnProperty('token')) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath} // 登录成功之后重新跳转到该路由
//       })
//     }
//   } else {
//     next()
//   }
// });

// router.beforeEach(function (to, from ,next) {
//   if (to.matched.some(record => record.meta.requireAuth)) {
//     this.$axios.post(to.fullPath).then(res =>{
//       if(res.status===200){
//         next();
//       }
//       else {
//         next({
//           path: '/login',
//           query: {redirect: to.fullPath} // 登录成功之后重新跳转到该路由
//         })
//       }
//     }) 
//   } 
//   else {
//     next()
//   }
// });

