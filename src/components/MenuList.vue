<template>
  <div class="absolute mt-3 text-gray-800 font-normal">
    <ul class="bg-white rounded-md border py-2 divide-y">
      <li v-for="mItem in menuItems" key="mItem.title" class="px-3 py-1 hover:bg-gray-200">
        <a :href="mItem.url">{{ mItem.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps(["menuItems"])
</script>

<style></style>
