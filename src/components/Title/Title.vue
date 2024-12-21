<template>
 <video
  class="main-bg"
  autoplay
  muted
  loop
  :style="{ backgroundImage: `url(${imageBg})`, filter: 'brightness(70%)' }"
>
  <source :src="video" type="video/mp4" />
</video>

  <!-- Scroll Down Button in Bottom-Right Corner -->
  <button class="round-button" @click="scrollToNextSection">
    <!-- Material Design Down Arrow Icon -->
    <span class="material-icons arrow-down">arrow_downward</span>
  </button>
  <main class="title">
    <span class="bold-text">{{ bText }}</span>
    <span class="light-text">{{ lText }}</span>
  </main>
</template>

<script type="module" src="./Title.ts"></script>

<style lang="scss" scoped>
@use "./Title";

/* Video Background */
video.main-bg {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

/* Dark overlay on video background */
.main-bg::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: background 0.3s ease;
}

/* Title Section */
.title {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  text-align: center;
  padding: 2rem;
  pointer-events: none;
}

/* Bold Text */
/* Bold Text */
.bold-text {
  font-family: "Nunito", sans-serif;
  font-style: normal; /* Normal style */
  font-weight: 300; /* Moderate weight for a refined look */
  font-size: clamp(2.5rem, 6vw, 8.5rem); /* Dynamic size */
  line-height: clamp(3rem, 7vw, 6.5rem); /* Complementary line height */
  color: hsl(0, 0%, 100%);
  -webkit-background-clip: text; /* Clips gradient to the text */
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5); /* Subtle shadow for depth */
  margin-top: 1.5rem; /* Spacing from top */
  transition: transform 0.5s ease, text-shadow 0.3s ease; /* Smooth effects */
  letter-spacing: 0.03em; /* Slightly spaced letters for elegance */
  text-transform: none; /* Keeps natural casing */
  opacity: 0; /* Start hidden */
  transform: translateY(20px); /* Start slightly below */
  animation: swipeUp 1.2s ease-out forwards; /* Trigger animation */
}

.bold-text:hover {
  transform: rotate(-2deg) scale(1.02); /* Tilted hover effect */
  text-shadow: 4px 6px 16px rgba(0, 0, 0, 0.7); /* Enhanced shadow on hover */
}

/* Light Text */
.light-text {
  font-family: "Nunito", sans-serif;
  font-weight: 500;
  font-size: clamp(1.5rem, 4vw, 4.5rem);
  line-height: clamp(2rem, 5vw, 12.5rem);
  color: hsl(0, 0%, 100%);
  margin-top: 1rem;
  transition: transform 0.3s ease;
  opacity: 0; /* Start hidden */
  transform: translateY(20px); /* Start slightly below */
  animation: swipeUp 1.2s ease-out forwards 0.3s; /* Slight delay for staggered effect */
}

.light-text:hover {
  transform: scale(1.05);
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.6);
}

/* Keyframes for swipe-up animation */
@keyframes swipeUp {
  0% {
    opacity: 0;
    transform: translateY(20px); /* Start from below */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Settle in place */
  }
}


/* Scroll Down Button in Bottom-Right Corner */
.round-button {
  position: absolute;
  bottom: 45px; /* Distance from the bottom of the viewport */
  right: 20px; /* Distance from the right edge of the viewport */
  width: 3.5rem; /* Button size */
  height: 3.5rem;
  border-radius: 50%; /* Circular shape */
  border: none;
  background-color: white; /* White background */
  color: black; /* Black arrow icon */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem; /* Icon size */
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 10; /* Ensure it's above the video background */
}

.round-button:hover {
  background-color: rgba(255, 255, 255, 0.9); /* Hover effect */
}

/* Material Icons styling */
.arrow-down {
  font-size: 2rem; /* Adjust the icon size */
}

/* Responsive Button Adjustments */
@media screen and (max-width: 1024px) {
  .round-button {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 500px) {
  .round-button {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.25rem;
    bottom: 15px;
    right: 15px;
  }
}
</style>
