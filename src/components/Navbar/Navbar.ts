import { Options, Vue } from "vue-class-component";
import MenuIcon from '@mui/icons-material/Menu';
@Options({
  name: "Navbar",
  data() {
    return {
      showMenu: false,
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
      if (window.scrollY > 50) {
        if (!this.isScrolled) {
          this.isScrolled = true;
          this.triggerBounce(header); // Trigger bounce effect when scrolled
        }
      } else {
        this.isScrolled = false;
      }
    }
  }

  // Method to trigger bounce animation
  triggerBounce(element: HTMLElement) {
    element.classList.remove("bounce"); // Reset animation
    void element.offsetWidth; // Trigger reflow
    element.classList.add("bounce"); // Add bounce animation
  }
}
