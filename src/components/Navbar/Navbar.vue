<template>
  <div id="header" :class="{ scrolled: isScrolled, bouncing: isBouncing }">
    <div id="nav" :class="{ 'sticky-nav': isScrolled }">
      <div id="nav-logo" :class="{ 'is-toggled': isToggled }">
        <router-link @click="isToggled = false" to="/">
          <img
            class="logo"
            :src="isScrolled ? require('../../assets/logoa.png') : require('../../assets/logob.png')"
            alt="DAT"
            loading="lazy"
          />
        </router-link>
        <button class="nav-toggler" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="35px" class="toggler-svg" height="85" viewBox="0 0 20.00 20.00" fill="none" stroke="#000000" stroke-width="0.12">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path fill="#ffffff" fill-rule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm0 4a1 1 0 100-2H2a1 1 0 100 2h16zm1 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 5a1 1 0 100-2H2a1 1 0 100 2h16z"/> </g>

</svg>
        </button>
   
      </div>
      <div id="nav-links" :class="{ 'is-toggled': isToggled }">
        <router-link @click="isToggled = false" to="/about-dlc">
          <p class="hover-underline-animation">About Us</p>
        </router-link>
        <div
          class="nav-item-with-submenu"
          @mouseover="toggleSubmenu(true)"
          @mouseleave="toggleSubmenu(false)"
        >
          <router-link @click="isToggled = false" to="/experiences">
            <p class="hover-underline-animation">
              Our Expertise
              <span class="arrow-down">&#x25BC;</span>
            </p>
          </router-link>
          <div v-if="isSubmenuOpen" class="submenu">
            <div class="submenu-item">
              <i class="fas fa-hard-hat"></i> <!-- Hard hat icon -->
              <router-link @click="isToggled = false" to="/concept">
                <p class="submenu-item-text">Concept</p>
              </router-link>
            </div>
            <div class="submenu-item">
              <i class="fas fa-drafting-compass"></i> <!-- Blueprint icon -->
              <router-link @click="isToggled = false" to="/design">
                <p class="submenu-item-text">Design</p>
              </router-link>
            </div>
            <div class="submenu-item">
              <i class="fas fa-tools"></i> <!-- Tools icon -->
              <router-link @click="isToggled = false" to="/build">
                <p class="submenu-item-text">Build</p>
              </router-link>
            </div>
          </div>
        </div>
        <router-link @click="isToggled = false" to="/our-worlds">
          <p class="hover-underline-animation">Our Projects</p>
        </router-link>
        <router-link @click="isToggled = false" to="/gallery">
          <p class="hover-underline-animation">Gallery</p>
        </router-link>
        <router-link @click="isToggled = false" to="/press">
          <p class="hover-underline-animation">Press</p>
        </router-link>
        <router-link @click="isToggled = false" to="/ContactPage">
          <p class="hover-underline-animation">Contact Us</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      isToggled: false,
      isScrolled: false,
      isSubmenuOpen: false,
      isBouncing: false, // State to manage bounce animation
    };
  },
  methods: {
    toggleMenu() {
      this.isToggled = !this.isToggled;
    },
    handleScroll() {
      if (window.scrollY > 50 && !this.isScrolled) {
        this.isScrolled = true;
        this.triggerBounce(); // Trigger bounce effect when scrolled
      } else if (window.scrollY <= 50 && this.isScrolled) {
        this.isScrolled = false;
      }
    },
    toggleSubmenu(open) {
      this.isSubmenuOpen = open;
    },
    triggerBounce() {
      this.isBouncing = true; // Enable bouncing
      // Reset the bouncing animation to start from the beginning
      setTimeout(() => {
        this.isBouncing = false; // Disable bouncing after animation completes
      }, 600); // Match the duration of the bounce animation
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
@use "./Navbar.scss";

// Keyframe for the bounce effect

</style>
