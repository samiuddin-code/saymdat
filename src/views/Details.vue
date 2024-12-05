<template>
  <div class="title-container">
    <!-- Background Video -->
    <video class="background-video" autoplay muted loop>
      <source src="../assets/b.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Title Text -->
    <p class="title-text">{{ title }}</p>

    <!-- Scroll Down Button in Bottom-Right Corner -->
    <button class="round-button" @click="scrollToNextSection">
      <span class="material-icons arrow-down">arrow_downward</span>
    </button>
 
  </div>
  <CarouselComponent />
  <BottomSection picture="AboutDlc.jpg"/>
</template>

<script type="module">
import { defineComponent } from 'vue';
import BottomSection from "@/components/DownSection/BottomSection.vue";
import CarouselComponent from '@/components/CarouselComponent.vue';
export default defineComponent({
  name: 'TitleComponent',
  components: {
    BottomSection,
    CarouselComponent
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    scrollToNextSection() {
      window.scrollBy({
        top: window.innerHeight, // Scroll one full viewport height
        left: 0,
        behavior: 'smooth' // Smooth scroll animation
      });
    }
  }
});
</script>

<style scoped lang="scss">
/* Container for the title */
.title-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  padding: 2rem;
  color: white;
}

/* Background Video */
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Place video behind content */
}

/* Title Text */
.title-text {
  font-family: 'Nunito', sans-serif;
  font-weight: 100;
  font-size: clamp(1.5rem, 4vw, 4.5rem);
  line-height: clamp(2rem, 5vw, 4rem);
  color: hsl(0, 0%, 100%);
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  margin-top: 1rem;
  transition: transform 0.3s ease;
}

/* Hover effect for title */
.title-text:hover {
  transform: scale(1.05);
  text-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
}

/* Scroll Down Button */
.round-button {
  position: absolute;
  bottom: 45px; /* Distance from the bottom */
  right: 20px;  /* Distance from the right */
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 10;
}

/* Button hover effect */
.round-button:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

/* Scroll Down Icon */
.arrow-down {
  font-size: 2rem;
}

/* Responsive Button Adjustments */
@media screen and (max-width: 1024px) {
  .round-button {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 500px) {
  .round-button {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.25rem;
    bottom: 15px;
    right: 15px;
  }
}
</style>
