<template>
  <BlackScreenTransition :isVisible="isTransitionVisible" />
  <Navbar />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar/Navbar.vue';
import Footer from '@/components/Footer/Footer.vue';
import BlackScreenTransition from '@/components/BlackScreenTransition.vue';

@Options({
  name: 'App',
  components: {
    Navbar,
    Footer,
    BlackScreenTransition,
  },
})
export default class App extends Vue {
  isTransitionVisible = false;
  currentScroll = 0; // Tracks the current scroll position
  targetScroll = 0; // Tracks the target scroll position
  isScrolling = false; // Tracks whether the scroll animation is active
  isWheelActive = false; // Prevent continuous wheel events while scrolling

  mounted() {
    const router = useRouter();

    // Trigger black screen transition on route changes
    router.beforeEach((to, from, next) => {
      this.showTransition();
      setTimeout(() => {
        next();
      }, 1000); // Match transition duration
    });

    // Initialize smooth scroll
    this.initializeSmoothScroll();
  }

  showTransition() {
    this.isTransitionVisible = true;
    setTimeout(() => {
      this.isTransitionVisible = false;
    }, 1000); // Match transition duration
  }

  initializeSmoothScroll() {
    // Listen for wheel events to determine scroll direction
    window.addEventListener('wheel', this.handleWheelEvent, { passive: false });

    // Prevent default scrolling for arrow keys
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      const keyDelta: Record<string, number> = {
        ArrowUp: -100,
        ArrowDown: 100,
      };

      const delta = keyDelta[event.key];

      if (delta !== undefined) {
        this.targetScroll += delta;
        this.limitScrollBounds();
        this.startSmoothScroll();
        event.preventDefault();
      }
    });

    // Initialize current scroll position
    this.targetScroll = window.scrollY;
    this.currentScroll = window.scrollY;
  }

  handleWheelEvent = (event: WheelEvent) => {
    if (this.isWheelActive) return; // Avoid excessive processing
    this.isWheelActive = true; // Lock wheel event handling

    this.targetScroll += event.deltaY; // Update target based on wheel input
    this.limitScrollBounds(); // Ensure scrolling stays within bounds

    // Start smooth scroll animation
    this.startSmoothScroll();

    event.preventDefault(); // Prevent native scrolling

    // Unlock wheel event after a small delay to allow smooth scrolling
    setTimeout(() => {
      this.isWheelActive = false;
    },22); // Adjust timeout based on your desired scroll speed
  };

  limitScrollBounds() {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    this.targetScroll = Math.max(0, Math.min(this.targetScroll, maxScroll));
  }

  startSmoothScroll() {
    if (this.isScrolling) return; // Avoid overlapping animations
    this.isScrolling = true;

    const smoothScrollStep = () => {
      const distance = this.targetScroll - this.currentScroll;
      const step = distance * 0.1; // Adjust damping factor for smoother motion

      if (Math.abs(distance) < 0.01) {
        this.isScrolling = false;
        this.currentScroll = this.targetScroll;
        window.scrollTo(0, this.targetScroll);
        return;
      }

      this.currentScroll += step; // Update current position
      window.scrollTo(0, Math.round(this.currentScroll)); // Prevent sub-pixel rendering causing jitter

      requestAnimationFrame(smoothScrollStep); // Continue the animation
    };

    smoothScrollStep(); // Start the animation loop
  }
}
</script>

<style lang="scss">
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 20px;
  font-family: 'Nunito', sans-serif; 
}

body,
html {
  min-height: 100vh;
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden; /* Prevent native scroll conflicts */
}

body {
  position: relative;
  left: 0;
  top: 0;
}

html {
  scroll-behavior: auto; /* Disable built-in smooth scroll */
}

/* Specific font styles */
h1, h2, h3 {
  font-family: 'Nunito', sans-serif; /* For headings */
}

p, li, span, a {
  font-family: 'Nunito', sans-serif; /* For general text */
}

button, .navbar, .footer {
  font-family: 'Nunito', sans-serif; /* For UI elements */
}

h1, h2 {
  font-weight: 400; /* Bold headings */
}

p, li {
  font-weight: 200; /* Regular body text */
}

footer {
  font-family: 'Nunito', sans-serif; /* For footer */
}

/* Material Icons */
.material-icons {
  font-family: 'Material Icons';
  font-size: 24px;
  vertical-align: middle;
  color: #333;
}

/* For smooth transition and animation */
.transition {
  transition: all 0.5s ease-in-out;
}

.card {
  background: #fff;
  border-radius: 8px;

  padding: 20px;
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {

  transform: translateY(-5px);
}

/* Neon glow effect */
.neon-text {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #fff;
  background: linear-gradient(45deg, #ff4081, #00e5ff);
  -webkit-background-clip: text;
  background-clip: text;
  text-transform: uppercase;
  animation: neon-blink 1.5s infinite alternate;
}

@keyframes neon-blink {
  0% {
    text-shadow: 0 0 10px #ff4081, 0 0 20px #ff4081, 0 0 30px #ff4081, 0 0 40px #ff4081;
  }
  100% {
    text-shadow: 0 0 20px #00e5ff, 0 0 30px #00e5ff, 0 0 40px #00e5ff, 0 0 50px #00e5ff;
  }
}

/* Smooth scroll animation for parallax effects */
.parallax-section {
  position: relative;
  background: url('https://placeimg.com/1920/1080/tech') no-repeat center center;
  background-size: cover;
  padding: 60px 0;
  transition: transform 0.2s ease-in-out;
}

.parallax-section:hover {
  transform: scale(1.05);
}

/* Parallax container */
.parallax-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.parallax-content {
  z-index: 10;
  color: #fff;
  font-family: 'Nunito', sans-serif;
  text-align: center;
}

/* Smooth scroll helper class */
.smooth-scroll {
  scroll-behavior: smooth;
}

</style>
