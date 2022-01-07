<template>
  <!-- project list holder -->
  <div class="mt-5 mx-10 divide-y divide-gray-400">
    <!-- project 01 -->
    <ul
      id="project-list"
      class="mx-5 flex h-20 items-center justify-between"
    >
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
            <a class="max-w-min truncate" href=""
              >very long goup name very long goup name very long goup name very
              long goup name very long goup name
            </a>
            <span>/</span>
            <a class="max-w-min truncate font-bold" href="">
              project-name-xx project-name-xx project-name-xx project-name-xx
              project-name-xx project-name-xx project-name-xx project-name-xx
              project-name-xx
            </a>
            <span
              class="
                ml-2
                bg-blue-500
                px-1
                rounded-lg
                text-center text-white
              "
              >developer</span
            >
          </div>
          <!-- description text -->
          <div>
            <p class="truncate text-gray-500">
              project description project description project description
              project description project description project description
              project description project description project description
              project description
            </p>
          </div>
        </div>
      </li>
      <!-- column 3 info -->
      <li class="ml-5 text-sm">
        <p>0 star</p>
      </li>
      <!-- column 4 -->
      <li class="ml-5 text-sm">
        <div>
          <p>5 menber</p>
        </div>
      </li>
      <li class="ml-5 text-sm">
          <p>0 hooks</p>
      </li>
      <!-- column 5 -->
      <li class="ml-5 text-sm">
        <div>
          <a href="">5 issue</a>
        </div>
      </li>
      <!-- column 6 -->
      <li class="ml-5 text-sm">
        <div>
          <a href="">120 MiB</a>
        </div>
      </li>
      <!-- column 7 -->
      <li class="ml-5 text-sm">
        <div>
          <p>更新于 2 周前</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style></style>