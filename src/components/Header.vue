/* eslint-disable vue/multi-word-component-names */
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <!-- 菜单 -->
  <div
    id="header"
    class="fixed w-full flex bg-gray-100 border-b-2 items-end pt-3 text-lg"
  >
    <!-- logo  -->
    <div id="site-logo" class="mx-3">
      <router-link to="/" class="text-4xl font-bold">SVNLab</router-link>
    </div>

    <!-- head bar -->
    <div class="w-full flex justify-between ml-3">
      <!-- admin menu  -->
      <div id="title-container" class="flex font-semibold text-center">
        <router-link
          to="/projectOps"
          class="w-24 hover:border-b-2 hover:border-b-blue-600 hover:text-indigo-700"
        >
          Project
        </router-link>
        <router-link to="/groups" class="w-24 hover:border-b-2 hover:border-b-blue-600 hover:text-indigo-700">
          Groups
        </router-link>
        <div class="w-24 hover:border-b-2 hover:border-b-blue-600 hover:text-indigo-700 cursor-pointer" @click="switchDisplayById('menuOnMore')">
          More
          <font-awesome-icon icon="angle-down" class="mx-1" />
          <div id="menuOnMore" style="display: none">
            <MenuList :menuItems="m1" />
          </div>
        </div>
        <div class="w-24 hover:border-b-2 hover:border-b-blue-600 hover:text-indigo-700 cursor-pointer">
          Admin
          <font-awesome-icon icon="tools" />
        </div>
      </div>

      <!-- nav icons -->
      <div id="navbar-collapse" class="flex text-gray-600 justify-end gap-x-1 pb-1">
        <!-- new -->
        <button type="button" class="px-1 rounded hover:bg-gray-300" @click="switchDisplayById('menuOnAdd')">
          <font-awesome-icon icon="plus-square" class="mx-1" />
          <font-awesome-icon icon="angle-down" class="mx-1" />
          <div id="menuOnAdd" style="display: none">
            <MenuList :menuItems="m2" />
          </div>
        </button>
        <!-- search  -->
        <input
          id="top-search-bar"
          type="search"
          name="topsearchbar"
          placeholder="search project"
          class="
            px-1
            text-lg
            border border-gray-400
            rounded
            focus:outline-none focus:border-sky-500
          "
        />
        <!-- issue  -->
        <button type="button" class="px-2 rounded hover:bg-gray-300">
          <font-awesome-icon icon="dot-circle" />
        </button>
        <!-- todo  -->
        <button type="button" class="px-2 rounded hover:bg-gray-300">
          <font-awesome-icon icon="check-square" />
        </button>
        <!-- help -->
        <button type="button" class="px-2 rounded hover:bg-gray-300" @click="switchDisplayById('menuOnHelp')">
          <font-awesome-icon icon="question-circle" />
          <font-awesome-icon icon="angle-down" class="mx-1" />
          <div id="menuOnHelp" style="display: none" class="-ml-20">
            <MenuList :menuItems="m2" />
          </div>
        </button>
        <!-- user avatar  -->
        <button
          type="button"
          class="
            mr-2
            px-1
            rounded-full
            w-28
            truncate
            bg-indigo-300
            hover:bg-blue-500 hover:text-white
          "
        >
          John-Weak
        </button>
      </div>
      <!-- end of nav icons -->
    </div>
    <!-- end of head bar -->
  </div>
</template>

<script setup>
import MenuList from "@/components/MenuList.vue";

const m1 = [
  {
    title: "activity",
    url: "#"
  },
  {
    title: "menu1 t2",
    url: "#"
  }
]

const m2 = [
  {
    title: "menu2 text1",
    url: "#"
  },
  {
    title: "menu2 text2",
    url: "#"
  },
  {
    title: "menu2 text3",
    url: "#"
  },
  {
    title: "menu2 text4",
    url: "#"
  }
]

const switchDisplayById = (id) => {
  if (parent.document.getElementById(id).style.display) {
    parent.document.getElementById(id).style.display = "";
  } else {
    parent.document.getElementById(id).style.display = "none";
  }
}
</script>

<style></style>
