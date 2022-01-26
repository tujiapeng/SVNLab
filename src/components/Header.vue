/* eslint-disable vue/multi-word-component-names */
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <!-- 菜单 -->
  <div
    id="header"
    class="fixed w-full flex bg-gray-100 border-b-2 items-center text-lg"
  >
    <!-- logo  -->
    <div id="site-logo" class="ml-3 my-2 mb-1">
      <router-link to="/" class="text-4xl font-bold">SVNLab</router-link>
    </div>

    <!-- head bar -->
    <div class="w-full flex justify-between ml-3 mt-1">
      <!-- admin menu  -->
      <div id="title-container" class="flex items-center gap-x-2">
        <router-link
          to="/projectOps"
          class="px-2 rounded hover:bg-gray-300"
        >
          Project
        </router-link>
        <router-link to="/groups" class="px-2 rounded hover:bg-gray-300">
          Groups
        </router-link>
        <button type="button" class="px-2 rounded hover:bg-gray-300">
          More
          <font-awesome-icon icon="angle-down" class="mx-1" />
        </button>
        <button type="button" class="px-2 rounded hover:bg-gray-300">
          Admin
          <font-awesome-icon icon="tools" />
        </button>
      </div>

      <!-- nav icons -->
      <div id="navbar-collapse" class="flex text-gray-600 justify-end gap-x-1">
        <!-- new -->
        <button type="button" class="px-1 rounded hover:bg-gray-300">
          <font-awesome-icon icon="plus-square" class="mx-1" />
          <font-awesome-icon icon="angle-down" class="mx-1" />
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
        <button type="button" class="px-2 rounded hover:bg-gray-300">
          <font-awesome-icon icon="question-circle" />
        </button>
        <!-- user avatar  -->
        <button
          type="button"
          class="
            mr-3
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

<script setup></script>

<style></style>