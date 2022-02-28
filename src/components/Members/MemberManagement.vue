<template>
<div ref="memberMgmt" style="display:''" class="mt-5">
  <!-- filter & sort -->
  <div class="bg-gray-50 flex items-center px-5 justify-between">
    <div class="my-5 text-gray-600 text-lg grow flex">
      <EZButton :shape="'left bg-white'">
        <font-awesome-icon icon="clock-rotate-left" />
        <font-awesome-icon icon="chevron-down" class="ml-2" />
      </EZButton>
      <input type="text" class="py-2 px-3 grow border text-gray-400 focus:outline-none focus:border-sky-500" placeholder="Filter members">
      <EZButton :shape="'right bg-white'">
        <font-awesome-icon icon="magnifying-glass" />
      </EZButton>
    </div>
    <div class="ml-5">
      <EZButton :shape="'left bg-white'">
        <span>Account</span>
        <font-awesome-icon icon="chevron-down" class="ml-2" />
      </EZButton>
      <EZButton :shape="'right bg-white'">
        <font-awesome-icon icon="arrow-down-short-wide" />
      </EZButton>
    </div>
  </div>
  <!-- member items  -->
  <div class="text-left pb-5">
    <table class="w-full">
      <thead>
        <tr class="text-lg text-gray-500 py-3 h-16">
          <th>Account</th>
          <th>Source</th>
          <th>Access granted</th>
          <th>Access expires</th>
          <th>Max role</th>
          <th>Expiration</th>
        </tr>
      </thead>
      <tbody>
        <!-- member  -->
        <tr class="border-t h-20 text-gray-600">
          <td>
            <div class="flex">
              <img src="@/assets/u1.png" alt="" class="w-12 h-12 mr-4 rounded-full object-cover object-top">
              <div>
                <p class="font-semibold">Administrator <span class="text-sm font-normal px-2 rounded-lg border bg-green-100 text-green-800">It's you</span> </p>
                <p>@root</p>
              </div>
            </div>
          </td>
          <td>Direct member</td>
          <td>
            <div class="">
              <p>7 months ago by</p>
              <p class="text-blue-500">repo-maintainer</p>
            </div>
          </td>
          <td>No expiration set</td>
          <td>
            <EZButton>
              <span>Maintainer</span>
              <font-awesome-icon icon="chevron-down" class="ml-2" />
            </EZButton>
          </td>
          <td>
            <div class="flex items-center justify-between text-gray-400 border rounded-md max-w-fit focus:border-blue-400 hover:cursor-not-allowed">
              <input type="text" placeholder="Expiration date" value="" class="py-2 px-3 focus:outline-none focus:border-none hover:cursor-not-allowed">
              <font-awesome-icon icon="calendar" class="mx-2" />
            </div>
          </td>
          <td>
            <button type="button" name="button" class="border rounded-md py-2 bg-red-600 hover:cursor-not-allowed">
              <font-awesome-icon icon="trash" class="mx-3 text-white font-semibold" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Pagenation class="float-right" />
</div>
</template>

<script setup>
import EZButton from "@/components/EZButton.vue"
import Pagenation from "@/components/Pagenation.vue"

import { ref, watch, toRefs } from "vue";

const memberMgmt = ref();
const props = defineProps({
  checkDisplay: String,
});

const { checkDisplay } = toRefs(props);

watch(checkDisplay, (newv, oldv) => {
    if (newv == "Members") {
      memberMgmt.value.style.display = ""
    } else {
      memberMgmt.value.style.display = "none"
    };
    //console.log('new:',newv, 'old:', oldv);
});
</script>

<style></style>
