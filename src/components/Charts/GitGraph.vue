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
    default: "main"
  },
  commitUrl: {
    type: String,
    default: "",
  },
  graphLog: {
    type: Array,
    default: [
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
    ],
  }
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
  // const mygraph = createGitgraph(gitgraph.value, options);

  // // graph branch
  // const master = mygraph.branch("master");
  // // commit
  // master.commit("init the project");
  // master.commit("Add README").commit("Add tests").commit("Implement feature");
  // // tag
  // master.tag("v1.0");

  // // new branch
  // const newFeature = mygraph.branch("new-feature");
  // newFeature.commit("Implement an awesome feature");
  // master.commit("Hotfix a bug");
  // newFeature.commit("Fix tests");

  // // Merge `newFeature` into `master`
  // master.merge(newFeature, "Release new version");

  // // commit demo
  // const development = mygraph.branch("development");
  // development.commit({
  //   subject: "Add feature",
  //   dotText: "👌",
  //   tag: "v1.2",
  //   hash: "asdfasdfasdf",
  //   author: "william <williammei@126.com>",
  //   //style: {
  //   // Specific style for this commit
  //   //},
  // });
  // development.commit({
  //   subject: "Add href tests",
  //   dotText: "💪",
  //   onMessageClick(commit) {
  //     //alert(`Commit ${commit.hash} selected`);
  //     //window.location.reload('localhost:3000/home/');
  //     location.href = `/${commit.hash}`;
  //   },
  // });
  // development
  //   .commit({
  //     subject: "Commit with a body",
  //     body: "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
  //   })
  //   .commit({
  //     body: "This is to explain the rationale behind this commit.",
  //   });

  //   master.merge("development")
  
  
  // init chart
  const mygraph = createGitgraph(gitgraph.value, options);

  var bdict = {};
  bdict[GraphProps.defaultBranch] = mygraph.branch(GraphProps.defaultBranch)

  // GraphProps.graphBranchs.forEach(function (i) {
  //   if(i === "main"){
  //     bdict[i] = mygraph.branch(i);
  //   } else {
  //     bdict[i] = mygraph.branch({
  //       name: i,
  //       from: bdict["main"],
  //     });
  //   }
  // });
  
  // console.log(bdict);
  // for (var key in bdict) {
  //   console.log(key + " : " + bdict[key]);
  // }
  // graph of log
  for (let cmt of GraphProps.graphLog) {
    // console.log(cmt.event, cmt.branch);
    // if (cmt.event === "commit") {
    //   // console.log(cmt.event);

    //   // log event replay
    //   // console.log(bdict[cmt.branch]);
    //   bdict[cmt.branch].commit(cmt.message)
    // }

    if(cmt.event === "merge"){
      // bdict["main"].merge("dev", "add feature");
      // console.log("merge")
      bdict[cmt.branch].merge(cmt.from, cmt.message);
      //bdict[cmt.branch].merge(bdict[cmt.from], cmt.message);
      continue
    }

    switch (cmt.event) {
      case "commit":
        if(!bdict[cmt.branch]){
          bdict[cmt.branch] = mygraph.branch(cmt.branch);
        }
        bdict[cmt.branch].commit({
          subject: cmt.message,
          hash: cmt.hash,
          author: cmt.uname,
        });
      case "branch":
        bdict[cmt.branch] = mygraph.branch({
            name: cmt.branch,
            from: bdict[cmt.from]
          });
      //case "merge":
      //   bdict[cmt.branch].merge(cmt.from, cmt.message);
      default:
        continue;
    }
  }

}
</script>

<style></style>