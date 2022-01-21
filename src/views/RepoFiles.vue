/* eslint-disable vue/multi-word-component-names */
<template>
  <div id="repo-content-body" class="w-full mx-2 px-4">
    <!-- content -->
    <Crumbs />
    <hr class="border-1 my-4 border-gray-300">
    <!-- 浏览功能按钮 -->
    <RepoNavBlock />

    <!-- 最新提交 post -->
    <LatestCommit />

    <!-- 文件清单 -->
    <FileItems :content_list="file_list" />

    <!-- README -->
    <MarkdownViews />
  </div>
</template>

<script setup>
import Crumbs from "@/components/Crumbs.vue";
import RepoNavBlock from "@/components/Repository/RepoNavBlock.vue";
import LatestCommit from "@/components/Repository/LatestCommit.vue";
import FileItems from "@/components/Repository/FileItems.vue";
import MarkdownViews from "@/components/MarkdownViews.vue";

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