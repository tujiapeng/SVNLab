<template>
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
</template>

<script setup></script>
<style></style>