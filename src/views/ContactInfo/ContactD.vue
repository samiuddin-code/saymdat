<template>
  <div class="landing-page">
    <!-- Header Section -->
    <!-- <header class="header">
      <h2 class="header-title">
        DAT - ENGINEERING Architect IN DUBAI
      </h2>
    </header> -->

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
          <button class="btn">
            BOOK A MEETING <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </button>
          <button class="btn">
            SEND A ENQUIRY <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </button>
          <button class="btn">
            CONTACT US <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </button>
          <button class="btn">
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

// Add the icons you want to use to the library
library.add(faArrowRight);

export default {
  name: "LandingPage",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
/* Styles for the Landing Page */
.landing-page {
  display: flex;
   
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  width: 110%;
  box-shadow: #333;
  position: relative;
  color: #fff;
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

/* Content Container (Text and buttons will remain sharp) */
.content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1600px;
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

  font-size: 3rem;
      line-height: 4rem;
      font-weight: 300;
      /* text-transform: uppercase; */
      letter-spacing: 2px;
   
}

.description {
  /* font-size: 1.2rem; */
  line-height: 1.5;
  margin-bottom: 2rem;

  font-size: 0.9rem;
    line-height: 1.8rem;
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
  border: 1px solid #fff;
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
  background-color:#137749;  /* Updated hover color to green */
}

.icon {
  color: #fff;
  margin-left: 8px; /* Space between text and arrow */
  font-size: 1.2rem; /* Adjust icon size */
}

/* Responsive Design */
@media screen and (max-width: 1024px) {
  .landing-page {
    padding: 1.5rem;
    height: auto; /* Adjust for smaller screens */
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
  }

  .buttons-container {
    padding-bottom: 100px;
  }

  .btn {
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
  }
}

@media screen and (max-width: 480px) {
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
    align-items: center;
  }

  .text-container {
    padding-right: 0;
    text-align: center;
  }

  .main-title {
    font-size: 1.5rem;
  }

  .description {
    font-size: 0.8rem;
    line-height: 1.3;
  }

  .buttons-container {
    padding-bottom: 50px;
  }

  .btn {
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
  }
}
</style>
