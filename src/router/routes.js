// 引入页面组件
import Home from '@/views/Home.vue';
import Groups from "@/views/Groups.vue";
import Projects from "@/views/Projects.vue";
import projectOps from "@/views/projectOps.vue";
import RepoFiles from '@/views/RepoFiles.vue';

// 路由映射
const routes = [
    {
        path: '/',
        name: 'home',
        title: '首页',
        component: Home,
    },
    {
        path: '/projects',
        name: 'projects',
        title: '项目',
        component: Projects,
    },
    {
        path: '/groups',
        name: 'groups',
        title: '群组',
        component: Groups,
    },
    {
        path: '/projectOps',
        name: 'projectOps',
        title: '群组',
        component: projectOps,
        children:[
            {path: '/projectOps/repoFiles', component: RepoFiles }
        ]
    }
]

export default routes;