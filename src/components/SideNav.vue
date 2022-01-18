<template>
  <div>
    <!-- 导航栏标题 -->
    <div id="nav-title">
      <p class="text-2xl px-4 py-2 pt-4 text-left align-text-bottom">
        后台管理
      </p>
    </div>
    <!-- 导航栏内容 -->
    <ul class="mb-8 px-2 py-4">
      <!-- 菜单1 -->
      <li v-for="navItem in nav_tree" :key="navItem.id">
        <div>
          <span
            class="
              px-1
              pr-2
              my-4
              text-lg
              font-semibold
              text-gray-700
              tracking-wide
            "
            >{{ navItem.title }}</span
          >
          <font-awesome-icon :icon="navItem.icon" />
          <ul v-for="subItem in navItem.sub_nav_items" :key="subItem.id">
            <li
              class="
                px-4
                py-1
                hover:border-l-4 hover:border-blue-400 hover:bg-blue-100
                cursor-pointer
                text-gray-800
                flex
                items-center
              "
            >
              <font-awesome-icon :icon="subItem.icon" />
              <router-link :to="subItem.link_to" class="pl-2">{{
                subItem.name
              }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- end of class1 nav -->
    </ul>
  </div>
  <!-- test -->
  <div>
    <div>
      <h2 @click="nInc">{{ count }} is {{ n }}</h2>
    </div>
  </div>
</template>

<script setup>
// router items
const nav_tree = [
  {
    id: 1,
    title: "一级菜单1",
    icon: "chevron-down",
    sub_nav_items: [
      {
        id: 1,
        name: "系统设置",
        icon: "cog",
        link_to: "/groups",
      },
      {
        id: 2,
        name: "系统分析",
        icon: "chart-line",
        link_to: "/groups",
      },
    ],
  },
  {
    id: 2,
    title: "一级菜单2",
    icon: "chevron-down",
    sub_nav_items: [
      {
        id: 1,
        name: "制品管理",
        icon: "cubes",
        link_to: "/groups",
      },
      {
        id: 2,
        name: "制品管理2",
        icon: "cubes",
        link_to: "/groups",
      },
      {
        id: 3,
        name: "制品管理3",
        icon: "cubes",
        link_to: "/groups",
      },
      {
        id: 4,
        name: "制品管理4",
        icon: "cubes",
        link_to: "/groups",
      },
    ],
  },
  {
    id: 3,
    title: "一级菜单3",
    icon: "chevron-down",
    sub_nav_items: [
      {
        id: 1,
        name: "系统设置",
        icon: "cog",
        link_to: "/groups",
      },
      {
        id: 2,
        name: "系统分析",
        icon: "chart-line",
        link_to: "/groups",
      },
    ],
  },
];


// func test
import { ref } from "vue";
const count = ref("count");
const n = ref(18);

const nInc = () => {
  n.value++;
};

</script>

<style></style>