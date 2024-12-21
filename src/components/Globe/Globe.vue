<template>
  <div class="container">
    <!-- Top Section -->
    <div class="top-section">
      <div class="text">

        <h1>Unlock the Future with Smart Home Automation System</h1>
        <p class="description">
          Our villas seamlessly integrate intelligent home technology with sumptuous lifestyles. At the tap or voice command, control every aspect of your home, from automated lighting and climate control to energy-efficient systems designed to your preference. Every single aspect is carefully crafted for your comfort, efficiency, and nobility. Driven by state-of-the-art innovations at your beck and call, your villa transforms from a mere space into a sophisticated living experience. Welcome to the future of intelligent, elevated living. Experience the epitome of modern luxury, where elegance meets cutting-edge functionality. 
        </p>
      </div>
      <div class="car-image">
        <img src="../../assets/34.png" alt="Car" />
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="bottom-section">
      <div class="bike-image">
        <img src="../../assets/12.png" alt="Bicycle" />
      </div>
      <div class="text">

        <h1>Where Comfort Meets Conscious Living</h1>
        <p class="description">
          Our villa is powered by the sun and designed for sustainability. We believe that true indulgence should leave a positive footprint, blending comfort with care for the planet. With solar panels fueling clean energy and energy-efficient power glasses, here every little detail is a step towards a greener future.Every detail of the villa reflects a commitment to a greener, healthier planet. From the construction materials sourced sustainably to water-saving fixtures that reduce waste, our dedication to the environment is woven into the fabric of this space. Smart energy monitoring systems ensure efficient power usage, minimizing waste while maximizing comfort. Lush green landscaping further enhances the eco-friendly design, creating a serene haven that thrives alongside nature.







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
  color: #333;
  line-height: 1.8;
  width: 80%;
  height: auto; /* Flexible height */
  margin: 0 auto;
  padding: 20px 15px; /* Slight padding for a balanced look */
}

@media screen and (max-width: 768px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: auto; /* Flexible for mobile */
  }
}

/* Top Section */
.top-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px; /* Slightly increased padding */
  background-color: #f9fafb;
  gap: 35px; /* Added a small gap between elements */
}

.top-section .text {
  flex: 1;
  padding: 1.5rem; /* Maintained consistent spacing */
}

.top-section h1 {
  font-size: 2rem;
  line-height: 2.6rem; /* Slightly increased line-height */
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px; /* Slight gap below heading */
}

.top-section .description {
  font-size: 0.95rem;
  line-height: 1.7rem; /* Balanced line spacing */
  margin-bottom: 8px; /* Slightly increased gap */
}

.top-section .car-image {
  position: relative;
  top: 0.8rem; /* Adjusted positioning */
  padding-right: 1.5rem; /* Slight padding */
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.top-section .car-image img {
  max-width: 100%;
}

@media screen and (max-width: 768px) {
  .top-section {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    gap: 10px; /* Adjusted gap for mobile */
  }

  .top-section .text {
    margin-bottom: 12px; /* Slight margin */
  }

  .top-section h1 {
    font-size: 2rem;
    line-height: 2.3rem; /* Compact spacing for smaller screens */
  }

  .top-section .car-image {
    justify-content: center;
    margin-top: 12px; /* Slight gap above image */
  }
}

/* Bottom Section */
.bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px; /* Slightly increased padding */
  background-color: #f9fafb;
  gap: 15px; /* Added consistent gap */
}

.bottom-section .bike-image {
  padding-left: 1.5rem; /* Balanced padding */
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.bottom-section .bike-image img {
  max-width: 100%;
}

.bottom-section .text {
  flex: 1;
  padding-top: 1.8rem; /* Slight spacing for separation */
  padding-left: 30px; /* Adjusted left padding */
  font-weight: 300;
  font-size: 0.95rem;
}

.bottom-section h1 {
  font-size: 2rem;
  line-height: 2.6rem; /* Balanced line-height */
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px; /* Slight gap below heading */
}

.bottom-section .description {
  font-size: 0.95rem;
  line-height: 1.7rem; /* Slightly relaxed spacing */
  margin-bottom: 8px; /* Increased gap */
}

@media screen and (max-width: 768px) {
  .bottom-section {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 15px; /* Balanced padding for mobile */
    gap: 12px; /* Added consistent spacing for elements */
  }

  .bottom-section .bike-image {
    justify-content: center;
    margin-top: 12px; /* Adjusted gap above image */
  }

  .bottom-section .text {
    padding-left: 0;
  }

  .bottom-section h1 {
    font-size: 2rem;
    line-height: 2.3rem; /* Adjusted spacing for compactness */
  }

  .bottom-section .description {
    font-size: 0.95rem;
    line-height: 1.6rem; /* Balanced line spacing */
    margin-bottom: 10px; /* Slight increase in spacing */
  }
}


</style>


