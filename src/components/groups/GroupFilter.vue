<template>
  <!-- page top aera -->
  <div
    class="
      mt-5
      mx-10
      text-xl
      font-medium
      items-center
      leading-10
      divide-y divide-gray-400
    "
  >
    <!-- nav tab  -->
    <div class="flex">
      <ul class="flex w-1/2">
        <li>
          <a href=""
            >我加入的<span
              class="text-sm bg-red-200 w-5 inline-block rounded-lg text-center"
              >15</span
            >
          </a>
        </li>
        <li>
          <a class="ml-3" href="">群组浏览</a>
        </li>
      </ul>
      <!-- filter and sort -->
      <div class="flex w-1/2 justify-end items-baseline">
        <!-- search -->
        <input
          type="search"
          name="project-list-filter"
          id=""
          placeholder="name/description filter"
          class="
            w-1/2
            mr-2
            leading-6
            border border-gray-400
            rounded
            focus:outline-none focus:border-sky-500 focus:border-2
          "
        />
        <!-- sort -->
        <button type="button">sort by time</button>
      </div>
    </div>
    <!-- sub nav tab -->
    <div id="sub-nav-tabs" class="flex text-lg h-10 items-center">
      <ul class="flex">
        <li>
          <a href="">所有</a>
        </li>
        <li>
          <a class="ml-3" href=""
            >我创建的<span
              class="text-sm bg-red-200 w-5 inline-block rounded-lg text-center"
              >2</span
            >
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style></style>