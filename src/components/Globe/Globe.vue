<template>
  <div class="farming-section" ref="farmingSection">
    <!-- Content Section -->
    <div class="content" v-if="slides.length && slides[currentSlide]">
      <h1>{{ slides[currentSlide].h1Title }}</h1>
      <div class="text">
        <h2>{{ slides[currentSlide].title }}</h2>
        <p>{{ slides[currentSlide].description }}</p>
        <a href="#" class="link">View case studies</a>
      </div>
    </div>

    <!-- Image Section -->
    <div class="image" v-if="slides.length && slides[currentSlide]">
      <img :src="slides[currentSlide].image" alt="Farming image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0, // Track the current slide
      slides: [
        {
          h1Title: " Unlock the Future with Smart Home Automation System", // New title for <h1>
          title: " Smart Home Automation System",
          description:
            "Our villas seamlessly integrate intelligent home technology with sumptuous lifestyles. At the tap or voice command, control every aspect of your home, from automated lighting and climate control to energy-efficient systems designed to your preference. Every single aspect is carefully crafted for your comfort, efficiency, and nobility. Driven by state-of-the-art innovations at your beck and call, your villa transforms from a mere space into a sophisticated living experience. Welcome to the future of intelligent, elevated living.",
          image: require("../../assets/AboutDlc/homeautomation.png"),
        },
        {
          h1Title: "Where Comfort Meets Conscious Living", // New title for <h1>
          title: "Sustainable Luxuryes",
          description:
            "Our villa is powered by the sun and designed for sustainability. We believe that true indulgence should leave a positive footprint, blending comfort with care for the planet. With solar panels fueling clean energy and energy-efficient power glasses, here every little detail is a step towards a greener future.",
          image: require("../../assets/AboutDlc/ss.png"),
        },
        {
          h1Title: "The Pinnacle of Elegance Crafted with the Finest Marble", // New title for <h1>
          title: "Crafted with the Finest Marble",
          description:
            "In our villa, every corner whispers luxury and craftsmanship. We have sourced only the finest Italian marbles that are unmatched for their beauty and strength. Coming from the most prestigious quarries in the world, these marbles give each room a touch of timeless elegance. It's more than just a material-it's a piece of Italy's artistry beneath your feet, creating a space as remarkable as the memories you'll make here.",
          image: require("../../assets/AboutDlc/sst.png"),
        },
      ],
    };
  },
  methods: {

      handleScroll() {
  const section = document.querySelector(".farming-section");
  if (!section) {
    console.error("Element .farming-section not found");
    return;
  }

  const { scrollTop, clientHeight } = document.documentElement;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const isVisible =
    scrollTop + clientHeight > sectionTop && scrollTop < sectionTop + sectionHeight;

  if (isVisible) {
    const scrollProgress = Math.min(
      Math.max((scrollTop - sectionTop) / (sectionHeight - clientHeight), 0),
      1
    );
    this.currentSlide = Math.min(
      Math.floor(scrollProgress * this.slides.length),
      this.slides.length - 1
    );
  }
}
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
/* Fullscreen farming section */
.farming-section {
  display: grid;
  grid-template-columns: 50% 50%; /* Both columns take up 50% each */
  gap: 20px; /* Optional gap between the columns */
  background-color: white; /* Background of the entire section */
  min-height: 100vh; /* Fullscreen */
  padding: 100px;
  padding-left: 2rem;
  box-sizing: border-box;
  position: relative; /* To position elements inside it */
}

.content {
  grid-column: 1; /* Content takes up the first column */
  background-color: #f3f3f3; /* Background for the text card */
  padding: 20px; /* Optional padding for the text card */
  border-radius: 8px; /* Optional: rounded corners for the text card */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Ensure content starts from top */
  height: 100%; /* Make sure the content section takes full height */
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem; /* Reduced margin for better spacing */
  line-height: 1.2;
}

.text {
  display: flex;
  flex-direction: column;
  margin-top: auto; /* Push description to the bottom */
}

.text h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.text p {
  font-size: 1.28rem;
  color: #666;
  margin-bottom: 1rem;
}

.text .link {
  font-size: 1rem;
  color: black;
  font-weight: bold;
  text-decoration: underline;
}

.image {
  grid-column: 2; /* Image takes up the second column */
  width: 105%; /* Set the image container to take up 100% of the width */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Make the image container take up full height */
}

img {
  height: 100%; /* Make the image fill the container */
  width: 100%; /* Ensure the image stretches to the full width of the container */
  object-fit: cover; /* Ensure the image covers the entire container without distortion */
  border-radius: 5px;
}

.next-section {
  display: none; /* Hidden by default */
}

/* Reveal next section after scroll */
.farming-section.scrolled-to-end + .next-section {
  display: block;
  padding: 50px;
  text-align: center;
}

.next-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.next-section p {
  font-size: 1rem;
  color: #666;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .farming-section {
    grid-template-columns: 1fr; /* Single column for mobile */
    grid-template-rows: auto; /* Automatically adjust row height */
    gap: 20px; /* Add gap between rows */
    padding: 50px; /* Adjust padding for smaller screens */
  }

  .content,
  .image {
    grid-column: span 1; /* Each takes up the full width */
    height: auto; /* Let content height adjust naturally */
    width: 100%; /* Ensure full width on mobile */
  }

  .content {
    padding: 15px; /* Adjust padding for mobile */
  }

  h1 {
    font-size: 2rem; /* Smaller font size for mobile */
  }

  .text h2 {
    font-size: 1.5rem; /* Adjust heading size for mobile */
  }

  .text p {
    font-size: 1rem; /* Adjust text size for better readability */
  }

  img {
    border-radius: 5px;
  }
}
</style>
