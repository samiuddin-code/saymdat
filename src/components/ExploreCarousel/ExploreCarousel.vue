<template>
  <div class="explore-container">
    <div class="explore-top">
      <div class="explore-header">
        <span class="header-first-half"> {{ carouselH1 }} </span>
        <span class="header-second-half"> {{ carouselH2 }} </span>
      </div>
      <div class="button-pair">
  <button class="left-button">
    <i class="fas fa-arrow-left"></i>
  </button>
  <button class="right-button">
    <i class="fas fa-arrow-right"></i>
  </button>
</div>

    </div>
    <div class="slider">
        <div class="slider-track" v-for="items in carousel" :key="items.title">
            <div class="slide">
                <div class="image-holder">
                    <img :src="require(`@/assets/${worldPath}/${items.pic}`)"loading="lazy">
                </div>
                <div class="img-description">
                    <span class = "img-title" v-text="items.title"></span>
                    <span class = "img-location" v-text="items.location"></span> 
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