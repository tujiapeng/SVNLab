<template>
  <!-- project 01 -->
  <ul id="project-list" class="mx-5 flex h-20 items-center justify-between">
    <!-- li 4 project row 1 -->
    <li>
      <!-- column 1 avator -->
      <div
        id="project-avator"
        class="w-10 h-10 bg-gray-200 rounded-md text-center align-middle"
      >
        <a href="" class="text-4xl">P</a>
      </div>
    </li>
    <li class="w-1/2">
      <!-- column 2 project detail -->
      <div class="mx-5 h-12 text-sm truncate">
        <!-- upper line -->
        <div class="flex">
          <a class="max-w-min truncate" :href="namespaceUrl"
            >{{ namesapce }}
          </a>
          <span>/</span>
          <a class="max-w-min truncate font-bold" :href="web_url">
            {{ projectName }}
          </a>
          <span
            class="ml-2 bg-blue-500 px-1 rounded-lg text-center text-white"
            >{{ role }}</span
          >
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
      <p>{{ star_count }} star</p>
    </li>
    <!-- column 4 -->
    <li class="ml-5 text-sm">
      <div>
        <p>{{ member_count }} menber</p>
      </div>
    </li>
    <li class="ml-5 text-sm">
      <p>{{ webhooks_acount }} hooks</p>
    </li>
    <!-- column 5 -->
    <li class="ml-5 text-sm">
      <div>
        <a href="">{{ open_issues_count }} issue</a>
      </div>
    </li>
    <!-- column 6 -->
    <li class="ml-5 text-sm">
      <div>
        <a href="">{{ repository_size }}</a>
      </div>
    </li>
    <!-- column 7 -->
    <li class="ml-5 text-sm">
      <div>
        <p>{{ last_activity_on }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps([
  "projectName",
  "namesapce",
  "namespaceUrl",
  "web_url",
  "role",
  "description",
  "star_count",
  "member_count",
  "webhooks_acount",
  "open_issues_count",
  "repository_size",
  "last_activity_on",
]);
</script>

<style></style>