import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SceneDetails from '@/components/SceneDetails'
import SceneDetails1 from '@/components/SceneDetails1'
import Register from '@/components/Register'
import HotQuestions from '@/components/HotQuestions'
import TravelRecord from '@/components/TravelRecord'
import HelloWorld from '@/components/HelloWorld'
import SubmitQuestions from '@/components/SubmitQuestions'
import KnowledgeMap from '@/components/KnowledgeMap'
import Message from '@/components/Message'
import History from '@/components/History'
import MyQuestions from '@/components/MyQuestions'

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
      path: '/hotQuestions',
      name: 'HotQuestions',
      component: HotQuestions,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/submitQuestions',
      name: 'SubmitQuestions',
      component: SubmitQuestions,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/knowledgeMap',
      name: 'KnowledgeMap',
      component: KnowledgeMap,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/history',
      name: 'History',
      component: History,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/myQuestions',
      name: 'MyQuestions',
      component: MyQuestions,
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

