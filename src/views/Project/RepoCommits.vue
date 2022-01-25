<template>
  <div id="projectActivity-content-body" class="w-full mx-2 px-4">
    <Crumbs />

    <!-- nav bar -->
    <div class="flex justify-between">
      <!-- left -->
      <div class="flex items-center">
        <button
          class="
            border
            rounded-md
            px-2
            py-2
            hover:border-gray-400 hover:bg-gray-100
          "
        >
          master
          <font-awesome-icon icon="angle-down" class="mx-2" />
        </button>
        <a href="" class="ml-3 align-middle">domp(projectName)</a>
      </div>
      <!-- end of left  -->

      <!-- right -->
      <div>
        <button
          class="
            border
            rounded-md
            h-10
            px-2
            hover:border-gray-400 hover:bg-gray-100
          "
        >
          作者
          <font-awesome-icon icon="angle-down" class="mx-2" />
        </button>

        <input
          type="search"
          name="commitFilter"
          placeholder="按消息搜索"
          class="
            ml-3
            px-3
            h-10
            w-64
            text-lg
            border
            rounded-md
            focus:outline-none focus:border-sky-300 focus:border-2
          "
        />

        <button
          class="
            ml-3
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
      <!-- end of right part -->
    </div>
    <!-- end of nav bar -->

    <!-- commit items -->
    <div class="my-5">
      <ol  v-for="commit in commit_list" :key="commit.id" >
          <!-- time -->
        <li class="bg-gray-50 border-b text-lg">
          <a href="" class="text-gray-600">{{ commit.commit_time }} 提交</a>
        </li>
        
        <!-- detail  -->
        <li class="h-20 border-b flex items-center justify-between">
            <div class="flex items-center">
          <!-- 最后提交成员 -->
          <div
            class="w-10 h-10 rounded-md flex items-center justify-center bg-blue-100"
          >
            <a href="" class="text-3xl">U</a>
          </div>
          <div class="ml-2">
              <a href="" class="font-semibold">{{ commit.commit_note }}</a>
              <p class="text-gray-600">
                  由
                  <a href="" class="text-black px-1">{{ commit.commit_user }}</a>
                  <span>提交于 {{ commit.commit_time }}</span>
              </p>
          </div>
            </div>
        <!-- end of detail  -->

        <!-- copy sha1   -->
        <div class="flex">
            <p class="border rounded-l-md px-3 py-2 bg-gray-50">{{ commit.commit_id }}</p>
            <button
              class="
                px-3
                py-2
                border
                bg-gray-50
                border-gray-200
                hover:bg-gray-300
              "
            >
              <font-awesome-icon icon="paste" />
            </button>
            <button
              class="
                px-3
                py-2
                border
                rounded-r-md
                bg-gray-50
                border-gray-200
                hover:bg-gray-300
              "
            >
              <font-awesome-icon icon="folder-open" />
            </button>
        </div>
        <!-- end of copy sha1 -->
        </li>
      </ol>
    </div>
    <!-- end of commit items  -->
  </div>
</template>

<script setup>
import Crumbs from "@/components/Crumbs.vue";

const commit_list = [
    {
        id: 1,
        commit_time: "2022-01-25 17:51",
        commit_note: "测试用例完善2",
        commit_user: "Tom Hanks",
        commit_id: "9a27bde"
    },
    {
        id: 2,
        commit_time: "2022-01-05 10:01",
        commit_note: "测试用例完善1",
        commit_user: "King kelly",
        commit_id: "3fe0c922"
    }
]

</script>
<style></style>