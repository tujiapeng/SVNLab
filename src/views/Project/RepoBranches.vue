<template>
  <div id="projectActivity-content-body" class="w-full mx-2 px-4">
    <Crumbs />

    <div class="flex justify-between">
      <!-- activity stat filter -->
      <div class="mt-2">
        <ul class="flex">
          <li
            class="
              px-2
              py-2
              align-middle
              text-center
              h-12
              border-b-2 border-b-gray-200
              hover:border-b-gray-400
            "
          >
            <span>Overview</span>
          </li>
          <li
            class="
              px-2
              py-2
              align-middle
              text-center
              h-12
              border-b-2 border-b-gray-200
              hover:border-b-gray-400
            "
          >
            <span>Active</span>
          </li>
          <li
            class="
              px-2
              py-2
              align-middle
              text-center
              h-12
              border-b-2 border-b-gray-200
              hover:border-b-gray-400
            "
          >
            <span>Stale</span>
          </li>
          <li
            class="
              px-2
              py-2
              align-middle
              text-center
              h-12
              border-b-2 border-b-gray-200
              hover:border-b-gray-400
            "
          >
            <span>All</span>
          </li>
        </ul>
      </div>
      <!-- end of activity stat filter -->

      <!-- branch activity filters -->
      <div class="flex items-center">
        <input
          type="search"
          name="branchFilter"
          placeholder="Filter by branch name"
          class="
            px-3
            h-10
            w-64
            text-lg
            border border-gray-400
            rounded-l-md
            focus:outline-none focus:border-sky-300 focus:border-2
          "
        />
        <button
          class="h-10 w-10 border border-gray-400 rounded-r-md hover:border-2"
        >
          <font-awesome-icon icon="search" />
        </button>

        <button
          class="
            h-10
            px-3
            mx-2
            ml-8
            border
            rounded-md
            border-red-400
            text-red-400
            hover:bg-red-50
          "
        >
          Delete merged branches
        </button>
        <button
          class="
            h-10
            px-3
            border
            rounded-md
            bg-blue-500
            text-white
            hover:bg-blue-600
          "
        >
          New branch
        </button>
      </div>
      <!-- end of branch activity filter -->
    </div>

    <!-- protected branches settings tips -->
    <div
      class="
        flex
        border-y
        h-16
        px-4
        items-center
        font-semibold
        bg-gray-50
        text-gray-700
      "
    >
      <a>protected branches can be managed in</a>
      <a href="" class="mx-2 text-blue-600">Project settings</a>
    </div>
    <!-- end of tips -->

    <!-- activity items -->
    <div class="my-4">
      <ul class="border rounded-md">
          <!-- chart title -->
        <li class="h-16 bg-gray-50 flex items-center">
          <a href="" class="pl-5 text-lg">Active branches</a>
        </li>
        <!-- activity items  -->
        <li
          v-for="activity in branch_activity_list"
          :key="activity.id"
          class="h-20 border-t pl-5 pr-2"
        >
          <div class="pt-4 flex items-center justify-between">
            <ul>
              <li>
                <font-awesome-icon icon="code-branch" />
                <a href="" class="mx-1 ml-3">{{ activity.branch }}</a>
                <span class="mx-1 rounded-lg px-2 bg-blue-500 text-white"
                  >default</span>
                <span class="mx-1 rounded-lg px-2 bg-green-300">protected</span>
              </li>
              <li>
                <font-awesome-icon :icon="['fa', 'code-commit']" />
                <a href="" class="mx-1 ml-3">{{ activity.commit_id }}</a>
                <span>&#8226;</span>
                <a href="" class="mx-1">{{ activity.commit_note }}</a>
                <span>&#8226;</span>
                <span class="mx-1">{{ activity.commit_time }}</span>
              </li>
            </ul>

            <!-- download link  -->
            <div>
              <button
                class="
                  border
                  rounded-md
                  px-2
                  py-2
                  hover:border-gray-400 hover:bg-gray-100
                "
              >
                <font-awesome-icon icon="download" class="mx-2" />
                <font-awesome-icon icon="chevron-down" class="mx-2" />
              </button>
              <button
                class="
                  border
                  rounded-md
                  ml-2
                  px-2
                  py-2
                  hover:bg-gray-100 hover:cursor-not-allowed
                "
              >
                <font-awesome-icon icon="trash" class="mx-2 text-gray-400" />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- end of activity -->
  </div>
</template>

<script setup>
import Crumbs from "@/components/Crumbs.vue";

const branch_activity_list = [
  {
    id: 1,
    branch: "master",
    commit_id: "1a1646d1",
    commit_note: "完善测试用例",
    commit_time: "2021-01-18 16:06",
  },
  {
    id: 2,
    branch: "master",
    commit_id: "1a1646d2",
    commit_note: "完善测试用例2",
    commit_time: "2021-01-18 16:07",
  },
  {
    id: 3,
    branch: "master",
    commit_id: "1a1646d3",
    commit_note: "完善测试用例3",
    commit_time: "2021-01-18 16:08",
  },
  {
    id: 4,
    branch: "master",
    commit_id: "1a1646d4",
    commit_note: "完善测试用例4",
    commit_time: "2021-01-18 16:08",
  },
];
</script>
<style></style>