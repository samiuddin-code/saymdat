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
  isScrolling = false;
  mounted() {
    const router = useRouter();
    this.setSlowScroll();

    // Watch for route changes to trigger the black screen transition
    router.beforeEach((to, from, next) => {
      this.showTransition();
      setTimeout(() => {
        next(); // Proceed to the next route after the transition
      }, 1000); // Adjust the delay to match your transition duration
    });
  }

  showTransition() {
    this.isTransitionVisible = true;
    setTimeout(() => {
      this.isTransitionVisible = false;
    }, 1000); // 5 seconds duration for the transition effect
  }

  setSlowScroll() {
    let scrollInterval: ReturnType<typeof setInterval> | null = null;

    window.addEventListener('wheel', (event) => {
      if (this.isScrolling) {
        event.preventDefault();  // Only prevent scroll when actively scrolling
      }


      if (!scrollInterval) {
        scrollInterval = setInterval(() => {
          const direction = event.deltaY > 0 ? 1 : -4;
          window.scrollBy(0, direction * 2); // Adjust the "2" value for ultra-smooth speed
        }, 200);

        setTimeout(() => {
          if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
          }
        }, 700); // Adjust this time for the smoothness of the scroll
      }
    });
  }
}
</script>


<style lang="scss">
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');


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
  box-sizing: border-box; /* Apply globally */
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}

body,
html {
  min-height: 100vh;
  font-size: 16px;
  line-height: 1.5;
  scroll-behavior: smooth;
}

body {
  position: relative;
  left: 0;
  top: 0;
}

@font-face {
  font-family: 'Calligraphic';
  // src: url('@/assets/fonts/Calligraphic-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Afera';
  // src: url('@/assets/fonts/Afera-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Beauty';
  // src: url('@/assets/fonts/Beauty-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Reg';
  // src: url('@/assets/fonts/Reg-Regular.woff2') format('woff2');
}

/* Smooth Scroll Behavior */
html {
  scroll-behavior: smooth;
}

/* Ensure fonts load asynchronously */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');
</style>
