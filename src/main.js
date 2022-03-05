import Vue from 'vue'
import App from './App.vue'
import router from './router'
/*饿了么的UI*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import leftMenu from './layout/left-menu';
import topHeader from './layout/top-header';


Vue.config.productionTip = false;

Vue.component('leftMenu', leftMenu);
Vue.component('topHeader', topHeader);
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
    // console.log(to);
    // console.log(from);
    // console.log(next);
    //如果是登录界面，则需要放行
    if (to.path === '/login') {
        //如果要做得更好一点，如果用户要跳转到登录页面
        //当前已经登录了，则没必要再到登录界面了，除非用户点击退出登录
        //如果已经登录，根据角色判断页面跳转。
        next();
    } else {
        //否则检查用户角色
        // checkToken().then(result => {
        //     console.log(result);
        //     if (result.code === success_code) {
        //         window.localStorage.setItem('avatar', result.data.avatar);
        //         window.localStorage.setItem('userName', result.data.userName);
        //         //后面再处理其他的权限吧
        //         if (result.data.roles.indexOf('SUPER_ADMIN') !== -1) {
        //             next();
        //         } else {
        //             //跳转到登录页面
        //             next({
        //                 path: '/login'
        //             })
        //         }
        //     } else {
        //         //跳转到登录界面
        //         next({
        //             path: '/login'
        //         })
        //     }
        //
        // });
        next();
    }
});
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
