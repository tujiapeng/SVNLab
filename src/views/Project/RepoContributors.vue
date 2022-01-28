<template>
  <Crumbs />

  <!-- branch filter  -->
  <div class="flex h-20 bg-gray-50 border-y items-center gap-x-2 px-4">
    <button
      class="
        min-w-fit
        border
        rounded-md
        h-10
        px-2
        bg-white
        hover:border-gray-400 hover:bg-gray-200
      "
    >
      Development
      <font-awesome-icon icon="angle-down" class="mx-2" />
    </button>
    <router-link
      to="/projectOps/Project/RepoCommits"
      class="
        min-w-fit
        px-3
        py-2
        border
        rounded-md
        bg-white
        hover:bg-gray-200 hover:border-gray-400
      "
    >
      History
    </router-link>
  </div>
  <!-- end of branch filter  -->

  <!-- commit charts -->
  <div class="my-3">
    <!-- page title  -->
    <div>
      <p class="text-3xl py-2">Commits to development</p>
      <p class="text-lg text-gray-700">
        Excluding merge commits. Limited to 6,000 commits.
      </p>
    </div>

    <!-- charts  -->
    <!-- end of charts  -->
  </div>
  <!-- end of comit charts -->
</template>

<script setup>
import Crumbs from "@/components/Crumbs.vue";
</script>
<style></style>