/* eslint-disable vue/multi-word-component-names */
<template>
  <div id="main">
    <!-- 页面 -->
    <div id="content-body">
      <!-- content -->
      <main class="divide-y divide-gray-400">
        <!-- page title  -->
        <div class="mt-5 ml-10">
          <h1 class="text-4xl">项目</h1>
        </div>
        <!-- 项目筛选器 -->
        <ProjectFilter />
        <!-- 项目列表 -->
        <!-- project list holder -->
        <div
          v-for="project in projectList"
          :key="project.id"
          class="mt-5 mx-10 divide-y divide-gray-400"
        >
          <ProjectItem
            :projectName="project.name"
            :namesapce="project.namespace"
            :namespaceUrl="project._links.namesapce"
            :web_url="project.web_url"
            :role="project.owner.name"
            :description="project.description"
            :star_count="project.star_count"
            :member_count="project.member_count"
            :webhooks_acount="project.webhooks_acount"
            :open_issues_count="project.open_issues_count"
            :repository_size="project.statistics.repository_size"
            :last_activity_on="project.last_activity_on"
          />
        </div>
        <!-- 页码 -->
        <Pagenation />
      </main>
    </div>
  </div>
</template>

<script setup>
import ProjectFilter from "./ProjectFilter.vue";
import ProjectItem from "./ProjectItem.vue";
import Pagenation from "./Pagenation.vue";

const projectList = [
  {
    id: 4,
    description: "some description some description some description",
    http_url_to_repo: "http://example.com/diaspora/diaspora-client.git",
    web_url: "http://10.114.10.150/production/svnadmin/",
    topics: ["example", "doc"],
    name: "project01 name",
    path: "project01-name",
    namespace: "project-namespace",
    name_with_namespace: "project-namespace/project01-name",
    avatar_url:
      "http://example.com/uploads/project/avatar/4/uploads/avatar.png",
    created_at: "2013-09-30T13:46:02Z",
    last_activity_on: "2013-09-30T13:46:02Z",
    star_count: 0,
    member_count: 5,
    issues_enabled: true,
    open_issues_count: 1,
    webhooks_enabled: false,
    webhooks_acount: 0,
    owner: {
      id: 4,
      name: "Brightbox",
      created_at: "2013-09-30T13:46:02Z",
    },
    _links: {
      self: "http://example.com/api/v4/projects",
      namespace: "http://example.com/api/v4/projects/1/issues",
      issues: "http://example.com/api/v4/projects/1/issues",
      webhooks: "http://example.com/api/v4/projects/1/webhooks",
      labels: "http://example.com/api/v4/projects/1/labels",
      members: "http://example.com/api/v4/projects/1/members",
    },
    statistics: {
      commit_count: 12,
      storage_size: 2066080,
      repository_size: 2066080,
      wiki_size: 0,
    },
  },
  {
    id: 5,
    description: "some description",
    http_url_to_repo: "http://example.com/diaspora/diaspora-client.git",
    web_url: "http://10.114.10.150/production/svnadmin/",
    topics: ["example", "doc"],
    name: "project02 name",
    path: "project02-name",
    namespace: "project-namespace",
    name_with_namespace: "project-namespace/project01-name",
    avatar_url:
      "http://example.com/uploads/project/avatar/4/uploads/avatar.png",
    created_at: "2013-09-30T13:46:02Z",
    last_activity_on: "2013-09-30T13:46:02Z",
    star_count: 0,
    issues_enabled: true,
    open_issues_count: 1,
    webhooks_enabled: false,
    webhooks_acount: 0,
    owner: {
      id: 4,
      name: "Brightbox",
      created_at: "2013-09-30T13:46:02Z",
    },
    _links: {
      self: "http://example.com/api/v4/projects",
      issues: "http://example.com/api/v4/projects/1/issues",
      webhooks: "http://example.com/api/v4/projects/1/webhooks",
      labels: "http://example.com/api/v4/projects/1/labels",
      members: "http://example.com/api/v4/projects/1/members",
    },
    statistics: {
      commit_count: 12,
      storage_size: 2066080,
      repository_size: 2066080,
      wiki_size: 0,
    },
  },
];
</script>

<style></style>