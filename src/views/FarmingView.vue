<template>
    <div class="farming-view">
      <FoodAndFarming />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import FoodAndFarming from "@/components/DesignLayout/FoodAndFarming.vue";
  
  export default defineComponent({
    name: "FarmingView",
    components: {
      FoodAndFarming,
    },
  });
  </script>
  
  <style scoped>
  .farming-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  </style>
  