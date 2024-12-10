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

  currentIndex = 0; // Track the index of the current slide

  // Function to navigate to details page
  navigateToDetails(title: string) {
    this.$router.push({ path: `/details/${encodeURIComponent(title)}` });
  }

  // Left button handler (move one slide to the left)
  goLeft() {
    this.currentIndex =
      (this.currentIndex - 1 + this.carousel.length) % this.carousel.length; // Loop back to the last slide
  }

  // Right button handler (move one slide to the right)
  goRight() {
    this.currentIndex = (this.currentIndex + 1) % this.carousel.length; // Loop back to the first slide
  }

  // Get the style for the slider track (moves the entire carousel)
  getSliderTrackStyle() {
    return {
      transform: `translateX(-${this.currentIndex * 100}%)`, // Move the entire slider by the width of one slide
      transition: 'transform 0.5s ease', // Smooth transition for the movement
    };
  }
}