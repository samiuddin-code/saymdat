<template>
  <article class="experiences-article" :class="[mirror ? 'mirror' : '']">
    <div class="image">
      <img :src="image" alt="image" loading="lazy" />
    </div>
    <div class="article-txt2-btn">
      <h1 class="title" v-html="title"></h1>
      <p class="paragraph" v-html="paragraph"></p>
      <div class="explore-btn">
        <button class="btn btn-border-1" @click="navigateToOurWorlds">Explore</button>
      </div>
    </div>
  </article>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "ExperiencesArticle",
  props: {
    image: String,
    title: String,
    paragraph: String,
    mirror: Boolean,
  },
  setup() {
    const router = useRouter();

    const navigateToOurWorlds = () => {
      router.push({ name: "Our-Worlds" }); // Ensure the name matches the route definition in the router
    };

    return {
      navigateToOurWorlds,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "./ExperiencesArticle";
</style>
