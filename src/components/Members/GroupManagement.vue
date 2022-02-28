<template>
  <div ref="groupMgmt" style="display: none" class="mt-5">
  <h1>GroupManagement</h1>
  <div class="bg-blue-300 h-20 w-20">
    <p>aaa</p>
  </div>
  </div>
</template>

<script setup>
import { ref, watch, toRefs } from "vue";

const groupMgmt = ref();
const props = defineProps({
  checkDisplay: String,
});

const { checkDisplay } = toRefs(props);

watch(checkDisplay, (newv, oldv) => {
    if (newv == "Groups") {
      groupMgmt.value.style.display = ""
    } else {
      groupMgmt.value.style.display = "none"
    };
});
</script>

<style></style>
