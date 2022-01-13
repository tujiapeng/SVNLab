<template>
  <!-- project 01 -->
  <ul class="mx-5 flex h-12 items-center justify-between">
    <!-- li 4 project row 1 -->
    <li>
      <!-- column 1 avator -->
      <div
        id="project-avator"
        class="w-6 h-6 bg-gray-200 rounded-md text-center align-middle"
      >
        <a href="" class="text-2xl">G</a>
      </div>
    </li>
    <li class="w-1/2 align-text-bottom">
      <!-- column 2 project detail -->
      <div class="mx-5 h-10 text-sm truncate">
        <!-- upper line -->
        <div class="flex">
          <a class="max-w-min truncate" :href="web_url">{{ name }} </a>
        </div>
        <!-- description text -->
        <div>
          <p class="truncate text-gray-500">
            {{ description }}
          </p>
        </div>
      </div>
    </li>
    <!-- column 3 info -->
    <li class="ml-5 text-sm">
      <p>{{ repository_size }}</p>
    </li>
    <!-- column 4 -->
    <li class="ml-5 text-sm">
      <div>
        <p>{{ project_count }} projects</p>
      </div>
    </li>
    <li class="ml-5 text-sm">
      <p>{{ member_count }} members</p>
    </li>
    <!-- column 5 -->
    <li class="ml-5 text-sm">
      <div>
        <a href="">{{ visibility }}</a>
      </div>
    </li>
    <!-- column 6 -->
    <li class="ml-5">
      <button type="button" class="rounded px-2 bg-blue-200">编辑</button>
    </li>
  </ul>
</template>

<script setup>
defineProps([
  "name",
  "web_url",
  "description",
  "repository_size",
  "project_count",
  "member_count",
  "visibility",
]);
</script>

<style></style>