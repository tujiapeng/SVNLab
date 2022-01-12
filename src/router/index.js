// 引入router
import { createRouter, createWebHashHistory } from "vue-router";
// 引入路由页面配置
import routes from './routes.js';

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;