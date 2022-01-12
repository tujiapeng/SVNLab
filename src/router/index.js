// 引入router
import { createRouter, createWebHistory } from "vue-router";
// 引入路由页面配置
import routes from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;