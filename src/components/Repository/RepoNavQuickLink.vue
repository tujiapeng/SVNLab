<template>
  <!-- project nav quick link -->
  <div class="mt-5">
    <button
      class="
        min-w-max
        h-12
        my-1
        px-3
        border-2
        border-gray-400
        rounded-md
        hover:bg-gray-100
        hover:border-gray-400
      "
    >
      <font-awesome-icon icon="file-alt" />
      <span class="ml-2">README</span>
    </button>
    <button v-for="item in addMenu" :key="item.title"
      class="
        min-w-max
        h-12
        mx-2
        my-1
        px-3
        border-2
        border-dashed
        border-gray-400
        rounded-md
        hover:bg-gray-100
        hover:border-gray-400
      "
    >
      <font-awesome-icon icon="plus-square" />
      <span class="ml-2">{{ item.title }}</span>
    </button>
  </div>
  <!-- end of quick link -->
</template>

<script setup>
const addMenu = [
  {
    title: 'Add LICENSE',
    url: '#'
  },
  {
    title: 'Add CHANGELOG',
    url: '#'
  },
  {
    title: 'Add CONTRIBUTING',
    url: '#'
  },
  {
    title: 'Enable Auto DevOps',
    url: '#'
  },
  {
    title: 'Add Kubernets cluster',
    url: '#'
  },
  {
    title: 'Set up CI/CD',
    url: '#'
  }
]
</script>
<style></style>
