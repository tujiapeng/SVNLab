<template>
  <div class="flex">
    <div class="w-48 min-w-min shadow-lg bg-gray-100 overflow-hidden">
      <SideNav :navTree="nav_tree" />
    </div>
    <div class="w-full mx-4 py-4">
      <!-- <RepoFiles /> -->
      <router-view />
    </div>
  </div>
</template>

<script setup>
import SideNav from "@/components/SideNav.vue";
// router items
const nav_tree = [
  {
    id: 1,
    title: "项目概览",
    icon: "chevron-down",
    sub_nav_items: [
      {
        id: 1,
        name: "详情",
        icon: "info",
        link_to: "/projectOps/Project/ProjectDetails",
      },
      {
        id: 2,
        name: "动态",
        icon: "meteor",
        link_to: "/projectOps/Project/ProjectActivity",
      },
      {
        id: 3,
        name: "发布",
        icon: "poll-h",
        link_to: "/projectOps/Project/ProjectRelease",
      }
    ],
  },
  {
    id: 2,
    title: "仓库",
    icon: "chevron-down",
    sub_nav_items: [
      {
        id: 1,
        name: "文件",
        icon: "cog",
        link_to: "/projectOps/Project/RepoFiles",
      },
      {
        id: 2,
        name: "提交",
        icon: "check-double",
        link_to: "/projectOps/Project/RepoCommits",
      },
      {
        id: 3,
        name: "分支",
        icon: "code-branch",
        link_to: "/projectOps/Project/RepoBranches",
      },
      {
        id: 4,
        name: "标签",
        icon: "tag",
        link_to: "/projectOps/Project/RepoTags",
      },
      {
        id: 5,
        name: "贡献者",
        icon: "user-friends",
        link_to: "/projectOps/Project/RepoContributors",
      },
      {
        id: 6,
        name: "分支图",
        icon: "project-diagram",
        link_to: "/projectOps/Project/RepoGraph",
      }
    ],
  },
  {
    id: 3,
    title: "议题",
    icon: "chevron-down",
    sub_nav_items: [
      {
        id: 1,
        name: "列表",
        icon: "list",
        link_to: "/projectOps/Project/IssueList",
      },
      {
        id: 2,
        name: "看板",
        icon: "columns",
        link_to: "/projectOps/Project/IssueBoards",
      },
      {
        id: 3,
        name: "标记",
        icon: "thumbtack",
        link_to: "/projectOps/Project/IssueLabels",
      },
      {
        id: 4,
        name: "服务台",
        icon: "concierge-bell",
        link_to: "/projectOps/Project/IssueServiceDesk",
      },
      {
        id: 5,
        name: "里程碑",
        icon: "map-signs",
        link_to: "/projectOps/Project/IssueMilestones",
      }
    ],
  },
  {
    id: 4,
    title: "CI/CD",
    icon: "chevron-down",
    sub_nav_items: [
      {
        id: 1,
        name: "流水线",
        icon: "dolly-flatbed",
        link_to: "/projectOps/Project/CICDPipelines",
      },
      {
        id: 2,
        name: "编辑器",
        icon: "edit",
        link_to: "/projectOps/Project/CICDEditors",
      },
      {
        id: 3,
        name: "作业",
        icon: "dolly",
        link_to: "/projectOps/Project/CICDJobs",
      },
      {
        id: 4,
        name: "计划",
        icon: "calendar",
        link_to: "/projectOps/Project/CICDSchedules",
      },
    ]
  },
  {
    id: 5,
    title: "安全与合规",
    icon: "shield-alt",
    sub_nav_items: [
      {
        id: 1,
        name: "配置",
        icon: "cog",
        link_to: "/projectOps/Project/SecAndCompliance",
      }
    ]
  },
  {
    id: 6,
    title: "运维",
    icon: "chevron-down",
    sub_nav_items: [
      {
        id: 1,
        name: "配置",
        icon: "cog",
        link_to: "/projectOps/Project/OperationMetrics",
      },
      {
        id: 2,
        name: "日志",
        icon: "wave-square",
        link_to: "/projectOps/Project/OperationLogs",
      },
      {
        id: 3,
        name: "跟踪",
        icon: "shoe-prints",
        link_to: "/projectOps/Project/OperationTracing",
      },
      {
        id: 4,
        name: "错误追踪",
        icon: "route",
        link_to: "/projectOps/Project/OperationErrorTracking",
      },
      {
        id: 5,
        name: "Incidents",
        icon: "bomb",
        link_to: "/projectOps/Project/OperationIncidents",
      },
      {
        id: 6,
        name: "Serverless",
        icon: "superscript",
        link_to: "/projectOps/Project/OperationServerless",
      },
      {
        id: 7,
        name: "Terraform",
        icon: "cog",
        link_to: "/projectOps/Project/OperationTerraform",
      },
      {
        id: 8,
        name: "Kubernetes",
        icon: "dharmachakra",
        link_to: "/projectOps/Project/OperationKubernetes",
      },
      {
        id: 9,
        name: "Environments",
        icon: "cogs",
        link_to: "/projectOps/Project/OperationEnvironments",
      },
      {
        id: 10,
        name: "FeatureFlags",
        icon: "flag",
        link_to: "/projectOps/Project/OperationFeatureFlags"
      }
    ]
  },
  {
    id: 7,
    title: "软件包与镜像库",
    icon: "chevron-down",
    sub_nav_items: [
      {
        id: 1,
        name: "配置",
        icon: "cog",
        link_to: "/projectOps/Project/PackagesRegistry",
      }
    ]
  },
  {
    id: 8,
    title: "分析",
    icon: "chevron-down",
    sub_nav_items: [
      {
        id: 1,
        name: "CICD",
        icon: "rocket",
        link_to: "/projectOps/Project/AnalyticsCICD",
      },
      {
        id: 2,
        name: "Repository",
        icon: "box",
        link_to: "/projectOps/Project/AnalyticsRepository"
      },
      {
        id: 3,
        name: "ValueStream",
        icon: "bacon",
        link_to: "/projectOps/Project/AnalyticsValueStream"
      }
    ]
  },
  {
    id: 9,
    title: "wiki",
    icon: "chevron-down",
    sub_nav_items: [
      {
        id: 1,
        name: "配置",
        icon: "cog",
        link_to: "/projectOps/Project/WikiSettings",
      }
    ]
  },
  {
    id: 10,
    title: "代码片段",
    icon: "chevron-down",
    sub_nav_items: [
      {
        id: 1,
        name: "配置",
        icon: "cog",
        link_to: "/projectOps/Project/SnippetsSettings",
      }
    ]
  },
  {
    id: 11,
    title: "成员",
    icon: "chevron-down",
    sub_nav_items: [
      {
        id: 1,
        name: "配置",
        icon: "cog",
        link_to: "/projectOps/Project/MembersSettings",
      }
    ]
  },
  {
    id: 12,
    title: "设置",
    icon: "chevron-down",
    sub_nav_items: [
      {
        id: 1,
        name: "通用",
        icon: "portrait",
        link_to: "/projectOps/Project/SettingsGeneral",
      },
      {
        id: 2,
        name: "集成",
        icon: "compress-arrows-alt",
        link_to: "/projectOps/Project/SettingsIntegrations",
      },
      {
        id: 3,
        name: "webhook",
        icon: "anchor",
        link_to: "/projectOps/Project/SettingsWebhooks",
      },
      {
        id: 4,
        name: "访问令牌",
        icon: "key",
        link_to: "/projectOps/Project/SettingsAccessTokens",
      },
      {
        id: 5,
        name: "仓库",
        icon: "warehouse",
        link_to: "/projectOps/Project/SettingsRepository",
      },
      {
        id: 6,
        name: "CI/CD",
        icon: "pallet",
        link_to: "/projectOps/Project/SettingsCICD",
      }
    ]
  }
];
</script>

<style></style>