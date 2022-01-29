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
    <div class="my-5 grid grid-cols-2 gap-8">
      <!-- chart items -->
      <div class="w-full h-80">
        <CommChart
          :chartType="'line'"
          :chartTitle="'Will Smith'"
          :chartLegend="['Number of Commit']"
          :chartXData="[0, 0, 0, 0, 0, 20, 5, 20, 7, 13, 3, 5]"
          :chart-x-title="moonthSeq"
        />
      </div>
      <div class="w-full h-80">
        <CommChart
          :chartType="'line'"
          :chartTitle="'Will Smith'"
          :chartLegend="['Number of Commit']"
          :chartXData="[0, 0, 0, 0, 0, 20, 5, 20, 7, 13, 3, 5]"
          :chart-x-title="moonthSeq"
        />
      </div>
      <div class="w-full h-80">
        <CommChart
          :chartType="'line'"
          :chartTitle="'Will Smith'"
          :chartLegend="['Number of Commit']"
          :chartXData="[0, 0, 0, 0, 0, 20, 5, 20, 7, 13, 3, 5]"
          :chart-x-title="moonthSeq"
        />
      </div>
      <div class="w-full h-80">
        <CommChart
          :chartType="'line'"
          :chartTitle="'Will Smith'"
          :chartLegend="['Number of Commit']"
          :chartXData="[0, 0, 0, 0, 0, 20, 5, 20, 7, 13, 3, 5]"
          :chart-x-title="moonthSeq"
        />
      </div>
    </div>

    <!-- end of charts  -->
  </div>
  <!-- end of comit charts -->
</template>

<script setup>
import Crumbs from "@/components/Crumbs.vue";
import CommChart from "../../components/Charts/CommChart.vue";

const moonthSeq = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']
</script>
<style></style>