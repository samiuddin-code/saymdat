import { Options, Vue } from "vue-class-component";

@Options({
  name: "TxtImg2",
  props: {
    header1: {
      type: String,
      required: true,
    },
    header2: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
    imgRight: {
      type: String,
      required: true,
    },
    imgLeft: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
    mirror: {
      type: Boolean,
      default: false,
    },
  },
})
export default class TxtImg2 extends Vue {
  private observer: IntersectionObserver | null = null;

  // Life Cycle hook to set up the IntersectionObserver
  mounted() {
    this.initializeObserver();
  }

  // Life Cycle hook to clean up the observer when component is destroyed
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  // Initialize IntersectionObserver to observe elements when they come into view
  initializeObserver() {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin around the root
      threshold: 1.0, // Trigger when 50% of the element is in view
    };

    // Create the observer instance
    this.observer = new IntersectionObserver(this.handleIntersect, options);

    // Select all the elements you want to observe for animations
    const textElements = document.querySelectorAll('.bold-header span, .light-text');
    const images = document.querySelectorAll('.right img, .bottom-left img');

    // Observe the text and image elements
    textElements.forEach((element) => this.observer!.observe(element));
    images.forEach((image) => this.observer!.observe(image));
  }

  // Handle intersection event when an element enters the viewport
  handleIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;

        // Apply the animation class based on the type of element
        if (element.classList.contains('bold-header') || element.classList.contains('light-text')) {
          // Apply fade-in and slide-up animation to text
          element.classList.add('animate-text');
        }

        // Once the element is animated, stop observing it
        this.observer!.unobserve(element);
      }
    });
  }
}
