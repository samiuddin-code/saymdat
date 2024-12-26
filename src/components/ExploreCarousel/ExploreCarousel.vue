<template>
  <div class="explore-container">
    <div class="explore-top">
      <div class="explore-header">
        <span class="header-first-half"> {{ carouselH1 }} </span>
        <span class="header-second-half"> {{ carouselH2 }} </span>
      </div>
      <div class="button-pair">
        <button class="left-button" @click="goLeft">
          <i class="fas fa-arrow-left"></i>
        </button>
        <button class="right-button" @click="goRight">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    <div class="slider">
      <div
  class="slider-track"
  v-for="item in carousel"
  :key="item.title"
  :class="{ active: item === carousel[currentIndex] }"
>
        <div class="slide">
          <div class="image-holder" @click="navigateToDetails(item.title)">
            <img
              :src="require(`@/assets/${worldPath}/${item.pic}`)"
              loading="lazy"
              alt="image"
            />
          </div>
          <div class="img-description" @click="navigateToDetails(item.title)">
            <span class="img-title" v-text="item.title"></span>
            <span class="img-location" v-text="item.location"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script type="module" src="./ExploreCarousel.ts"></script>

<style scoped lang="scss">
@use"./ExploreCarousel";
</style>