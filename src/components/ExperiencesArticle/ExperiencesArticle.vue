<template>
  <article class="experiences-article" :class="[mirror ? 'mirror' : '']">
    <div class="image">
      <img :src="image" alt="image" loading="lazy" />
    </div>
    <div class="article-txt2-btn">
        <h1 class="title" v-html="title"></h1>
        <p class="paragraph" v-html="paragraph"></p>
        <div class="explore-btn">
          <button class="btn btn-border-1">Explore</button>
      </div>
    </div>
  </article>
</template>

<script type="module" src="./ExperiencesArticle.ts"></script>

<style lang="scss" scoped>
@use "./ExperiencesArticle";
</style>