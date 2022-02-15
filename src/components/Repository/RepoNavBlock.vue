<template>
  <!-- 浏览功能按钮 -->
  <div class="py-4 flex w-full">
    <div class="w-1/2 text-lg">
      <EZButton>
        master
        <font-awesome-icon icon="angle-down" class="mx-2" />
      </EZButton>

      <span class="mx-3">projectA /</span>
      <!-- 新建项目按钮 -->
      <!-- todo: 悬浮菜单 -->
      <EZButton>
        <font-awesome-icon icon="plus" class="mx-2" />
        <font-awesome-icon icon="angle-down" class="mx-2" />
      </EZButton>
    </div>
    <!-- 右侧功能按钮 -->
    <div class="flex w-1/2 justify-end items-end">
      <ul class="flex text-lg">
        <li class="mx-1">
          <EZButton>
            历史
          </EZButton>
        </li>
        <li class="mx-1">
          <EZButton>
            查找文件
          </EZButton>
        </li>
        <li class="mx-1">
          <EZButton>
            Web IDE
          </EZButton>
        </li>
        <li class="mx-1">
          <EZButton>
            <font-awesome-icon icon="download" class="mx-2" />
            <font-awesome-icon icon="chevron-down" class="mx-2" />
          </EZButton>
        </li>
        <li class="mx-1">
          <EZButton>
            克隆
            <font-awesome-icon icon="chevron-down" class="mx-2" />
          </EZButton>
        </li>
      </ul>
    </div>
    <!-- end 右侧按钮 -->
  </div>
  <!-- end 浏览功能按钮 -->
</template>

<script setup>
import EZButton from "@/components/EZButton.vue";
</script>
<style></style>
