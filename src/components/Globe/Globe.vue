<template>
  <div class="container">
    <!-- Top Section -->
    <div class="top-section">
      <div class="text">
        <p class="tagline">Smart Home Automation System</p>
        <h1>Unlock the Future with Smart Home Automation System</h1>
        <p class="description">
          Our villas seamlessly integrate intelligent home technology with sumptuous lifestyles. At the tap or voice command, control every aspect of your home, from automated lighting and climate control to energy-efficient systems designed to your preference. Every single aspect is carefully crafted for your comfort, efficiency, and nobility. Driven by state-of-the-art innovations at your beck and call, your villa transforms from a mere space into a sophisticated living experience. Welcome to the future of intelligent, elevated living.
        </p>
      </div>
      <div class="car-image">
        <img src="../../assets/1.png" alt="Car" />
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="bottom-section">
      <div class="bike-image">
        <img src="../../assets/2.png" alt="Bicycle" />
      </div>
      <div class="text">
        <p class="tagline">Sustainable Luxuryes</p>
        <h1>Where Comfort Meets Conscious Living</h1>
        <p class="description">
          Our villa is powered by the sun and designed for sustainability. We believe that true indulgence should leave a positive footprint, blending comfort with care for the planet. With solar panels fueling clean energy and energy-efficient power glasses, here every little detail is a step towards a greener future.Every detail of the villa reflects a commitment to a greener, healthier planet. From the construction materials sourced sustainably to water-saving fixtures that reduce waste, our dedication to the environment is woven into the fabric of this space.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style scoped>
/* General Container */
.container {
  font-family: "na", sans-serif;
  color: #333;
  line-height: 1.8;
  width: 77%;
  height: 62rem;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: auto; /* Adjust height for flexible content */
  }
}

/* Top Section */
.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #f9fafb;
  /* border-radius: 12px; */
}

.top-section .text {
  
  flex: 1;
  padding-right: 20px;
  
}

.top-section .tagline {
  font-size: 1.8rem;
  color: gray;
  margin-bottom: 10px;
}

.top-section h1 {
  display: block;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 2px;
      top: 20px;
      position: relative;
      margin-bottom: 30px;
 
}

.top-section .description {
  /* font-size: 0.9rem; */
  margin-bottom: 20px;
  font-size: 0.8rem;
    line-height: 1.6rem;
    padding-right: -2rem;

}

.top-section .car-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.top-section .car-image img {
  max-width: 100%;
  /* border-radius: 12px; */
}

@media screen and (max-width: 768px) {
  .top-section {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .top-section .text {
    padding-right: 0;
    
    margin-bottom: 20px;
  }

  .top-section h1 {
    font-size: 2rem;
    line-height: 2.5rem; /* Better spacing on smaller screens */
  }

  .top-section .description {
    /* font-size: 0.85rem; */
    font-size: 0.8rem;
    line-height: 1.6rem;
    padding-right: -2rem;
  }

  .top-section .car-image {
    justify-content: center;
    margin-top: 20px;
  }
}

/* Bottom Section */
.bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  background-color: #f9fafb;
  /* border-radius: 0px; */
  margin-top: 80px;
}

.bottom-section .bike-image {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.bottom-section .bike-image img {
  max-width: 100%;
  /* border-radius: 12px; */
}
.top-section, .bottom-section {
    padding: 30px; /* Add generous padding for a spacious feel */
  }
.bottom-section .text {
  flex: 1;
  padding-left: 20px;
  font-weight: 300;
  font-size: 0.9rem;
}

.bottom-section .tagline {
  font-size: 1.8rem;
  color: gray;
  margin-bottom: 10px;
}

.bottom-section h1 {
  display: block;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 2px;
      top: 20px;
      position: relative;
      margin-bottom: 30px;
}

.bottom-section .description {
  font-size: 0.8rem;
    line-height: 1.6rem;
    padding-right: -2rem;
    padding-bottom: 1rem;
}

@media screen and (max-width: 768px) {
  .bottom-section {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 20px;
  }

  .bottom-section .bike-image {
    justify-content: center;
    margin-top: 20px;
  }

  .bottom-section .text {
    padding-left: 0;
  }

  .bottom-section h1 {
    font-size: 2rem;
    line-height: 2.5rem; /* Adjust line height */
  }

  .bottom-section .description {
    font-size: 0.8rem;
    line-height: 1.6rem;
    padding-right: -2rem;
  }
}
</style>


