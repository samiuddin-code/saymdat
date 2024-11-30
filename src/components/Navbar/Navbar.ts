import { Options, Vue } from "vue-class-component";

@Options({
  name: "Navbar",
  data() {
    return {
      isToggled: false,
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
})
export default class Navbar extends Vue {
  isToggled: boolean = false;
  isScrolled: boolean = false;

  // Method to handle menu toggle
  toggleMenu() {
    this.isToggled = !this.isToggled;
  }

  // Method to handle scroll event with bounce effect
  handleScroll() {
    const header = document.getElementById("header");

    if (header) {
      header.classList.remove("bounce"); // Remove the bounce class to reset the animation
      void header.offsetWidth; // Trigger a reflow to re-enable animation
      header.classList.add("bounce"); // Add the bounce class to trigger the animation
    }

    this.isScrolled = window.scrollY > 50;
  }
}
