// 引入页面组件
import Home from '../views/Home.vue';
import Groups from "../views/Groups.vue";

// 路由映射
const routes = [
    {
        path: '/',
        name: 'home',
        title: '首页',
        component: Home,
    },
    {
        path: '/groups',
        name: 'groups',
        title: '群组',
        component: Groups,
    }
]

export default routes;