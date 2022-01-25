/* eslint-disable vue/multi-word-component-names */
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <!-- 菜单 -->
  <div id="header" class="flex bg-gray-100 border-b-2">
    <!-- admin menu  -->
    <div id="title-container" class="flex w-1/2 items-end">
      <div id="site-logo" class="ml-3 mt-5">
        <router-link to="/" class="text-4xl font-bold">SVNLab</router-link>
      </div>
      <div id="header-menu" class="flex">
        <ul class="flex text-lg">
          <li>
            <router-link
              to="/projectOps"
              class="ml-3 pl-2 pr-2 rounded hover:bg-gray-300"
            >
              Project
            </router-link>
          </li>
          <li>
            <router-link
              to="/groups"
              class="ml-3 pl-2 pr-2 rounded hover:bg-gray-300"
            >
              Groups
            </router-link>
          </li>
          <li>
            <button
              type="button"
              class="ml-3 pl-2 pr-2 rounded hover:bg-gray-300"
            >
              More.
            </button>
          </li>
          <li>
            <button
              type="button"
              class="ml-3 pl-2 pr-2 rounded hover:bg-gray-300"
            >
              AdminCenter
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- nav  -->
    <div id="navbar-collapse" class="flex w-1/2 justify-end items-end">
      <ul class="flex text-lg">
        <li>
          <button type="button" class="mr-1 px-1 rounded hover:bg-gray-300">
            New
          </button>
        </li>
        <li>
          <div id="top-search">
            <input
              id="top-search-bar"
              type="search"
              name="topsearchbar"
              placeholder="search project"
              class="
                mr-1
                text-lg
                border border-gray-400
                rounded
                focus:outline-none focus:border-sky-500
              "
            >
          </div>
        </li>
        <li>
          <button type="button" class="mr-1 px-1 rounded hover:bg-gray-300">
            issue
          </button>
        </li>
        <li>
          <button type="button" class="mr-1 px-1 rounded hover:bg-gray-300">
            Todo
          </button>
        </li>
        <li>
          <button type="button" class="mr-1 px-1 rounded hover:bg-gray-300">
            Help
          </button>
        </li>
        <li>
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
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style></style>