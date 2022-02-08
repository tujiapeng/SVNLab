<template>
  <Crumbs />
  <div class="m-5">
    <gitGraph :eventLog="repoCommitLog" />
  </div>
</template>

<script setup>
import Crumbs from "@/components/Crumbs.vue";
import GitGraph from "@/components/Charts/GitGraph.vue";

const repoCommitLog = [
      {
        event: "commit",
        branch: "main",
        hash: "hashsha1",
        message: "init project",
        uname: "uname1 <uname1@example.email>",
      },
      {
        event: "branch",
        branch: "staging",
        from: "main",
        message: "new branch msg2",
        uname: "uname2 <u2@example.com>",
      },
      {
        event: "commit",
        branch: "staging",
        hash: "asdf2",
        message: "commit msg2",
        uname: "uname2 <u2@example.com>",
      },
      {
        event: "branch",
        branch: "dev",
        from: "main",
        message: "new branch dev",
        uname: "uname2 <u2@example.com>",
      },
      {
        event: "commit",
        branch: "dev",
        hash: "asdf3",
        message: "commit msg3",
        uname: "uname3 <u3@example.com>",
      },
      {
        event: "merge",
        branch: "staging",
        from: "dev",
        message: "merge dev",
        uname: "uname3 <u3@example.com>",
      },
      {
        event: "merge",
        branch: "main",
        from: "staging",
        message: "merge staging",
        uname: "uname3 <u3@example.com>",
      },
    ]
</script>
<style></style>