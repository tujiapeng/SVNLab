<template>
  <!-- project home panel -->
  <div>
    <div class="flex items-center justify-between">
      <!-- left -->
      <div class="flex items-center">
        <!-- avatar -->
        <div
          class="
            w-20
            h-20
            text-4xl
            bg-pink-100
            rounded-md
            flex
            items-center
            justify-center
          "
        >
          <p>D</p>
        </div>
        <ul class="mx-4">
          <li>
            <span class="text-3xl">domp</span>
            <font-awesome-icon icon="lock" class="mx-2" />
          </li>
          <li>
            <span class="text-gray-600"> Project ID: 113 </span>
          </li>
        </ul>
      </div>

      <!-- right -->
      <div>
        <EZButton :size="'tiny'">
          <font-awesome-icon icon="bell" class="mx-2" />
          <font-awesome-icon icon="angle-down" class="mx-2" />
        </EZButton>
        <EZButton :size="'tiny'" :shape="'left ml-2'">
          <font-awesome-icon icon="star" class="ml-2" />
          <span class="mx-2">Star</span>
        </EZButton>
        <EZButton :size="'tiny'" :shape="'right'">
          <span class="mx-2">0</span>
        </EZButton>

        <EZButton :size="'tiny'" :shape="'left ml-2'">
          <font-awesome-icon icon="code-branch" class="ml-2" />
          <span class="mx-2">Fork</span>
        </EZButton>
        <EZButton :size="'tiny'" :shape="'right'">
          <span class="mx-2">0</span>
        </EZButton>
      </div>
    </div>

    <!-- 指标统计信息 -->
    <div class="my-4">
      <ul class="flex">
        <li>
          <a href="#">
            <font-awesome-icon :icon="['fa', 'code-commit']" class="text-gray-500" />
            <span class="mx-2 font-semibold">21</span>
            <span>Commits</span>
          </a>
        </li>
        <li class="mx-1 pl-2">
          <a href="">
            <font-awesome-icon icon="code-branch" class="text-gray-500" />
            <span class="mx-2 font-semibold">1</span>
            <span>Branch</span>
          </a>
        </li>
        <li class="mx-1 pl-2">
          <a href="#">
            <font-awesome-icon icon="tag" class="text-gray-500" />
            <span class="mx-2 font-semibold">0</span>
            <span>Tags</span>
          </a>
        </li>
        <li class="mx-1 pl-2">
          <a href="">
            <font-awesome-icon icon="file-code" class="text-gray-500" />
            <span class="mx-2 font-semibold">468.9 MB</span>
            <span>Files</span>
          </a>
        </li>
        <li class="mx-1 pl-2">
          <a href="">
            <font-awesome-icon icon="hdd" class="text-gray-500" />
            <span class="mx-2 font-semibold">468.9 MB</span>
            <span>Storage</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- 项目表述信息 -->
    <div>
      <p class="text-2xl">数字化运维中台项目</p>
    </div>

    <!-- 代码统计比例条 -->
    <div class="flex mt-4 mb-2">
      <div
        style="width: 47.9%"
        class="h-2 rounded-l-md rounded-r-none bg-amber-700"
      ></div>
      <div
        style="width: 34.7%"
        class="h-2 border-l border-l-white bg-yellow-400"
      ></div>
      <div
        style="width: 13.6%"
        class="h-2 border-l border-l-white bg-red-600"
      ></div>
      <div
        style="width: 1.7%"
        class="h-2 border-l border-l-white bg-blue-700"
      ></div>
      <div
        style="width: 1.3%"
        class="h-2 border-l border-l-white rounded-r-md bg-fuchsia-800"
      ></div>
    </div>
  </div>
  <!-- end of  project home panel -->
</template>

<script setup>
import EZButton from "@/components/EZButton.vue";
</script>
<style></style>
