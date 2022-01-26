<template>
  <div>
    <!-- 导航栏标题 -->
    <div id="nav-title">
      <p
        class="text-2xl px-2 py-3 align-text-bottom truncate text-gray-600 hover:bg-gray-300"
      >
        {{ navTitle }}
      </p>
    </div>
    <!-- 导航栏内容 -->
    <ul class="mb-8 pl-2">
      <!-- 菜单1 -->
      <li v-for="navItem in navTree" :key="navItem.id">
        <div>
          <div class="bg-indigo-100">
            <a
              class="
                px-1
                pr-2
                my-4
                text-lg
                font-semibold
                text-gray-700
                tracking-wide
              "
              >{{ navItem.title }}</a
            >
            <font-awesome-icon class="float-right mr-2" :icon="navItem.icon" />
          </div>
          <!-- 子菜单 -->
          <ul v-for="subItem in navItem.sub_nav_items" :key="subItem.id">
            <li
              class="
                px-1
                py-1
                hover:border-l-4 hover:border-blue-400 hover:bg-blue-100
                cursor-pointer
                text-gray-800
                flex
                items-center
              "
            >
              <router-link :to="subItem.link_to" class="w-full">
                <font-awesome-icon :icon="subItem.icon" />
                <span class="pl-2">{{ subItem.name }}</span>
              </router-link>
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
defineProps(["navTree", "navTitle"]);

// func test
import { ref } from "vue";
const count = ref("count");
const n = ref(18);

const nInc = () => {
  n.value++;
};
</script>

<style></style>