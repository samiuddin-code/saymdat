<template>
  <div id="header" :class="{ scrolled: isScrolled }">
    <div id="nav" :class="{ 'sticky-nav': isScrolled }">
      <div id="nav-logo" :class="{ 'is-toggled': isToggled }">
        <router-link @click="isToggled = false" to="/">
          <img 
            class="logo" 
            :src="isScrolled ? require('../../assets/logoa.png') : require('../../assets/logob.png')" 
            alt="DAT" loading="lazy"
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
          <p class="hover-underline-animation">About DAT</p>
        </router-link>
        <div 
          class="nav-item-with-submenu"
          @mouseover="toggleSubmenu(true)" 
          @mouseleave="toggleSubmenu(false)"
        >
          <router-link @click="isToggled = false" to="/our-worlds">
            <p class="hover-underline-animation">
              Our Expertise
              <span class="arrow-down">&#x25BC;</span> <!-- Arrow icon -->
            </p>
          </router-link>
          <div v-if="isSubmenuOpen" class="full-width-submenu">
            <div class="submenu-container">
              <router-link @click="isToggled = false" to="/design">
                <p class="submenu-item">Design</p>
              </router-link>
              <router-link @click="isToggled = false" to="/build">
                <p class="submenu-item">Build</p>
              </router-link>
              <router-link @click="isToggled = false" to="/concept">
                <p class="submenu-item">Concept</p>
              </router-link>
            </div>
          </div>
        </div>
        <router-link @click="isToggled = false" to="/experiences">
          <p class="hover-underline-animation">Projects</p>
        </router-link>
        <router-link @click="isToggled = false" to="/gallery">
          <p class="hover-underline-animation">Gallery</p>
        </router-link>
        <router-link @click="isToggled = false" to="/press">
          <p class="hover-underline-animation">Press</p>
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
    };
  },
  methods: {
    toggleMenu() {
      this.isToggled = !this.isToggled;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleSubmenu(open) {
      this.isSubmenuOpen = open;
    },
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
</style>
