<template>
  <div class="landing-page">
    <!-- Main Content Section -->
    <main class="content">
      <div class="text-container">
        <h1 class="main-title">
          Innovative Design Visualization and Execution
        </h1>
        <p class="description">
          We are committed to delivering top-notch consulting and design services
          with the priority of integrating clients' requirements whilst adhering
          to building standards. Every project's standards and purposes are
          prioritized to maximize the possibility of solutions needed to achieve
          the highest points of results. As global building consultants, we are
          committed to providing broad engineering capabilities and versatility to
          exceed the expectations of our respected clients. At DAT Architecture,
          we innovate your design ideas! Our collaborative techniques expand the
          possibilities of distinctive results. Let's talk about your ideas,
          visualize the conjectures, and achieve the expectations.
        </p>
      </div>

      <div class="buttons-container">
        <div class="buttons">
          <!-- All buttons now navigate to ContactPage -->
          <button class="btn" @click="navigateToContactPage">
            BOOK A MEETING <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </button>
          <button class="btn" @click="navigateToContactPage">
            SEND A ENQUIRY <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </button>
          <button class="btn" @click="navigateToContactPage">
            CONTACT US <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </button>
          <button class="btn" @click="navigateToContactPage">
            SEND A WHATSAPP <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'vue-router'; // Import useRouter from Vue Router

// Add the icons you want to use to the library
library.add(faArrowRight);

export default {
  name: "LandingPage",
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const router = useRouter(); // Get the router instance

    // Method to navigate to ContactPage for all buttons
    const navigateToContactPage = () => {
      router.push({ name: 'ContactPage' }); // Navigate to the ContactPage
    };

    return { navigateToContactPage };
  },
};
</script>

<style scoped>
/* Styles for the Landing Page */
.landing-page {
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  padding-left: 9rem;
  padding-bottom: 2rem;
  padding-top: 3.5rem;
  /* padding: 2rem; */
  width: 100%;
  box-shadow: #333;
  position: relative;
  color: #fff;
  font-size: 0.8rem;
    line-height: 1.6rem;
    padding-right: -2rem;
    font-family: 'Nunito', sans-serif;
  height: 75vh; /* Full screen height */
}

/* Background Container */
.landing-page::before {
  
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../../assets/FOOTER.png') no-repeat center center; /* Use the provided image */
  background-size: cover;
  filter: brightness(0.6) blur(1px); /* Apply blur and reduce brightness */
  z-index: -1; /* Ensure the background stays behind the content */
}
/* For screens larger than 1600px */
@media screen and (min-width: 2000px) {
  .landing-page {
    display: flex;
   
   flex-direction: column;
   align-items: flex-start;
   padding-left: 10rem;
   padding-bottom: 14rem;
   padding-top: 4.5rem;
   /* padding: 2rem; */
   width: 100%;
   box-shadow: #333;
   position: relative;
   color: #fff;
   font-size: 0.8rem;
    line-height: 1.6rem;
    padding-right: -2rem;
    font-family: 'Nunito', sans-serif;
   height: 75vh;
  }

  .content {
    max-width: 2000px; /* Increase the maximum width for content */
    justify-content: space-between;
  }

  .text-container {
    padding-right: 12rem; /* Add more spacing for larger screens */
  }

  .main-title {
    font-size: 4.5rem;
    line-height: 3.5rem;
    margin-bottom: 4rem;
  }

  .description {
    font-size: 4rem;
    line-height: 1.8rem;
    font-size: 0.8rem;
    line-height: 1.6rem;
    padding-right: 30rem;
    font-family: 'Nunito', sans-serif;
  }

  .btn {
    padding: 1.8rem 2.8rem; /* Larger padding for buttons */
    font-size: 0.8rem;
    line-height: 1.6rem;
    padding-right: -2rem;
    font-family: 'Nunito', sans-serif;
    width: 50%; /* Adjust button width */
  }

  .icon {
    font-size: 1.5rem; /* Increase icon size */
  }
}

/* Content Container (Text and buttons will remain sharp) */
.content {
  
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 2200px;
  margin: 0 auto;
  height: 100%; /* Ensure full height layout */
}

.text-container {
  flex: 1; /* Takes up 50% of the screen */
  padding-right: 10rem;
}

.main-title {
  /* font-size: 2.5rem; */
  /* font-weight: bold; */
  padding-top: 2rem;
  margin-bottom: 4rem;
  display: block;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 2px;
      top: 20px;
      position: relative;
      /* margin-bottom: 30px; */
 
  /* font-size: 3rem; */
      /* line-height: 4rem; */
      /* font-weight: 300; */
      /* text-transform: uppercase; */
      /* letter-spacing: 2px; */
   
}

.description {
  /* font-size: 1.2rem; */
  /* line-height: 1.5; */
  margin-bottom: 2rem;
  font-size: 0.8rem;
    line-height: 1.6rem;
    padding-right: -2rem;

  /* font-size: 0.9rem; */
    /* line-height: 1.8rem; */
    /* padding-right: 12rem; */
}

.buttons-container {
  flex: 0.5; /* Takes up 50% of the screen */
  display: flex;
  padding-bottom: 150px;
  justify-content: center;
  align-items: center;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%; /* Ensure it takes up the full available width */
}

.btn {
  background-color: transparent;
  color: #fff;
  border: 1.5px solid #fff;
  padding: 1.5rem 2.5rem; /* Adjust padding for better alignment */
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  box-sizing: border-box; /* Ensure padding doesn't affect width */
}

.btn:hover {
  background-color:#fff; 
  color: black; /* Updated hover color to green */
}

.icon {
  color: #fff;
  margin-left: 8px; /* Space between text and arrow */
  font-size: 1.2rem; /* Adjust icon size */
}

/* Responsive Design */

/* For screens between 1024px and 1700px */
@media screen and (max-width: 1700px) {
  .landing-page {
  display: flex;
   
  flex-direction: column;
  align-items: flex-start;
  padding-left: 9rem;
  padding-bottom: 2rem;
  padding-top: 3.5rem;
  /* padding: 2rem; */
  width: 100%;
  box-shadow: #333;
  position: relative;
  color: #fff;
  font-family: 'Nunito', sans-serif;
  height: 75vh; /* Full screen height */
}

  .header-title {
    margin-left: 2rem;
    font-size: 1.5rem;
    top: 3rem;
  }

  /* .content {
    padding-top: -2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  } */

  .text-container {
    padding-right: 3rem;
  }

  .main-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .description {
    font-size: 0.8rem;
  }

  .buttons-container {
    padding-bottom: 20px;
  }

  .btn {
    padding-top: 2rem;
    padding: 1.2rem 1.8rem;
    font-size: 1rem;
  }
}

/* For screens between 768px and 1024px */
@media screen and (max-width: 1024px) {
  .landing-page {
    padding: 1.5rem;
    height: auto;
  }

  .header-title {
    margin-left: 4rem;
    font-size: 1.2rem;
    top: 3rem;
  }

  .content {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }

  .text-container {
    padding-right: 2rem;
  }

  .main-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .description {
    font-size: 1rem;
  }

  .buttons-container {
    padding-bottom: 150px;
  }

  .btn {
    padding: 1rem 1.5rem;
    font-size: 0.9rem;
  }
}

/* For screens between 500px and 768px */
@media screen and (max-width: 768px) {
  .header-title {
    margin-left: 2rem;
    font-size: 1rem;
    top: 2rem;
  }

  .text-container {
    padding-right: 1rem;
  }

  .main-title {
    font-size: 1.8rem;
  }

  .description {
    font-size: 0.9rem;
    font-size: 0.8rem;
    line-height: 1.6rem;
    padding-right: -2rem;
    font-family: 'Nunito', sans-serif;
  }

  .buttons-container {
    padding-bottom: 100px;
  }

  .btn {
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
  }
}

/* For screens between 480px and 500px */
@media screen and (max-width: 500px) {
  .landing-page {
    align-items: center;
    padding: 1rem;
  }

  .header-title {
    margin-left: 0;
    text-align: center;
    font-size: 0.9rem;
    top: 1rem;
  }

  .content {
    flex-direction: column;
    align-items: center;
  }

  .text-container {
    padding-right: 0;
    text-align: center;
    width: 100%;
  }

  .main-title {
    font-size: 1.5rem;
    line-height: 1.8rem;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 0.8rem;
    line-height: 1.3;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    line-height: 1.6rem;
    padding-right: -2rem;
    font-family: 'Nunito', sans-serif;
  }

  .buttons-container {
  }

  .btn {
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
    width: 110%;
  }

  .icon {
    font-size: 1rem;
    margin-left: 6px;
  }
}


</style>
