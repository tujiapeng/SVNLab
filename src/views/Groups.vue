<template>
  <!-- 页面 -->
  <div id="group-content-body">
    <!-- content -->
    <main class="divide-y divide-gray-400">
      <!-- page title  -->
      <div class="mt-5 ml-10">
        <h1 class="text-4xl">
          组
          <span class="text-2xl">(命名空间)</span>
        </h1>
      </div>
      <!-- filter and sort -->
      <GroupFilter />
      <!-- 组/命名空间列表 -->
      <!-- group list holder -->
      <div
        v-for="group in groupList"
        :key="group.id"
        class="mx-10 divide-y divide-gray-400"
      >
        <GroupItem
          :name="group.name"
          :web_url="group.web_url"
          :description="group.description"
          :repository_size="group.repository_size"
          :project_count="group.project_count"
          :member_count="group.member_count"
          :visibility="group.visibility"
        />
      </div>
      <!-- 页码 -->
      <Pagenation />
    </main>
  </div>
</template>

<script setup>
import GroupFilter from "@/components/groups/GroupFilter.vue";
import GroupItem from "@/components/groups/GroupItem.vue";
import Pagenation from "@/components/Pagenation.vue";

const groupList = [
  {
    id: 1,
    name: "Foobar Group",
    path: "foo-bar",
    description: "An interesting group",
    visibility: "public",
    project_creation_level: "developer",
    auto_devops_enabled: null,
    subgroup_creation_level: "owner",
    emails_disabled: null,
    mentions_disabled: null,
    default_branch_protection: 2,
    avatar_url: "http://localhost:3000/uploads/group/avatar/1/foo.jpg",
    web_url: "http://localhost:3000/groups/foo-bar",
    request_access_enabled: false,
    full_name: "Foobar Group",
    full_path: "foo-bar",
    file_template_project_id: 1,
    parent_id: null,
    created_at: "2020-01-15T12:36:29.590Z",
    member_count: 12,
    project_count: 3,
    statistics: {
      storage_size: 363,
      repository_size: 33,
      wiki_size: 100,
      job_artifacts_size: 57,
      pipeline_artifacts_size: 0,
      packages_size: 0,
      snippets_size: 50,
      uploads_size: 0,
    },
  },
  {
    id: 2,
    name: "Group2",
    path: "group2",
    description: "An interesting group",
    visibility: "public",
    project_creation_level: "developer",
    auto_devops_enabled: null,
    subgroup_creation_level: "owner",
    emails_disabled: null,
    mentions_disabled: null,
    default_branch_protection: 2,
    avatar_url: "http://localhost:3000/uploads/group/avatar/1/foo.jpg",
    web_url: "http://localhost:3000/groups/foo-bar",
    request_access_enabled: false,
    full_name: "Foobar Group",
    full_path: "foo-bar",
    file_template_project_id: 1,
    parent_id: null,
    created_at: "2020-01-15T12:36:29.590Z",
    member_count: 5,
    project_count: 1,
    statistics: {
      storage_size: 363,
      repository_size: 3,
      wiki_size: 100,
      job_artifacts_size: 57,
      pipeline_artifacts_size: 0,
      packages_size: 0,
      snippets_size: 50,
      uploads_size: 0,
    },
  },
  {
    id: 3,
    name: "group3",
    path: "group3",
    description: "An interesting group",
    visibility: "public",
    project_creation_level: "developer",
    auto_devops_enabled: null,
    subgroup_creation_level: "owner",
    emails_disabled: null,
    mentions_disabled: null,
    default_branch_protection: 2,
    avatar_url: "http://localhost:3000/uploads/group/avatar/1/foo.jpg",
    web_url: "http://localhost:3000/groups/foo-bar",
    request_access_enabled: false,
    full_name: "Foobar Group",
    full_path: "foo-bar",
    file_template_project_id: 1,
    parent_id: null,
    created_at: "2020-01-15T12:36:29.590Z",
    member_count: 12,
    project_count: 2,
    statistics: {
      storage_size: 363,
      repository_size: 33,
      wiki_size: 100,
      job_artifacts_size: 57,
      pipeline_artifacts_size: 0,
      packages_size: 0,
      snippets_size: 50,
      uploads_size: 0,
    },
  },
];
</script>

<style></style>