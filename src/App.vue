<template>
  <Navbar />
  <router-view />
  <Footer />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from '@/components/Navbar/Navbar.vue'  // @ is an alias to /src
import Footer from '@/components/Footer/Footer.vue'

@Options({
  name: "App",
  components: {
    Navbar,
    Footer
  },
})
export default class App extends Vue {
  mounted() {
    this.setSlowScroll();
  }

  // Slow scroll logic
  setSlowScroll() {
    let scrollInterval: ReturnType<typeof setInterval> | null = null;

    // Slow down the scrolling using setInterval
    window.addEventListener('wheel', (event) => {
      event.preventDefault(); // Prevent default scrolling behavior

      if (!scrollInterval) {
        scrollInterval = setInterval(() => {
          const direction = event.deltaY > 0 ? 1 : -1;
          window.scrollBy(0, direction * 2); // Adjust the "10" value for speed
        }, 50); // Scroll interval time in ms (10ms makes it slower)

        // Clear the interval when the user stops scrolling
        setTimeout(() => {
          if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
          }
        }, 100);
      }
    });
  }
}
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Average+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

// reset
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Average Sans", sans-serif;
  font-family: "Poppins", sans-serif;
}
body,
html {
  min-height: 100vh;
}
body {
  position: relative;
  left: 0;
  top: 0;
}
</style>
