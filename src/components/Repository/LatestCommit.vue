<template>
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
          id="member-avator"
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
</template>

<script setup></script>
<style></style>