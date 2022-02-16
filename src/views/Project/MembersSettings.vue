<template>
<div>
  <Crumbs />

  <div class="my-3">
    <p class="text-2xl">Project Members</p>
    <p class="my-2">You can invite a new member to <span class="font-semibold">iF.SVNAdmin</span> or invite another group.</p>
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
        <input type="text" name="" class="w-full my-3 px-3 py-3 text-gray-400 border rounded-md" value="Search for members to update or invite">
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

  <!-- members manage -->
  <div class="mt-5">
    <div class="font-semibold text-lg px-2 py-3 border-b-4 border-gray-800 w-fit hover:border-gray-300">
      Members <span class="text-sm bg-gray-200 w-5 inline-block rounded-lg text-center">2</span>
    </div>
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
              <input type="text" placeholder="Expiration date" value=""  class="py-2 px-3 focus:outline-none focus:border-none hover:cursor-not-allowed">
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

</div>
</template>

<script setup>
import Crumbs from "@/components/Crumbs.vue"
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
</script>
<style></style>
