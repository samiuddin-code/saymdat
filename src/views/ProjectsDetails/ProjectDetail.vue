<template>
    <div class="project-details">
      <h1>{{ project?.title }}</h1>
      <p>{{ project?.location }}</p>
      <img :src="require(`@/assets/${project?.pic}`)" :alt="project.title" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "ProjectDetails",
    props: {
      projectId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        project: null as { id: number; title: string; location: string; pic: string } | null,
        allProjects: [
          { id: 1, title: "District One Mansion", location: "Dubai, UAE", pic: "p3.png" },
          { id: 2, title: "Art Villa", location: "Dubai, UAE", pic: "p4.png" },
          { id: 3, title: "AMN Villa", location: "Dubai, UAE", pic: "p5.jpg" }
        ]
      };
    },
    created() {
      const projectId = parseInt(this.projectId);
      this.project = this.allProjects.find(p => p.id === projectId) || null;
    }
  });
  </script>
  
  <style scoped lang="scss">
  /* Add your styles here */
  </style>
  