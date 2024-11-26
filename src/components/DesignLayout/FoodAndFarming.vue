<template>
    <div class="carousel-container">
      <div class="content-section">
        <h1>{{ currentSlide.title }}</h1>
        <div class="content">
          <h2>{{ currentSlide.subtitle }}</h2>
          <p>{{ currentSlide.description }}</p>
          <a href="#" class="case-studies">View case studies</a>
        </div>
      </div>
      <div class="image-section">
        <img :src="currentSlide.image" alt="Farming Image" />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  
  export default defineComponent({
    name: "FoodAndFarming",
    setup() {
      const slides = ref([
        {
          title: "Responsible food and farming practices.",
          subtitle: "Food and farming",
          description:
            "Our operational farms are integral to our regenerative agriculture and sustainability efforts. Each farm not only produces fresh organic ingredients for our dining venues but also serves as an educational center where members can learn about local customs, history, and farming techniques.",
          image: "https://via.placeholder.com/800x400?text=Image+1",
        },
        {
          title: "Sustainable agriculture for the future.",
          subtitle: "Sustainability",
          description:
            "We prioritize sustainable practices to ensure the long-term health of our planet. Our farms implement eco-friendly methods to produce high-quality organic food.",
          image: "https://via.placeholder.com/800x400?text=Image+2",
        },
        {
          title: "Educational farming programs.",
          subtitle: "Learn and Grow",
          description:
            "Join our educational programs to learn about organic farming, local traditions, and innovative agricultural techniques.",
          image: "https://via.placeholder.com/800x400?text=Image+3",
        },
      ]);
  
      const currentSlideIndex = ref(0);
      const currentSlide = ref(slides.value[currentSlideIndex.value]);
  
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const slideIndex = Math.floor(scrollPosition / windowHeight) % slides.value.length;
  
        if (slideIndex !== currentSlideIndex.value) {
          currentSlideIndex.value = slideIndex;
          currentSlide.value = slides.value[currentSlideIndex.value];
        }
      };
  
      onMounted(() => {
        window.addEventListener("scroll", handleScroll);
      });
  
      return {
        currentSlide,
      };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .carousel-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 2rem;
    align-items: center;
    min-height: 100vh;
  
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  
    .content-section {
      h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
  
      .content {
        h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
  
        p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
  
        .case-studies {
          font-size: 1rem;
          color: black;
          text-decoration: underline;
          &:hover {
            color: #0070f3;
          }
        }
      }
    }
  
    .image-section {
      img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        transition: opacity 0.5s ease-in-out;
      }
    }
  }
  </style>
  