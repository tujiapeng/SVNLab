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
import RepoFiles from "@/views/RepoFiles.vue";
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
        link_to: "/groups",
      },
      {
        id: 2,
        name: "动态",
        icon: "meteor",
        link_to: "/groups",
      },
      {
        id: 3,
        name: "发布",
        icon: "poll-h",
        link_to: "/groups",
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
        link_to: "/projectOps/repoFiles",
      },
      {
        id: 2,
        name: "提交",
        icon: "check-double",
        link_to: "/groups",
      },
      {
        id: 3,
        name: "分支",
        icon: "code-branch",
        link_to: "/groups",
      },
      {
        id: 4,
        name: "标签",
        icon: "tag",
        link_to: "/groups",
      },
      {
        id: 5,
        name: "贡献者",
        icon: "user-friends",
        link_to: "/groups",
      },
      {
        id: 6,
        name: "分支图",
        icon: "project-diagram",
        link_to: "/groups",
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
        link_to: "/groups",
      },
      {
        id: 2,
        name: "看板",
        icon: "th-list",
        link_to: "/groups",
      },
      {
        id: 3,
        name: "标记",
        icon: "map-marker-alt",
        link_to: "/groups",
      },
      {
        id: 4,
        name: "服务台",
        icon: "concierge-bell",
        link_to: "/groups",
      },
      {
        id: 5,
        name: "里程碑",
        icon: "map-signs",
        link_to: "/groups",
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
        icon: "rocket",
        link_to: "/groups",
      },
      {
        id: 2,
        name: "编辑器",
        icon: "edit",
        link_to: "/groups",
      },
      {
        id: 3,
        name: "作业",
        icon: "dolly",
        link_to: "/groups",
      },
      {
        id: 4,
        name: "计划",
        icon: "calendar",
        link_to: "/groups",
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
        link_to: "/groups",
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
        link_to: "/groups",
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
        link_to: "/groups",
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
        name: "配置",
        icon: "cog",
        link_to: "/groups",
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
        link_to: "/groups",
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
        link_to: "/groups",
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
        link_to: "/groups",
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
        link_to: "/groups",
      },
      {
        id: 2,
        name: "集成",
        icon: "compress-arrows-alt",
        link_to: "/groups",
      },
      {
        id: 3,
        name: "webhook",
        icon: "anchor",
        link_to: "/groups",
      },
      {
        id: 4,
        name: "访问令牌",
        icon: "key",
        link_to: "/groups",
      },
      {
        id: 5,
        name: "仓库",
        icon: "warehouse",
        link_to: "/groups",
      },
      {
        id: 6,
        name: "CI/CD",
        icon: "pallet",
        link_to: "/groups",
      }
    ]
  }
];
</script>

<style></style>