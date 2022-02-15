<template>
  <div id="repo-content-body" class="w-full mx-2 px-4">
    <Crumbs />

    <!-- release items  -->
    <div
      v-for="release in release_list"
      :key="release.id"
      class="my-10 pl-3 flex justify-between"
    >
      <div class="border rounded-md w-4/5">
        <ul class="pl-5 pr-3">
          <!-- release title  -->
          <li class="py-3">
            <div class="py-5">
              <a href="" class="text-3xl font-semibold hover:text-blue-700">{{
                release.release_title
              }}</a>
              <a
                v-if="release.latest"
                href=""
                class="
                  border
                  rounded-2xl
                  mx-3
                  px-3
                  py-1
                  border-green-600
                  text-green-600
                  bg-green-50
                "
                >Latest</a
              >
            </div>
            <div class="text-3xl">{{ release.release_note }}</div>
          </li>

          <!-- release change log -->
          <li class="border-t pr-2 py-3">
            <div>
              <a href="" class="text-2xl">ChangeLog:</a>
              <p href="" class="pt-3 pl-3">
                <span class="mx-2">&#8226;</span> Fixes
                <span class="font-semibold text-blue-700">#862</span> ,
                <span class="font-semibold text-blue-700"> #547</span> ,
                <span class="font-semibold text-blue-700">#864</span> .
              </p>
              <p href="" class="ml-3">
                <span class="mx-2">&#8226;</span> Updates to draw.io core
                16.4.0. All changes from 16.1.0 to 16.4.0, inclusive, are added
                in this build.
              </p>
            </div>
          </li>

          <!-- release Assets  -->
          <li class="border-t px-5 py-5">
            <button class="flex items-center">
              <font-awesome-icon icon="caret-down" />
              <a href="" class="text-3xl mx-2">Assets</a>
              <span
                class="
                  text-sm
                  ml-1
                  py-1
                  px-2
                  bg-blue-100
                  inline-block
                  rounded-full
                "
                >{{ release.release_assets_counts }}</span
              >
            </button>
            <!-- release artifacts -->
            <ul class="my-3 border rounded-md divide-y">
              <li
                v-for="artifact in release.release_assets_list"
                :key="artifact.id"
                class="h-10 flex items-center"
              >
                <div class="px-3">
                  <font-awesome-icon icon="cube" />
                  <a href="" class="text-blue-600 pl-3">{{
                    artifact.file_name
                  }}</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- end of release artifacts -->
        </ul>
      </div>

      <!-- release time tag -->
      <div class="w-1/5 px-5 py-5">
        <div class="text-2xl py-3">{{ release.release_time }}</div>

        <div class="text-gray-600 py-1">
          <a href="">
            <font-awesome-icon icon="user-check" />
            <span class="mx-3">{{ release.release_author }}</span>
          </a>
        </div>

        <div class="text-gray-600 py-1">
          <a href="">
            <font-awesome-icon icon="tag" />
            <span class="mx-3">{{ release.release_tag }}</span>
          </a>
        </div>

        <div class="text-gray-600 py-1">
          <a href="">
            <font-awesome-icon :icon="['fa', 'code-commit']" class="min-w-min" />
            <span class="mx-3">{{ release.release_commit_id }}</span>
          </a>
        </div>
      </div>
      <!-- end of time tag -->
      <!-- end of release item  -->
    </div>
    <!-- end of release items  -->
  </div>
</template>

<script setup>
import Crumbs from "../../components/Crumbs.vue";

const release_list = [
  {
    id: 1,
    latest: "true",
    release_author: "David Johnes",
    release_tag: "v16.4.0",
    release_commit_id: "d27e77e",
    release_title: "V16.4.0 LTS",
    release_note: "重大修复,强烈建议升级",
    release_changelog: "xxx (markdown)",
    release_time: "2022-01-24 16:06:23",
    release_assets_counts: 4,
    release_assets_list: [
      {
        id: 1,
        file_name: "draw.io-16.4.0-windows-installer.exe",
        download_url: "http://abc.abc.com/xxx.exe",
      },
      {
        id: 2,
        file_name: "draw.io-16.4.0-windows-installer.exe",
        download_url: "http://abc.abc.com/xxx.exe",
      },
      {
        id: 3,
        file_name: "draw.io-16.4.0-windows-installer.exe",
        download_url: "http://abc.abc.com/xxx.exe",
      },
      {
        id: 4,
        file_name: "draw.io-16.4.0-windows-installer.exe",
        download_url: "http://abc.abc.com/xxx.exe",
      },
    ],
  },
  {
    id: 2,
    release_author: "Will Smith",
    release_tag: "v16.3.0",
    release_commit_id: "2233a7e",
    release_title: "V1.0",
    release_note: "First Release",
    release_changelog: "xxx (markdown)",
    release_time: "2021-10-12 17:03:11",
    release_assets_counts: 2,
    release_assets_list: [
      {
        id: 1,
        file_name: "draw.io-16.3.0-windows-installer.exe",
        download_url: "http://abc.abc.com/xxx.exe",
      },
      {
        id: 2,
        file_name: "draw.io-16.3.0-windows-installer.exe",
        download_url: "http://abc.abc.com/xxx.exe",
      },
    ],
  },
];
</script>
<style></style>