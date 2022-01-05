/* eslint-disable vue/multi-word-component-names */
<template>
  <div id="main">
    <!-- 页面 -->
    <div id="content-body">
      <!-- content -->
      <main class="divide-y divide-gray-400">
        <!-- page title  -->
        <div class="mt-5 ml-10">
          <h1 class="text-4xl">项目</h1>
        </div>
        <!-- 项目筛选器 -->
        <ProjectFilter />
        <!-- 项目列表 -->
        <ProjectList />
        <!-- 页码 -->
        <Pagenation />
      </main>
    </div>
  </div>
</template>

<script setup>
import ProjectFilter from './ProjectFilter.vue';
import ProjectList from './ProjectList.vue';
import Pagenation from './Pagenation.vue';
</script>

<style></style>