<template>
  <div class="landing-page">
    <!-- Header Section -->
    <header class="header">
      <h2 class="header-title">
        DAT - ENGINEERING Artitect IN DUBAI  & INDIA
      </h2>
    </header>

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
            SEND ENQUIRY <span>&#9658;</span>
          </button>
          <button class="btn">
            BOOK A MEETING <span>&#9658;</span>
          </button>
          <button class="btn">
            SEND WHATSAPP <span>&#9658;</span>
          </button>
          <button class="btn">
            CALL US <span>&#9658;</span>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
export default {
  name: "LandingPage",
  data() {
    return {
      // Array of background color options
      backgrounds: [
        'linear-gradient(to right, #ff7e5f, #feb47b)',
        'linear-gradient(to right, #6a11cb, #2575fc)',
        'linear-gradient(to right, #ff512f, #dd2476)',
        'linear-gradient(to right, #00b4db, #0083b0)',
        'linear-gradient(to right, #f7b733, #fc4a1a)',
      ],
      // Randomly selected background
      randomBackground: '',
    };
  },
  created() {
    // Select a random background from the list
    this.randomBackground = this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)];
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
  box-shadow: #333;
  opacity: 1.5;

  background: linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(https://images.unsplash.com/photo-1614030424754-24d0eebd46b2);

  background: url('../../assets/AboutDlc/bacgrond.png') no-repeat center center;
  background-size: cover;
  color: #fff;
  font-family: 'Nunito', sans-serif;
  height: 75vh; /* Full screen height */
}

.header {
  margin-bottom: 6rem;
}

.header-title {
  color: #ffffff;
  font-size: 1.5rem;
  margin-left: 8rem;
  position: relative;
  top: 6rem;
  text-transform: uppercase;
}

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
  font-size: 2.5rem;
  font-weight: bold;
  padding-top: 2rem;
  margin-bottom: 4rem;
}

.description {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.buttons-container {
  flex: 0.5; /* Takes up 50% of the screen */
  display: flex;
  padding-bottom: 280px;
  justify-content: center;
  align-items: center;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.btn {
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 2rem 2.5rem;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.btn:hover {
  background-color: #333;
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
