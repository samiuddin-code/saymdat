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
            <path fill="#ffffff" fill-rule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm0 4a1 1 0 100-2H2a1 1 0 100 2h16zm1 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 5a1 1 0 100-2H2a1 1 0 100 2h16z"/>
          </svg>
        </button>
      </div>

      <!-- Main Navigation Links -->
      <div id="nav-links" :class="{ 'is-toggled': isToggled }">
        <router-link @click="isToggled = false" to="/about-dlc">
          <p class="hover-underline-animation">About Us</p>
        </router-link>

        <!-- Expertise Dropdown with Enhanced Submenu -->
        <div class="nav-item-with-submenu" @mouseover="toggleSubmenu(true)" @mouseleave="toggleSubmenu(false)">
          <router-link @click="isToggled = false" to="/experiences">
            <p class="hover-underline-animation">
              Our Expertise
              <span class="arrow-down"><i class="fas fa-chevron-down"></i></span>
            </p>
          </router-link>

          <!-- Submenu with larger and more dynamic animations -->
          <div v-if="isSubmenuOpen" :class="{'submenu-sticky': isScrolled}" class="submenu">
            <div class="submenu-item">
              <i class="fas fa-lightbulb"></i> 
              <router-link @click="isToggled = false" to="/concept">
                <p class="submenu-item-text">Concept</p>
              </router-link>
            </div>
            <div class="submenu-item">
              <i class="fas fa-palette"></i> <!-- Palette icon for design -->
              <router-link @click="isToggled = false" to="/design">
                <p class="submenu-item-text">Design</p>
              </router-link>
            </div>
            <div class="submenu-item">
              <i class="fas fa-cogs"></i> <!-- Gear icon for build -->
              <router-link @click="isToggled = false" to="/build">
                <p class="submenu-item-text">Build</p>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Other Links -->
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
        
        <header :class="{'sticky': isScrolled}">
  <button 
    @click="toggleMenu" 
    :class="['menu-button', { 'bouncing': isBouncing, 'scrolled': isScrolled }]">
    <i class="fas fa-bars"></i> <!-- Keep the same icon for open/close -->
  </button>
</header>


      </div>
    </div>
    
  </div>
 
  <div>
    <!-- Toggle Menu Button -->
  
    <!-- Fullscreen Menu -->
  <div v-if="isMenuOpen" class="fullscreen-menu">
    <div class="menu-content">
      <!-- Close Button -->
      <button class="close-button" @click="closeMenu">
        <span class="close-icon">&times;</span>
      </button>
      <div class="menu-left">
        <router-link to="/" class="logo-link">
          <img class="logoo" src="../../assets/logob.png" alt="DAT" />
        </router-link>
        <div class="menu-links">
          <router-link to="/about-dlc" @click="closeMenu">About Us</router-link>
          <router-link to="/experiences" @click="closeMenu">Our Expertise</router-link>
          <router-link to="/our-worlds" @click="closeMenu">Our Projects</router-link>
          <router-link to="/gallery" @click="closeMenu">Gallery</router-link>
          <router-link to="/press" @click="closeMenu">Press</router-link>
          <router-link to="/ContactPage" @click="closeMenu">Contact Us</router-link>
        </div>
        <p class="bottom-text">Architecture that inspires</p>
      </div>
      <div class="menu-right">
        <!-- Video Element -->
        <video class="menu-video" autoplay muted loop>
          <source src="../../assets/discovery.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
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
      isBouncing: false,
      isMenuOpen: false,  // State to manage full-screen menu
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; 
      console.log('Menu Open State:', this.isMenuOpen); // Toggle full-screen menu
    },
    closeMenu() {
      this.isMenuOpen = false;  // Close the menu
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
      setTimeout(() => {
        this.isBouncing = false; // Disable bouncing after animation completes
      }, 600);
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
