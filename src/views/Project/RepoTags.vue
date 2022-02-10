<template>
  <div>
    <Crumbs />

    <!-- tag nav bar -->
    <div class="py-3 flex justify-between items-center">
      <p class="w-1/2 truncate">
        Tags give the ability to mark specific points in history as being
        important
      </p>

      <div class="flex gap-x-2">
        <input
          type="search"
          name="commitFilter"
          placeholder="Filter by tag name"
          class="
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
            min-w-fit
            border
            rounded-md
            h-10
            px-2
            hover:border-gray-400 hover:bg-gray-100
          "
        >
          Last update
          <font-awesome-icon icon="angle-down" class="mx-2" />
        </button>
        <button
          class="
            min-w-fit
            h-10
            w-10
            border
            rounded-md
            text-gray-600
            hover:border-gray-400 hover:bg-gray-100
          "
        >
          <font-awesome-icon icon="rss" class="mx-2" />
        </button>
        <button
          class="
            min-w-fit
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
    </div>
    <!-- end of nav bar -->

    <!-- tag list  -->
    <div
      v-for="tag in tag_list"
      :key="tag.id"
      class="pt-2 flex content-center justify-between text-gray-600 border-t"
    >
      <!-- tag log item  -->
      <div class="py-3">
        <!-- tag info -->
        <div>
          <font-awesome-icon icon="tag" />
          <span class="mx-3 font-semibold">{{ tag.name }}</span>
          <span>{{ tag.note }}</span>
        </div>
        <!-- tag commit  -->
        <div class="flex items-center">
          <font-awesome-icon :icon="['fa', 'code-commit']" />
          <a href="" class="mx-2 text-blue-600">{{ tag.commit_id }}</a>
          <span>&#8226;</span>
          <a href="" class="mx-2">{{ tag.commit_note }}</a>
          <span>&#8226;</span>
          <span class="mx-2">{{ tag.commit_time }}</span>
        </div>
        <!-- end of tag commit  -->
      </div>

      <!-- link and buttons  -->
      <div class="flex items-center gap-x-2 text-gray-500">
        <button
          class="
            px-3
            py-2
            border
            rounded-md
            text-red-600
            border-gray-200
            hover:bg-gray-200
          "
        >
          <font-awesome-icon icon="times-circle" />
        </button>
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
            px-2
            py-2
            hover:bg-gray-100 hover:cursor-not-allowed
          "
        >
          <font-awesome-icon icon="pencil-alt" class="mx-2" />
        </button>
        <button
          class="
            border
            rounded-md
            px-2
            py-2
            hover:bg-gray-100 hover:cursor-not-allowed
          "
        >
          <font-awesome-icon icon="trash" class="mx-2" />
        </button>
      </div>
      <!-- end of buttons -->
    </div>
    <!-- end of tag list  -->
  </div>
</template>

<script setup>
import Crumbs from "@/components/Crumbs.vue";

const tag_list = [
  {
    id: 1,
    name: "1.6.2",
    note: "Stable version 1.6.2",
    commit_id: "f36518ea",
    commit_note: "Update update-url on index page",
    commit_time: "2015-08-02 12:01",
  },
  {
    id: 2,
    name: "1.6.1",
    note: "Critical fixes release (2)",
    commit_id: "edb40958",
    commit_note: "Change version to 1.6.1",
    commit_time: "2014-06-03 10:30",
  },
  {
    id: 3,
    name: "1.6.0",
    note: "",
    commit_id: "cc235959",
    commit_note: "* Set official release version 1.6.0",
    commit_time: "2015-03-02 12:01",
  },
];
</script>
<style></style>