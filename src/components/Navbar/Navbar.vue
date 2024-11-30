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
          <svg width="16" height="16" fill="#fff" class="toggler-svg">
            <rect width="16" height="4" x="0" y="0" />
            <rect width="16" height="4" x="0" y="6" />
            <rect width="12" height="4" x="0" y="12" />
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
          <router-link @click="isToggled = false" to="/our-worlds">
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
        <router-link @click="isToggled = false" to="/experiences">
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
