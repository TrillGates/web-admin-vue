import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);
/*登录页面*/
const login = () => import("@/page/login/login");
/*设置部分*/
const systemInfo = () => import("@/page/settings/system");
/*布局*/
const baseView = () => import("@/layout/base-view");
const rightView = () => import("@/layout/right-content");
const index = () => import("@/page/dashboard/index");

export const routes = [
    {
        path: '',
        component: baseView,
        redirect: '/index',
        children: [
            {
                path: "/index",
                name: '首页',
                icon: 'el-icon-s-home',
                hidden: false,
                component: index
            },
            {
                path: '/settings',
                name: '设置',
                hidden: false,
                icon: 'el-icon-setting',
                component: rightView,
                children: [
                    {
                        path: 'users',
                        hidden: false,
                        name: '系统信息',
                        icon: 'el-icon-cpu',
                        component: systemInfo,
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        component: login
    }
];


const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

export default router;
