/* eslint-disable vue/multi-word-component-names */
<template>
  <div id="repo-content-body" class="w-full mx-4">
    <!-- content -->
    <Crumbs />
    <hr class="border-1 my-4 border-gray-300" />
    <!-- 浏览功能按钮 -->
    <div class="py-4 flex w-full">
      <div class="w-1/2 text-lg">
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
        <span class="mx-3">projectA /</span>
        <!-- 新建项目按钮 -->
        <!-- todo: 悬浮菜单 -->
        <button
          class="
            border
            rounded-md
            px-2
            py-2
            hover:border-gray-400 hover:bg-gray-100
          "
        >
          <font-awesome-icon icon="plus" class="mx-2" />
          <font-awesome-icon icon="angle-down" class="mx-2" />
        </button>
      </div>
      <!-- 右侧功能按钮 -->
      <div class="flex w-1/2 justify-end items-end">
        <ul class="flex text-lg">
          <li class="mx-1">
            <button
              class="
                border
                rounded-md
                px-2
                py-2
                hover:border-gray-400 hover:bg-gray-100
              "
            >
              历史
            </button>
          </li>
          <li class="mx-1">
            <button
              class="
                border
                rounded-md
                px-2
                py-2
                hover:border-gray-400 hover:bg-gray-100
              "
            >
              查找文件
            </button>
          </li>
          <li class="mx-1">
            <button
              class="
                border
                rounded-md
                px-2
                py-2
                hover:border-gray-400 hover:bg-gray-100
              "
            >
              Web IDE
            </button>
          </li>
          <li class="mx-1">
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
          </li>
          <li class="mx-1">
            <button
              class="
                border
                rounded-md
                px-2
                py-2
                hover:border-gray-400 hover:bg-gray-100
              "
            >
              克隆
              <font-awesome-icon icon="chevron-down" class="mx-2" />
            </button>
          </li>
        </ul>
      </div>
      <!-- end 右侧按钮 -->
    </div>
    <!-- end 浏览功能按钮 -->

    <!-- 最新提交 post -->
    <div
      class="
        my-2
        h-28
        border
        rounded-md
        flex
        items-center
        justify-between
        bg-gray-50
      "
    >
      <!-- left -->
      <div class="flex ml-5 items-center">
        <!-- 最后提交成员 -->
        <div
          id="project-avator"
          class="w-10 h-10 rounded-md text-center align-middle bg-gray-200"
        >
          <a href="" class="text-4xl">M</a>
        </div>
        <!-- 提交内容 -->
        <div class="mx-4">
          <ul>
            <li>
              <a href="" class="text-lg font-semibold">测试用例完善</a>
            </li>
            <li>
              <a href="" class="text-gray-500">lclack 编辑于 2 days ago</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 提交校验值 -->
      <div class="mr-5">
        <ul class="flex">
          <li>
            <p class="px-3 py-2 border rounded-l-md bg-gray-50 border-gray-200">
              1a1646d1
            </p>
          </li>
          <li>
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
              <font-awesome-icon icon="paste" />
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- end 最新提交 post -->

    <!-- 文件清单 -->
    <div class="my-5">
      <!-- 表头 -->
      <ul class="border rounded-md border-gray-200">
        <li
          class="
            h-10
            px-5
            font-semibold
            flex
            items-center
            justify-between
            bg-gray-100
          "
        >
          <span class="w-1/3">名称</span>
          <span class="w-1/3 pl-4">最后提交</span>
          <span class="w-1/3 text-right">最后变更</span>
        </li>
        <li
          v-for="obj in file_list"
          :key="obj.name"
          class="
            h-10
            px-5
            text-gray-600
            border-b
            flex
            items-center
            justify-between
          "
        >
          <font-awesome-icon :icon="obj.type" class="mr-2" />
          <span class="w-1/3">{{ obj.obj_name }}</span>
          <span class="w-1/3">{{ obj.commit_info }}</span>
          <span class="w-1/3 text-right">{{ obj.last_modified_time }}</span>
        </li>
      </ul>
    </div>
    <!-- end 文件清单 -->

    <!-- README -->
    <div>
      <ul class="border rounded-md border-gray-300">
        <li
          class="
            px-5
            h-14
            rounded-t-md
            flex
            items-center
            font-semibold
            border-b
            bg-gray-100
            border-b-gray-300
          "
        >
          <font-awesome-icon icon="file-alt" class="h-10" />
          <span class="ml-2 text-lg">README.md</span>
        </li>
        <li class="px-5 my-5">
          <span class="text-4xl"> Some Text</span>
        </li>
        <li>
          <hr />
        </li>
        <li class="px-5 my-5">
          <span class="text-lg"> some project info </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Crumbs from "@/components/Crumbs.vue";

const file_list = [
  {
    obj_name: "f1",
    type: "folder",
    commit_info: "commit note1",
    last_modified_time: "2 weeks ago",
  },
  {
    obj_name: "f2",
    type: "folder",
    commit_info: "commit note2",
    last_modified_time: "2 weeks ago",
  },
  {
    obj_name: "f3",
    type: "folder",
    commit_info: "commit note3",
    last_modified_time: "2 weeks ago",
  },
  {
    obj_name: "f4",
    type: "folder",
    commit_info: "commit note4",
    last_modified_time: "2 weeks ago",
  },
  {
    obj_name: "f5",
    type: "file-pdf",
    commit_info: "commit note5",
    last_modified_time: "2 weeks ago",
  },
  {
    obj_name: "f6",
    type: "file-word",
    commit_info: "commit note6",
    last_modified_time: "2 weeks ago",
  },
  {
    obj_name: "f7",
    type: "file-csv",
    commit_info: "commit note7",
    last_modified_time: "2 weeks ago",
  },
  {
    obj_name: "f8",
    type: "file",
    commit_info: "commit note8",
    last_modified_time: "2 weeks ago",
  },
  {
    obj_name: "f9",
    type: "file",
    commit_info: "commit note9",
    last_modified_time: "2 weeks ago",
  },
  {
    obj_name: "f10",
    type: "file",
    commit_info: "commit note10",
    last_modified_time: "2 weeks ago",
  },
];
</script>

<style></style>