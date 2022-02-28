<template>
<div ref="memberInvitation" style="display: none" class=" mt-8">
  <div>
    <p class="my-3">You can invite a new member to <span class="font-semibold">iF.SVNAdmin</span> or invite another group.</p>
  </div>
  <!-- invitation manage -->
  <div>
    <ul class="flex text-center justify-center h-12">
      <li class="w-1/2 py-3 bg-gray-50 border hover:border-b-4 hover:border-b-gray-200 hover:bg-white cursor-pointer" @click="showInvitation('member')">
        Invite member
      </li>
      <li class="w-1/2 py-3 bg-gray-50 border hover:border-b-4 hover:border-b-gray-200 hover:bg-white cursor-pointer" @click="showInvitation('group')">
        Invite group
      </li>
    </ul>
    <div id="memberInvite" class="border px-5 py-3 text-gray-700">
      <div class="my-3">
        <p class="font-semibold">GitLab member or Email address</p>
        <input type="text" name="" class="w-full my-3 px-3 py-3 text-gray-400 border rounded-md" placeholder="Search for members to update or invite">
      </div>
      <div class="my-3">
        <p class="font-semibold">Choose a role permission</p>
        <select class="w-full my-3 px-3 py-3 text-gray-800 border rounded-md" name="">
          <option value="">Gust</option>
          <option value="">Reporter</option>
          <option value="">Developer</option>
          <option value="">Maintainer</option>
        </select>
        <p><span class="text-blue-600">Read more</span> about role permissions</p>
      </div>
      <div class="my-3">
        <p class="font-semibold">Access expiration date</p>
        <input type="text" name="" class="w-full my-3 px-3 py-3 text-gray-400 border rounded-md" value="Expiration date">
      </div>
      <div class="flex gap-x-3 mb-3">
        <EZButton>
          Invite
        </EZButton>
        <EZButton>
          Import
        </EZButton>
      </div>
    </div>
    <div id="groupInvite" style="display: none" class="border px-5 py-3 text-gray-700">
      <div class="my-3">
        <p class="font-semibold">Select a group to invite</p>
        <input type="text" name="" class="w-full my-3 px-3 py-3 text-gray-400 border rounded-md" value="Search for a group">
      </div>
      <div class="my-3">
        <p class="font-semibold">Max expiration date</p>
        <select class="w-full my-3 px-3 py-3 text-gray-800 border rounded-md" name="">
          <option value="">Gust</option>
          <option value="">Reporter</option>
          <option value="">Developer</option>
          <option value="">Maintainer</option>
        </select>
        <p><span class="text-blue-600">Read more</span> about role permissions</p>
      </div>
      <div class="my-3">
        <p class="font-semibold">Access expiration date</p>
        <input type="text" name="" class="w-full my-3 px-3 py-3 text-gray-400 border rounded-md" value="Expiration date">
      </div>
      <div class="flex gap-x-3 mb-3">
        <EZButton>
          Invite
        </EZButton>
      </div>
    </div>
  </div>

</div>
</template>

<script setup>
import EZButton from "@/components/EZButton.vue"

const showInvitation = (id) => {
  if (id === 'member') {
    parent.document.getElementById("memberInvite").style.display = "";
    parent.document.getElementById("groupInvite").style.display = "none";
  } else {
    parent.document.getElementById("groupInvite").style.display = "";
    parent.document.getElementById("memberInvite").style.display = "none";
  }
}

import {
  ref,
  watch,
  toRefs
} from "vue";

const memberInvitation = ref();
const props = defineProps({
  checkDisplay: String,
});

const {
  checkDisplay
} = toRefs(props);

watch(checkDisplay, (newv, oldv) => {
  if (newv == "Invitation") {
    memberInvitation.value.style.display = ""
  } else {
    memberInvitation.value.style.display = "none"
  };
});
</script>

<style></style>
