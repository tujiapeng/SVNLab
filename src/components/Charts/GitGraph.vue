<template>
  <div ref="gitgraph" class="w-full bg-blue-50"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { createGitgraph, templateExtend, TemplateName } from "@gitgraph/js";

// 组件参数定义
const GraphProps = defineProps({
  defaultBranch: {
    type: String,
    default: "main",
  },
  commitUrl: {
    type: String,
    default: "/commit",
  },
  eventLog: {
    type: Array,
    default: [
      {
        event: "commit",
        branch: "main",
        hash: "hashxxx",
        message: "init project",
        uname: "uname1 <uname1@example.email>",
      }
    ],
  },
});

const gitgraph = ref(); // create dom ref

onMounted(() => {
  init();
});
function init() {
  const options = {
    template: "metro",
    //orientation: "vertical-reverse"

    // template: templateExtend(
    //   TemplateName.Metro, {
    //     commit: {
    //       message: {
    //         displayAuthor: true,
    //         displayHash: true,
    //       }
    //     }
    //   }
    // )
  };

  // init chart
  const mygraph = createGitgraph(gitgraph.value, options);

  var bdict = {};
  bdict[GraphProps.defaultBranch] = mygraph.branch(GraphProps.defaultBranch);

  // log event replay
  for (let cmt of GraphProps.eventLog) {
    if (cmt.event === "merge") {
      bdict[cmt.branch].merge(cmt.from, cmt.message);
      continue;
    }
    if (cmt.event === "tag") {
      bdict[cmt.branch].tag(cmt.tag);
      continue;
    }

    switch (cmt.event) {
      case "commit":
        if (!bdict[cmt.branch]) {
          bdict[cmt.branch] = mygraph.branch(cmt.branch);
        }
        bdict[cmt.branch].commit({
          subject: cmt.message,
          hash: cmt.hash,
          author: cmt.uname,
          onMessageClick(commit){
            location.href = `${GraphProps.commitUrl}/${commit.hash}`;
          }
        });
      case "branch":
        bdict[cmt.branch] = mygraph.branch({
          name: cmt.branch,
          from: bdict[cmt.from],
        });
      //case "merge":
      //   bdict[cmt.branch].merge(cmt.from, cmt.message);
      // case "tag":
      //   bdict[cmt.branch] = bdict[cmt.branch].tag(cmt.tag)
      default:
        continue;
    }
  }
}
</script>

<style></style>