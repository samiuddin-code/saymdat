<template>
    <div class="carousel-container">
      <div class="carousel" :style="carouselStyle">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-item"
          :class="{'active': currentSlide === index}"
        >
          <img :src="image.src" :alt="image.alt" class="carousel-image" />
        </div>
      </div>
  
      <!-- Pagination Dots -->
      <div class="pagination">
        <span
          v-for="(image, index) in images"
          :key="index"
          :class="['dot', { active: currentSlide === index }]"
          @click="goToSlide(index)"
        ></span>
      </div>
  
      <!-- Carousel Buttons -->
      <div class="carousel-buttons">
        <button @click="prevSlide" class="prev-button">
          <i class="fas fa-arrow-left"></i>
        </button>
        <button @click="nextSlide" class="next-button">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    
  </template>
  
  <script>
  export default {
    name: "CarouselComponent",
    data() {
      return {
        currentSlide: 0,
        images: [
        {
            src: require("@/assets/AboutDlc/p1.png"),
            alt: "People sitting around a table",
          },
          {
            src: require("@/assets/AboutDlc/p2.png"),
            alt: "Another view of the gathering",
          },
          {
            src: require("@/assets/AboutDlc/p3.png"),
            alt: "The cute dog resting on the floor",
          },
        ],
      };
    },
    computed: {
      carouselStyle() {
        return {
          transform: `translateX(-${this.currentSlide * 100}%)`,
          transition: 'transform 0.3s ease-in-out',
        };
      },
    },
    methods: {
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.images.length;
      },
      prevSlide() {
        this.currentSlide =
          (this.currentSlide - 1 + this.images.length) % this.images.length;
      },
      goToSlide(index) {
        this.currentSlide = index;
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    position: relative;
    width: 70%;
    margin: auto;
    padding: 20px 0; /* Added padding top and bottom */
    overflow: hidden;
  }
  
  .carousel {
    display: flex;
  }
  
  .carousel-item {
    position: relative;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .dot {
    height: 12px;
    width: 12px;
    margin: 0 5px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.3s ease;
    cursor: pointer;
  }
  
  .dot.active {
    background-color: #717171;
  }
  
  .carousel-buttons {
    /* position: absolute; */
    /* top: 50%; */
right: 38rem;
    position: relative;
    transform: translateY(-120%);
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    z-index: 1;
    gap: 20px;
    /* padding: 0 10px; */
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  
  .prev-button,
  .next-button {
    /* background: rgba(0, 0, 0, 0.5);
    color: white; */
    border: #ffffff;
    cursor: pointer;
    /* padding: 15px; */
    font-size: 20px;
    /* border-radius: 80%; */
    /* margin: 5px 0; */
  }
  
  .prev-button:hover,
  .next-button:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px; /* Move dots below image */
  }
  </style>
  