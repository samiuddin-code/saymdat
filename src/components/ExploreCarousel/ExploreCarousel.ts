
import { Options, Vue } from 'vue-class-component';

interface CarouselItem {
  title: string;
  pic: string;
  location: string;
}

@Options({
  name: 'ExploreCarousel',
  props: {
    carousel: {
      type: Array,
      required: true,
    },
    worldPath: {
      type: String,
      required: true,
    },
    carouselH1: {
      type: String,
      required: true,
    },
    carouselH2: {
      type: String,
      required: true,
    },
  },
})
export default class ExploreCarousel extends Vue {
  carousel!: CarouselItem[];
  worldPath!: string;
  carouselH1!: string;
  carouselH2!: string;

  currentIndex = 0;
  autoSlideInterval: number | undefined = undefined;

  // Function to navigate to details page
  navigateToDetails(title: string) {
    this.$router.push({ path: `/details/${encodeURIComponent(title)}` });
  }

  // Left button handler
  goLeft() {
    this.currentIndex =
      (this.currentIndex - 1 + this.carousel.length) % this.carousel.length;
  }

  // Right button handler
  goRight() {
    this.currentIndex = (this.currentIndex + 1) % this.carousel.length;
  }

  // Get the slider track style to control the slide position dynamically
  getSliderTrackStyle() {
    return {
      transform: `translateX(-${this.currentIndex * 100}%)`,
      transition: 'transform 0.5s ease',  // Smooth transition
    };
  }

  // Start the automatic slider
  startAutoSlide() {
    if (this.autoSlideInterval) clearInterval(this.autoSlideInterval); // Clear previous interval if any
    this.autoSlideInterval = setInterval(() => {
      this.goRight(); // Move the carousel to the right automatically
    }, 3000); // Change slide every 3 seconds
  }

  // Stop the automatic slider when the component is destroyed
  beforeDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  // Start the slider when the component is mounted
  mounted() {
    this.startAutoSlide();
  }
}

