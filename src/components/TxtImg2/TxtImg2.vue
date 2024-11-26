<template>
  <div class="container" :style='{"background-image": `url(${background})`}'>
    <section id="TxtImg2" :class="[mirror ? 'mirror' : '']">
      <div class="top-left">
        <h1 class="bold-header">
          <span
            class="header-first-half"
            v-bind:class="{ 'fade-in': fadeInHeader1 }"
            ref="header1"
          >
            {{ header1 }}
          </span>
          <span
            class="header-second-half"
            v-bind:class="{ 'fade-in': fadeInHeader2 }"
            ref="header2"
          >
            {{ header2 }}
          </span>
        </h1>
        <p
          class="light-text"
          v-bind:class="{ 'fade-in': fadeInParagraph }"
          ref="paragraph"
        >
          {{ paragraph }}
        </p>
      </div>
      <div class="right">
        <img :src="imgRight" alt="Ocean View" loading="lazy" />
      </div>
      <div class="bottom-left">
        <img :src="imgLeft" alt="Leisure" loading="lazy" />
      </div>
    </section>
  </div>
</template>

<script type="module" src="./TxtImg2.ts"></script>

<style scoped lang="scss">
@use"./TxtImg2";
</style>