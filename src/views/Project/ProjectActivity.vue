<template>
  <div id="projectActivity-content-body" class="w-full mx-2 px-4">
    <Crumbs />

    <div class="flex justify-between">
      <!-- activity stat filter -->
      <div class="mt-2">
        <ul class="flex">
          <li
            v-for="filter in filters_list"
            :key="filter.id"
            class="
              px-3
              align-middle
              text-center
              h-10
              border-b-2 border-b-gray-200
              hover:border-b-gray-400
            "
          >
            <span>{{ filter.title }}</span>
          </li>
        </ul>
      </div>
      <!-- end of activity stat filter -->

      <button
        class="
          h-10
          w-10
          border
          rounded-md
          text-gray-600
          hover:border-gray-400 hover:bg-gray-100
        "
      >
        <font-awesome-icon icon="rss" />
      </button>
    </div>

    <!-- activity items -->
    <div class="divide-y">
        <!-- single activity  -->
      <div
        v-for="activity in activity_list" :key="activity.id"
        class="my-2 pt-3 flex items-center justify-between"
      >
        <!-- left  -->
        <div class="flex">
          <!-- 最后提交成员 -->
          <div
            id="member-avator"
            class="w-10 h-10 rounded-md text-center align-middle bg-blue-100"
          >
            <a href="" class="text-4xl">U</a>
          </div>

          <!-- commit summary -->
          <div class="ml-5">
            <ul>
              <li>
                <a href="" class="font-semibold">{{ activity.commit_user }}</a>
                <span class="ml-2 text-gray-600">@chu.li</span>
              </li>
              <li v-if="activity.activity_info">
    <a class="ml-2 text-gray-600">{{ activity.activity_info }}</a>
              </li>
              <li v-else-if="!activity.activity_info" class="my-1">
                <font-awesome-icon icon="ankh" />
                <a class="ml-2 text-gray-600">Push to branch</a>
                <a href="" class="ml-2 text-blue-600">{{ activity.branch }}</a>
              </li>
              <li v-if="activity.commit_id">
                <a href="" class="text-blue-600">{{ activity.commit_id }}</a>
                <span class="mx-2">&#8226;</span>
                <span>{{ activity.commit_note }}</span>
              </li>
            </ul>
          </div>
          <!-- end of commit summary -->
        </div>

        <!-- right -->
        <div>
          <a href="">{{ activity.commit_time }} </a>
        </div>
      </div>
      <!-- end of activity -->
    </div>
  </div>
</template>

<script setup>
import Crumbs from "@/components/Crumbs.vue";

const filters_list = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Push events",
  },
  {
    id: 3,
    title: "Merge events",
  },
  {
    id: 4,
    title: "Issue events",
  },
  {
    id: 5,
    title: "Comments",
  },
  {
    id: 6,
    title: "Wiki",
  },
  {
    id: 7,
    title: "Design",
  },
  {
    id: 8,
    title: "Team",
  },
];

const activity_list = [
  {
    id: 1,
    branch: "master",
    commit_id: "1a1646d1",
    commit_user: "user1",
    commit_note: "修改文档",
    commit_time: "2021-01-18 16:06",
  },
  {
    id: 2,
    branch: "master",
    commit_user: "user6",
    activity_info: "join project",
    commit_time: "2021-01-18 16:07",
  },
  {
    id: 3,
    branch: "master",
    commit_id: "1a1646d3",
    commit_user: "user3",
    commit_note: "完善测试用例3",
    commit_time: "2021-01-18 16:08",
  },
  {
    id: 4,
    branch: "master",
    commit_id: "1a1646d4",
    commit_user: "user4",
    commit_note: "完善测试用例4",
    commit_time: "2021-01-18 16:08",
  },
];
</script>
<style></style>