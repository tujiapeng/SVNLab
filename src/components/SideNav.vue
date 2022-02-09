<template>
  <div class="h-full w-52 min-w-min overflow-y-scroll py-2 bg-gray-50">
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
            class="bg-indigo-100 hover:bg-indigo-200 py-2"
            @click="toggleCollapse('side-nav-sub-' + navItem.id)"
          >
            <a class="pl-2 text-lg font-semibold text-gray-700 tracking-wide">{{
              navItem.title
            }}</a>
            <font-awesome-icon class="float-right mr-1" icon="chevron-down" />
          </div>
          <!-- 子菜单 -->
          <div :id="'side-nav-sub-' + navItem.id">
            <ul v-for="subItem in navItem.sub_nav_items" :key="subItem.id">
              <!-- 子菜单项 -->
              <li
                class="
                  py-2
                  hover:border-l-4 hover:border-blue-400 hover:bg-blue-200
                  cursor-pointer
                  text-gray-700
                  flex
                  items-center
                "
              >
                <router-link :to="subItem.link_to" class="w-full">
                  <font-awesome-icon :icon="subItem.icon" class="ml-6" />
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
</template>

<script setup>
defineProps(["navTree", "navTitle"]);

const toggleCollapse = (id) => {
  if (parent.document.getElementById(id).style.display) {
    parent.document.getElementById(id).style.display = "";
  } else {
    parent.document.getElementById(id).style.display = "none";
  }
};
</script>

<style></style>