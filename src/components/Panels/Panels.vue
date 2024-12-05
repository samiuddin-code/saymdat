<template>
  <div class="panels">
    <a @click.prevent="navigateTo('concept')">
      <div class="panels-content panels-image1">
        <h4>Concept</h4>
        <button>&#8594;</button>
      </div>
    </a>
    <a @click.prevent="navigateTo('design')">
      <div class="panels-content panels-image2">
        <h4>Design</h4>
        <button>&#8594;</button>
      </div>
    </a>
    <a @click.prevent="navigateTo('build')">
      <div class="panels-content panels-image3">
        <h4>Build</h4>
        <button>&#8594;</button>
      </div>
    </a>
  </div>
</template>



<script type="module" src="./Panels.ts"></script>

<style lang="scss" scoped>
@import "./Panels";
</style>