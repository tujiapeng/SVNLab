<template>
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
        v-for="item in content_list"
        :key="item.name"
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
        <font-awesome-icon :icon="item.type" class="mr-2" />
        <span class="w-1/3">{{ item.name }}</span>
        <span class="w-1/3">{{ item.commit_info }}</span>
        <span class="w-1/3 text-right">{{ item.last_modified_time }}</span>
      </li>
    </ul>
  </div>
  <!-- end 文件清单 -->
</template>

<script setup>
defineProps(["content_list"]);
</script>
<style></style>