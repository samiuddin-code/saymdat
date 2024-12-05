<template>
    <div class="title-container">
      <!-- Background Video -->
      <video class="background-video" autoplay muted loop>
        <source src="../assets/a.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="centered-title">
        <h1 class="title-text">{{ projectData?.title || "Default Title" }}</h1>
      </div>
  
      <!-- Scroll Down Button in Bottom-Right Corner -->
      <button class="round-button" @click="scrollToNextSection">
        <span class="material-icons arrow-down">arrow_downward</span>
      </button>
    </div>
    
    <div class="carousel-container" v-if="projectData">
      <!-- Header Section -->
      <div class="intro-para">
        <p class="intro-para">{{ projectData.highlight }}</p>
      </div>
  
      <div class="image-container">
  <div :style="carouselStyle" class="carousel-images">
    <img
    v-for="(image, index) in images"
  :key="index"
  :src="getImageUrl(image.image)"
  :alt="image.imageAlt"
  v-show="currentSlide === index" 
  class="carousel-image"
    />
  </div>
</div>

  
      <div class="pagination">
        <span
          v-for="(image, index) in images"
          :key="index"
          :class="['dot', { active: currentSlide === index }]"
          @click="goToSlide(index)"
        ></span>
      </div>
  
      <div class="carousel-buttons">
        <button @click="prevSlide" class="prev-button">
          <i class="fas fa-arrow-left"></i>
        </button>
        <button @click="nextSlide" class="next-button">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      
      <!-- Description Section -->
      <div class="description">
        <p>{{ projectData.description }}</p>
      </div>
    </div>
  
    <!-- Error State -->
    <div v-else-if="errorMessage">
      <p class="error">{{ errorMessage }}</p>
    </div>
  
    <!-- Loading State -->
    <div v-else>
      <p>Loading project details...</p>
    </div>
  
    <BottomSection picture="AboutDlc.jpg" />
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  import BottomSection from '@/components/DownSection/BottomSection.vue';
  
  interface ProjectImage {
    id: number;
    image: string;
    imageAlt: string;
  }
  
  interface ProjectData {
    title: string;
    highlight: string;
    description: string;
    ProjectImages: ProjectImage[]; // Use the ProjectImages array to store image data
  }
  
  export default defineComponent({
    name: 'ProjectDetail',
    components: {
      BottomSection, // Register the component here
    },
    setup() {
      const route = useRoute();
      const projectSlug = route.params.projectSlug as string;
  
      const projectData = ref<ProjectData | null>(null);
      const errorMessage = ref<string | null>(null);
      const currentSlide = ref(0);  // Track the current slide
      const images = ref<ProjectImage[]>([]);  // Track the list of images for the carousel
        onMounted(async () => {
            console.log('Loading images:', images.value);  
  if (!projectSlug) {
    errorMessage.value = 'Project slug is missing or invalid.';
    return;
  }

  try {
    const response = await axios.get(
      `https://www.datconsultancy.com/_next/data/eXx6uPVkXf67Rmx7ThjPc/projects/residential/${projectSlug}.json?category=residential&projectSlug=${projectSlug}`
    );

    if (response.data?.pageProps?.response) {
      projectData.value = response.data.pageProps.response[0].data;
      images.value = projectData.value?.ProjectImages || []; // Get images from the API response
      console.log('Loaded images:', images.value);  // Debug log
    } else {
      errorMessage.value = 'No project found with the given slug.';
    }
  } catch (error) {
    console.error('Error fetching project data:', error);
    errorMessage.value = 'Failed to fetch project data. Please try again later.';
  }
});

      const getImageUrl = (image: string) => {
        if (image.startsWith('http')) {
          return image;
        }
        return `https://api.datconsultancy.com/uploads/${image}`;
      };
      const carouselStyle = () => ({
        transform: `translateX(-${currentSlide.value * 100}%)`,
  transition: 'transform 0.3s ease-in-out',
});
  
      const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length;
  console.log('Next slide:', currentSlide.value);  // Debugging slide change
};
const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + images.value.length) % images.value.length;
  console.log('Prev slide:', currentSlide.value);  // Debugging slide change
};
  
      const goToSlide = (index: number) => {
        currentSlide.value = index;
      };
  
      return {
        projectData,
        errorMessage,
        getImageUrl,
        carouselStyle,
        nextSlide,
        prevSlide,
        goToSlide,
        images,
        currentSlide,
      };
    },
  });
  </script>
  
  <style scoped>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    padding: 20px; /* Add padding to the whole page */
    box-sizing: border-box;
    background-color: #f4f4f4; /* Optional background color */
  }
  .image-container {
  position: relative;
  display: flex;
  justify-content: center; /* Center the carousel */
  align-items: center;
  width: 100%;
  height: auto; /* Ensure the container takes full height */
  overflow: hidden; /* Hide overflow if images are larger than container */
}
.carousel-images {
    overflow: hidden; 
  display: flex;
  transition: transform 0.5s ease-in-out; /* Smooth transition for carousel */
  width: auto;
  height: 60%;
}
.carousel-image {
  width: auto;
  height: 100%;
  object-fit: cover; /* Make sure the image fits properly */
  object-position: center; /* Center the image inside its container */
}
.carousel-image img {
  width: 100%;
  height: auto;
  object-fit: contain; /* This will ensure the image fills the container */
  object-position: center;
}

  title-text {
  font-family: 'Nunito', sans-serif;
  font-weight: 100;
  font-size: clamp(1.5rem, 4vw, 4.5rem);
  line-height: clamp(2rem, 5vw, 4rem);
  color: hsl(0, 0%, 100%);
  /* text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5); */
  margin-top: 1rem;
  /* transition: transform 0.3s ease; */
}

/* Hover effect for title */
.title-text:hover {
  /* transform: scale(1.05);
  text-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8); */
}
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
.intro-para {
padding: 2rem;
  
  @media screen and (max-width: 1024px) {
    padding: 4rem 2rem;
  }
  p {
    
    line-height: 2.5rem;
    font-weight: 100;
   
    letter-spacing: 2px;

    position: relative;
    font-size: 1.3rem;
    text-align: center;
    font-family: 'Nunito', sans-serif;

    @media screen and (max-width: 1024px) {
      text-align: left;
      font-size: 1.5rem;
      display: inline;
    }
  }
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

  z-index: 999;
}

/* Hover effect for title */
/* .title-text:hover {
  transform: scale(1.05);
  text-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
} */
.carousel-container {
    position: relative;
    width: 77%;
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
right: 42rem;
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
