<template>
<div>
  <Crumbs />
  <!-- nav bar -->
  <div class="mt-5">
    <div class="flex gap-x-1">
      <div class="font-semibold text-lg px-2 py-3 border-b-4 border-gray-800 w-fit hover:border-gray-300 hover:cursor-pointer" @click="switchPageComponent('Members')">
        Members <span class="text-sm bg-gray-200 w-5 inline-block rounded-lg text-center">2</span>
      </div>
      <div class="font-semibold text-lg px-2 py-3 border-b-4 border-gray-400 w-fit hover:border-gray-300 hover:cursor-pointer" @click="switchPageComponent('Groups')">
        Groups <span class="text-sm bg-gray-200 w-5 inline-block rounded-lg text-center">1</span>
      </div>
      <div class="font-semibold text-lg px-2 py-3 border-b-4 border-gray-400 w-fit hover:border-gray-300 hover:cursor-pointer" @click="switchPageComponent('Invitation')">
        Invitation
      </div>
    </div>
  </div>

  <div>
    <MemberManagement :checkDisplay="isShowing" />
    <GroupManagement :checkDisplay="isShowing" />
    <MemberInvitation :checkDisplay="isShowing" />
  </div>

</div>
</template>

<script setup>
import { ref } from "vue";
import Crumbs from "@/components/Crumbs.vue"
import MemberManagement from "@/components/members/MemberManagement.vue"
import GroupManagement from "@/components/Members/GroupManagement.vue"
import MemberInvitation from "@/components/members/MemberInvitation.vue"

let isShowing = ref("Members")

const switchPageComponent = (id) => {
  //console.log('parent ref:', isShowing.value)
  isShowing.value = id
}
</script>
<style></style>
