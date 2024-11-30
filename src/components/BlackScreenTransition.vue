<template>
    <transition name="black-screen-transition">
      <div v-if="isVisible" class="black-screen"></div>
    </transition>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'BlackScreenTransition',
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
 .black-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1); /* Black color with 70% opacity */
  z-index: 9999;
  transition: transform 0.5s ease-in-out;
}
  
  .black-screen-transition-enter-active,
  .black-screen-transition-leave-active {
    transition: transform 1s ease-in-out; /* Adjust the transition duration as needed */
  }
  
  .black-screen-transition-enter {
    transform: translateY(0);
  }
  
  .black-screen-transition-leave-to {
    transform: translateY(-100%);
  }
  </style>
  