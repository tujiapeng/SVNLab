<template>
  <div class="h-full w-48 min-w-min overflow-y-scroll py-2 bg-gray-100">
    <!-- 导航栏标题 -->
    <div id="nav-title">
      <p
        class="
          text-2xl
          px-2
          py-3
          align-text-bottom
          truncate
          text-gray-600
          hover:bg-gray-300
        "
      >
        {{ navTitle }}
      </p>
    </div>
    <!-- 导航栏内容 -->
    <ul>
      <!-- 菜单项 -->
      <li v-for="navItem in navTree" :key="navItem.id">
        <div>
          <!-- 菜单标题 -->
          <div
            class="bg-indigo-100"
            @click="toggleCollapse('side-nav-sub-' + navItem.id)"
          >
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
            <font-awesome-icon class="float-right mr-1" :icon="navItem.icon" />
          </div>
          <!-- 子菜单 -->
          <div :id="'side-nav-sub-' + navItem.id" style="display: none">
            <ul v-for="subItem in navItem.sub_nav_items" :key="subItem.id">
              <!-- 子菜单项 -->
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
        </div>
      </li>
      <!-- end of class1 nav -->
    </ul>
  </div>
  <!-- test -->
  <!-- <div>
    <div>
      <h2 @click="nInc">{{ count }} is {{ n }}</h2>
    </div>
  </div> -->
</template>

<script setup>
defineProps(["navTree", "navTitle"]);

// func test
// import { ref } from "vue";
// const count = ref("count");
// const n = ref(18);

// const nInc = () => {
//   n.value++;
// };
const toggleCollapse = (name) => {
  if (parent.document.getElementById(name).style.display) {
    parent.document.getElementById(name).style.display = "";
  } else {
    parent.document.getElementById(name).style.display = "none";
  }
};
</script>

<style></style>