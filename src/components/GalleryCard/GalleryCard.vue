<template>
  <div class="gallery-card">
    <img class="gallery-img" :src="pic" :alt="text" loading="lazy"/>
    <div class="gallery-text">{{ text }}</div>
  </div>
</template>

<script type="module" src="./GalleryCard.ts"></script>

<style scoped lang="scss">
 @use "./GalleryCard"
</style>