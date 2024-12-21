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

    <!-- Scroll Down Button -->
    <button class="round-button" @click="scrollToNextSection">
      <span class="material-icons arrow-down">arrow_downward</span>
    </button>
  </div>

  <!-- Project Content -->
  <div class="carousel-container" v-if="projectData">
    <!-- Highlight Section -->
    <div class="intro-para">
      <p>{{ projectData.highlight }}</p>
    </div>

    <!-- Image Carousel -->
    <div class="image-container">
      <div class="carousel-images">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="getImageUrl(image.image)"
          :alt="image.imageAlt || 'Project Image'"
          v-show="currentSlide === index"
          class="carousel-image"
        />
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="['dot', { active: currentSlide === index }]"
        @click="goToSlide(index)"
      ></span>
    </div>

    <!-- Navigation Buttons -->
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

    <!-- Project Metadata -->
    <div class="project-details-container">
      <div class="project-details">
        <div
          v-for="(meta, index) in projectMeta"
          :key="index"
          class="detail-card"
        >
          <p class="label">{{ meta.title }}</p>
          <div v-html="meta.icon" class="icon"></div>
          <p class="value">
            <strong>{{ meta.value }}</strong>
          </p>
        </div>
      </div>
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

  <!-- Bottom Section -->
  <BottomSection picture="Experiences.png" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import BottomSection from "@/components/DownSection/BottomSection.vue";

interface ProjectImage {
  id: number;
  image: string;
  imageAlt?: string;
}

interface ProjectMeta {
  id: number;
  title: string;
  value: string;
  icon: string; // HTML string for the icon
}

interface ProjectData {
  title: string;
  highlight: string;
  description: string;
  ProjectImages: ProjectImage[];
  ProjectMeta: ProjectMeta[];
}

export default defineComponent({
  name: "ProjectDetail",
  components: { BottomSection },
  setup() {
    const route = useRoute();
    const projectSlug = route.params.projectSlug as string;

    const projectData = ref<ProjectData | null>(null);
    const projectMeta = ref<ProjectMeta[]>([]);
    const images = ref<ProjectImage[]>([]);
    const errorMessage = ref<string | null>(null);
    const currentSlide = ref(0);

    onMounted(async () => {
      if (!projectSlug) {
        errorMessage.value = "Project slug is missing or invalid.";
        return;
      }

      try {
        const response = await axios.get(
          `https://www.datconsultancy.com/_next/data/eXx6uPVkXf67Rmx7ThjPc/projects/residential/${projectSlug}.json?category=residential&projectSlug=${projectSlug}`
        );

        if (response.data?.pageProps?.response) {
          const project = response.data.pageProps.response[0].data;
          projectData.value = {
            title: project.title,
            highlight: project.highlight,
            description: project.description,
            ProjectImages: project.ProjectImages || [],
            ProjectMeta: project.ProjectMeta || [],
          };
          images.value = project.ProjectImages;
          projectMeta.value = project.ProjectMeta;
        } else {
          errorMessage.value = "No project data found.";
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
        errorMessage.value = "Failed to fetch project data. Try again later.";
      }
    });

    const getImageUrl = (image: string) => {
      return image.startsWith("http")
        ? image
        : `https://api.datconsultancy.com/uploads/${image}`;
    };

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % images.value.length;
    };

    const prevSlide = () => {
      currentSlide.value =
        (currentSlide.value - 1 + images.value.length) % images.value.length;
    };

    const goToSlide = (index: number) => {
      currentSlide.value = index;
    };

    return {
      projectData,
      projectMeta,
      images,
      errorMessage,
      getImageUrl,
      nextSlide,
      prevSlide,
      goToSlide,
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
  .carousel-buttons button {
  background-color: transparent; /* Removes the default background */
  border: none; /* Removes any default borders */
  margin-top: -1rem; /* Adds padding to the button */
  cursor: pointer; /* Changes cursor to pointer on hover */
  font-size: 24px; /* Adjusts the size of the icon */
}

.carousel-buttons button i {
  color: #000; /* Icon color */
  font-size: 24px; /* Adjusts the icon size */
}

.carousel-buttons button:hover {
  background-color: transparent; /* Keeps background transparent on hover */
  color: #1976d2; /* Changes the color of the icon on hover (optional) */
}

.carousel-buttons button:focus {
  outline: none; /* Removes the outline when the button is focused */
}

  .project-details-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 10vh; /* Take full height of the screen */
  padding: 60px 00px;
  box-sizing: border-box;
}

.project-details {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%; /* Takes 80% of the screen width */
}

.detail-card {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 0px;
  text-align: center;
  padding: 80px;
  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); */
}

.label {
  font-size: 18px;
  color: #777;
  margin-bottom: 10px;
}

.icon {
  font-size: 34px;
  margin-bottom: 10px;
  color: #333;
}

.value {
  font-size: 28px;
  color: #000;
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
    font-family: 'IBM Plex Sans', sans-serif;
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
    font-family: 'IBM Plex Sans', sans-serif;
    @media screen and (max-width: 1024px) {
      text-align: left;
      font-size: 1.5rem;
      display: inline;
    }
  }
  @media screen and (max-width: 1024px) {
    .intro-para {
      font-size: 1.1rem;
      line-height: 2rem;
      padding: 1rem;
      text-align: justify;
    }

    .title-text {
      font-size: clamp(1.2rem, 3vw, 3.5rem);
      line-height: clamp(1.5rem, 4vw, 3rem);
    }
  }

  @media screen and (max-width: 768px) {
    .intro-para {
      font-size: 1rem;
      line-height: 1.8rem;
      padding: 1rem;
    }

    .title-text {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }

  @media screen and (max-width: 500px) {
    .intro-para {
      font-size: 0.9rem;
      line-height: 1.5rem;
      padding: 0.5rem;
    }

    .title-text {
      font-size: 1.8rem;
      line-height: 2.2rem;
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
  font-family: 'IBM Plex Sans', sans-serif;
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
