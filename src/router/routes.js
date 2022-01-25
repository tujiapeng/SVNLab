// 引入页面组件
import Home from '@/views/Home.vue';
import Groups from "@/views/Groups.vue";
import Projects from "@/views/Projects.vue";
import projectOps from "@/views/projectOps.vue";
// project operations pages
import AnalyticsCICD from '@/views/Project/AnalyticsCICD.vue';
import AnalyticsRepository from '@/views/Project/AnalyticsRepository.vue';
import AnalyticsValueStream from '@/views/Project/AnalyticsValueStream.vue';
import CICDEditors from '@/views/Project/CICDEditors.vue';
import CICDJobs from '@/views/Project/CICDJobs.vue';
import CICDPipelines from '@/views/Project/CICDPipelines.vue';
import CICDSchedules from '@/views/Project/CICDSchedules.vue';
import IssueBoards from '@/views/Project/IssueBoards.vue';
import IssueLabels from '@/views/Project/IssueLabels.vue';
import IssueList from '@/views/Project/IssueList.vue';
import IssueMilestones from '@/views/Project/IssueMilestones.vue';
import IssueServiceDesk from '@/views/Project/IssueServiceDesk.vue';
import MembersSettings from '@/views/Project/MembersSettings.vue';
import OperationAlerts from '@/views/Project/OperationAlerts.vue';
import OperationEnvironments from '@/views/Project/OperationEnvironments.vue';
import OperationErrorTracking from '@/views/Project/OperationErrorTracking.vue';
import OperationFeatureFlags from '@/views/Project/OperationFeatureFlags.vue';
import OperationIncidents from '@/views/Project/OperationIncidents.vue';
import OperationKubernetes from '@/views/Project/OperationKubernetes.vue';
import OperationLogs from '@/views/Project/OperationLogs.vue';
import OperationMetrics from '@/views/Project/OperationMetrics.vue';
import OperationServerless from '@/views/Project/OperationServerless.vue';
import OperationTerraform from '@/views/Project/OperationTerraform.vue';
import OperationTracing from '@/views/Project/OperationTracing.vue';
import PackagesRegistry from '@/views/Project/PackagesRegistry.vue';
import ProjectActivity from '@/views/Project/ProjectActivity.vue';
import ProjectDetails from '@/views/Project/ProjectDetails.vue';
import ProjectRelease from '@/views/Project/ProjectRelease.vue';
import RepoBranches from '@/views/Project/RepoBranches.vue';
import RepoCommits from '@/views/Project/RepoCommits.vue';
import RepoCompare from '@/views/Project/RepoCompare.vue';
import RepoContributors from '@/views/Project/RepoContributors.vue';
import RepoFiles from '@/views/Project/RepoFiles.vue';
import RepoGraph from '@/views/Project/RepoGraph.vue';
import RepoTags from '@/views/Project/RepoTags.vue';
import SecAndCompliance from '@/views/Project/SecAndCompliance.vue';
import SettingsAccessTokens from '@/views/Project/SettingsAccessTokens.vue';
import SettingsCICD from '@/views/Project/SettingsCICD.vue';
import SettingsGeneral from '@/views/Project/SettingsGeneral.vue';
import SettingsIntegrations from '@/views/Project/SettingsIntegrations.vue';
import SettingsOperations from '@/views/Project/SettingsOperations.vue';
import SettingsRepository from '@/views/Project/SettingsRepository.vue';
import SettingsWebhooks from '@/views/Project/SettingsWebhooks.vue';
import SnippetsSettings from '@/views/Project/SnippetsSettings.vue';
import WikiSettings from '@/views/Project/WikiSettings.vue';

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
        children: [
            { path: '/projectOps/Project/AnalyticsCICD', component: AnalyticsCICD },
            { path: '/projectOps/Project/AnalyticsRepository', component: AnalyticsRepository },
            { path: '/projectOps/Project/AnalyticsValueStream', component: AnalyticsValueStream },
            { path: '/projectOps/Project/CICDEditors', component: CICDEditors },
            { path: '/projectOps/Project/CICDJobs', component: CICDJobs },
            { path: '/projectOps/Project/CICDPipelines', component: CICDPipelines },
            { path: '/projectOps/Project/CICDSchedules', component: CICDSchedules },
            { path: '/projectOps/Project/IssueBoards', component: IssueBoards },
            { path: '/projectOps/Project/IssueLabels', component: IssueLabels },
            { path: '/projectOps/Project/IssueList', component: IssueList },
            { path: '/projectOps/Project/IssueMilestones', component: IssueMilestones },
            { path: '/projectOps/Project/IssueServiceDesk', component: IssueServiceDesk },
            { path: '/projectOps/Project/MembersSettings', component: MembersSettings },
            { path: '/projectOps/Project/OperationAlerts', component: OperationAlerts },
            { path: '/projectOps/Project/OperationEnvironments', component: OperationEnvironments },
            { path: '/projectOps/Project/OperationErrorTracking', component: OperationErrorTracking },
            { path: '/projectOps/Project/OperationFeatureFlags', component: OperationFeatureFlags },
            { path: '/projectOps/Project/OperationIncidents', component: OperationIncidents },
            { path: '/projectOps/Project/OperationKubernetes', component: OperationKubernetes },
            { path: '/projectOps/Project/OperationLogs', component: OperationLogs },
            { path: '/projectOps/Project/OperationMetrics', component: OperationMetrics },
            { path: '/projectOps/Project/OperationServerless', component: OperationServerless },
            { path: '/projectOps/Project/OperationTerraform', component: OperationTerraform },
            { path: '/projectOps/Project/OperationTracing', component: OperationTracing },
            { path: '/projectOps/Project/PackagesRegistry', component: PackagesRegistry },
            { path: '/projectOps/Project/ProjectActivity', component: ProjectActivity },
            { path: '/projectOps/Project/ProjectDetails', component: ProjectDetails },
            { path: '/projectOps/Project/ProjectRelease', component: ProjectRelease },
            { path: '/projectOps/Project/RepoBranches', component: RepoBranches },
            { path: '/projectOps/Project/RepoCommits', component: RepoCommits },
            { path: '/projectOps/Project/RepoCompare', component: RepoCompare },
            { path: '/projectOps/Project/RepoContributors', component: RepoContributors },
            { path: '/projectOps/Project/RepoFiles', component: RepoFiles },
            { path: '/projectOps/Project/RepoGraph', component: RepoGraph },
            { path: '/projectOps/Project/RepoTags', component: RepoTags },
            { path: '/projectOps/Project/SecAndCompliance', component: SecAndCompliance },
            { path: '/projectOps/Project/SettingsAccessTokens', component: SettingsAccessTokens },
            { path: '/projectOps/Project/SettingsCICD', component: SettingsCICD },
            { path: '/projectOps/Project/SettingsGeneral', component: SettingsGeneral },
            { path: '/projectOps/Project/SettingsIntegrations', component: SettingsIntegrations },
            { path: '/projectOps/Project/SettingsOperations', component: SettingsOperations },
            { path: '/projectOps/Project/SettingsRepository', component: SettingsRepository },
            { path: '/projectOps/Project/SettingsWebhooks', component: SettingsWebhooks },
            { path: '/projectOps/Project/SnippetsSettings', component: SnippetsSettings },
            { path: '/projectOps/Project/WikiSettings', component: WikiSettings }
        ]
    }
]

export default routes;