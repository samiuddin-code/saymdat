<template>
  <div class="contact-page">
    <!-- Background Header -->
    <div class="background-section">
      <div class="background-overlay">
        <h1>Contact Us</h1>
      </div>
    </div>

    <!-- Contact Methods Section -->
    <div class="contact">
      <div
        class="card"
        @mouseover="hoverCard('call')"
        @mouseleave="hoverCard('')"
      >
        <div class="icon">
          <img src="../../assets/phone.png" alt="Phone Icon" />
        </div>
        <h3>Call Us Now</h3>
        <p>Call us anytime from 09:00 till 18:00, Sat - Thu</p>
        <button class="action-button">CALL NOW</button>
      </div>
      <div
        class="card"
        @mouseover="hoverCard('mail')"
        @mouseleave="hoverCard('')"
      >
        <div class="icon">
          <img src="../../assets/email.png" alt="Email Icon" />
        </div>
        <h3>Mail Us Now</h3>
        <p>Email us anytime, we usually reply within 24 hours</p>
        <button class="action-button">MAIL NOW</button>
      </div>
    </div>

    <!-- Contact Details Section -->
    <section class="contact-section">
      <div class="contact-container">
        <div class="contact-info">
          <p class="sub-header">Need any help?</p>
          <h1>Get in touch with us</h1>
          <p class="description">
            We are excited to hear from you and explore how we can assist you
            with our exceptional software solutions. Let's build together!
          </p>
          <div class="contact-cards">
            <div class="contact-card">
              <div class="icon phone-icon"></div>
              <h3>Have any question?</h3>
              <p>Free +971 42 477 700</p>
            </div>
            <div class="contact-card">
              <div class="icon email-icon"></div>
              <h3>Write email</h3>
              <p>tender@datconsultancy.com</p>
            </div>
            <div class="contact-card">
              <div class="icon location-icon"></div>
              <h3>Visit</h3>
              <p>
                The Opus Tower by Zaha Hadid Office B803, Business Bay, Dubai
              </p>
            </div>
          </div>
        </div>
        <!-- Map -->
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.224876903569!2d55.26775827464351!3d25.1924444319089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f2ca9fd75%3A0x4d3bdc631ab1ea4c!2sThe%20Exchange%20Tower!5e0!3m2!1sen!2sae!4v1692970400000!5m2!1sen!2sae"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <div class="contact-form">
      <h2>Let's Discuss Your Project</h2>
      <form @submit.prevent="submitForm">
        <div class="form-grid">
          <div class="left-section">
            <div class="form-group">
              <label for="full-name">Full Name</label>
              <input
                v-model="form.fullName"
                type="text"
                id="full-name"
                placeholder="Full Name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="form-group">
              <label for="contact-number">Contact Number</label>
              <input
                v-model="form.contactNumber"
                type="tel"
                id="contact-number"
                placeholder="Contact Number"
                required
              />
            </div>
          </div>
          <div class="right-section">
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea
                v-model="form.message"
                id="message"
                rows="8"
                placeholder="Type your message here"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" class="submit-button">Send Enquiry →</button>
      </form>
    </div>
  </div>
  <!-- Bottom Section -->
  <BottomSection picture="AboutDlc.jpg" />
</template>

<script>
export default {
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        contactNumber: "",
        message: "",
      },
      hoveredCard: "",
    };
  },
  methods: {
    submitForm() {
      alert("Your enquiry has been submitted. We'll contact you soon!");
    },
    hoverCard(cardType) {
      this.hoveredCard = cardType;
    },
  },
};
</script>

  <style lang="scss" scoped>
  $primary-color: black;
  $secondary-color: black;
  $background-light: #ffffff;
  $text-color: $primary-color;
  $text-muted: #999;
  $transition: 0.3s ease;


  
  /* Main container */
.contact {
  display: flex;
  justify-content: center;
  gap: 10px; /* Space between the two cards */
  padding: 40px;
}
input,
textarea {
  width: 100%;
  padding: 15px 0; /* Increased padding for larger input area */
  border: none;
  border-bottom: 4px solid #ddd; /* Thicker underline */
  font-size: 1.5rem; /* Larger font size */
  margin-bottom: 25px;
  background-color: #f3f3f3; /* Background color for input fields */
  color: #333; /* Text color inside the input */
}
/* Textarea Styling */
#message {
  width: 99%;
  padding: 15px; /* Padding inside the textarea */
  font-size: 1.5rem; /* Larger font size */
  background-color: #ffffff; /* Light gray background color */
  border: 2px solid #ddd; /* Border on all sides */
  border-radius: 8px; /* Rounded corners */
  color: #333; /* Text color */
  resize: none; /* Disable resizing of the textarea */
}

#message:focus {
  border-color: #0066cc; /* Change border color on focus */
  outline: none; /* Remove the default outline */
}

/* Card container */
.card {
  width: 39.6%; /* Each card takes 40% of the screen width */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
/* Main Form Container */
.contact-form {
  max-width: 1500px;
  margin: 0 auto;
  padding: 40px;
  font-family: '', sans-serif;

}

.contact-form h2 {
  font-size: 2rem;
  text-align: left;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Form Grid - Two sections: Left for inputs, Right for the message */
.form-grid {
  display: grid;
  grid-template-columns: 1.5fr 1.5fr; /* Left section smaller (1fr), Right section larger (1.5fr) */
  gap: 20px; /* Space between columns and rows */
}

.left-section,
.right-section {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 0.9rem;
  font-weight: 500;
  
  margin-bottom: 8px;
}

/* Underline style for inputs */
input,
textarea {
  width: 100%;
  padding: px 0;
  color: #b81010;
  border: none;
  border-bottom: 2px solid #ccc; /* Only a bottom border */
  font-size: 1rem;
  padding: 1rem;
  font-family: 'Arial', sans-serif;
}

input:focus,
textarea:focus {
  border-color: #000;
  outline: none;
  border-bottom: 2px solid #000; /* Change bottom border color on focus */
}

/* Style for message textarea */
textarea {
  resize: none;
  margin-top: 3px;
  padding: 8px;
}

/* Submit Button */
.submit-button {
  margin-top: 15px;
  position: relative;
  left: 600px;
  bottom: 20px;
  padding: 20px 60px;
  border: none;
  border-radius: 4px;
  background: #e8e8e8;
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  display: inline-block;
  text-align: center; /* Ensures text is centered within the button */
  margin-left: auto; /* Centers horizontally */
  margin-right: auto; /* Centers horizontally */
}


.submit-button:hover {
  background: rgb(68, 138, 68);
  color: #fff;
  transition: background 0.3s ease, color 0.3s ease;
}

/* Responsive Design */
@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr; /* Single column layout for small screens */
    gap: 15px; /* Reduced spacing for smaller screens */
  }

  .left-section,
  .right-section {
    margin: 0 auto; /* Center sections for better alignment */
    width: 90%; /* Adjust width for smaller screens */
  }
  .submit-button {
    position: relative;
    left: 0; /* Reset positioning */
    bottom: 0;
    width: 100%; /* Full width for mobile screens */
    margin: 20px auto; /* Center horizontally */
  }
  .card {
    width: 100%; /* Full width on small screens */
    margin-bottom: 20px; /* Add spacing between cards */
  }
  .card {
    width: 100%; /* Full width on small screens */
    margin-bottom: 20px; /* Add spacing between cards */
  }

  /* Contact section responsiveness */
  .contact {
    flex-direction: column; /* Stack elements vertically */
    align-items: center; /* Center-align content */
    padding: 20px; /* Increased padding for small screens */
    gap: 20px; /* Adjust gap between elements */
  }

  /* Text area adjustments for better usability */
  #message {
    font-size: 1rem; /* Slightly smaller font size */
    padding: 10px; /* Adjusted padding */
  }

  /* Contact header adjustments */
  .contact-header h1 {
    font-size: 2rem; /* Smaller font size for headers */
    margin-bottom: 20px; /* Adjust spacing */
  }

  .contact-header p {
    font-size: 1rem; /* Reduced font size */
  }

  /* Location section */
  .location {
    flex-direction: column; /* Stack items vertically */
    gap: 20px; /* Reduced gap for smaller screens */
  }

  .location-image {
    width: 100%; /* Full width for images */
    border-radius: 10px; /* Maintain corner radius */
  }

  .location-info {
    width: 100%; /* Full width for info text */
    text-align: center; /* Center-align text */
  }

  .location-info h3 {
    font-size: 1.5rem; /* Adjust header size */
  }

  .location-info p {
    font-size: 0.9rem; /* Smaller font for paragraphs */
  }

  /* Contact cards */
  .contact-card {
    width: 100%; /* Full width for cards */
    flex-direction: column; /* Stack icon and text */
    align-items: center; /* Center-align content */
    text-align: center; /* Center-align text */
    gap: 10px; /* Adjust gap for stacked layout */
  }

  .icon {
    margin-bottom: 10px; /* Add spacing between icon and text */
  }

  /* Map container */
  .map-container iframe {
    height: 200px; /* Adjust height for smaller screens */
  }
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

/* Icon styles */
.icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Text styles */
h3 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

p {
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 16px;
}

/* Transparent button */
.action-button {
  padding: 10px 20px;
  font-size: 14px;
  color: #000000;
  background-color: transparent;
  border: 2px solid #000000;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.action-button:hover {
  background-color: #eef6ff;
  color: #000000;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%; /* Cards take full width on smaller screens */
  }
}

  .contact-page {
    font-family: '', sans-serif;
    background: $background-light;
    color: $text-color;
    // Added top padding for better separation
    .contact-section {
  padding: 50px;
  background-color: $background-light;
  display: flex;
  justify-content: center;
  align-items: center;

  .contact-container {
    display: flex;
    gap: 200px;
    flex-wrap: wrap;
    max-width: 1800px;

    .contact-info {
      flex: 1;
      min-width: 300px;

      .sub-header {
        color: $secondary-color;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 10px;
      }

      h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 15px;
      }

      .description {
        color: $text-muted;
        font-size: 1rem;
        margin-bottom: 30px;
      }

      .contact-cards {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .contact-card {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

          .icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: white;
            background: $secondary-color;

            &.phone-icon::before {
              content: "\260E"; // Phone icon (Unicode)
            }

            &.email-icon::before {
              content: "\2709"; // Envelope icon (Unicode)
            }

            &.location-icon::before {
              content: "\1F4CD"; // Location pin icon (Unicode)
            }
          }

          h3 {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 5px;
          }

          p {
            color: $text-muted;
            font-size: 1rem;
          }
        }
      }
    }

    .map-container {
      flex: 1;
      min-width: 310px;

      iframe {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
    .background-section {
    background-image: url('../../assets/experiences.png'); // Random placeholder
    background-size: cover;
    background-position: center;
    height: 900px; // Full-screen height
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .background-overlay {
 
      color: white;
      text-align: center;
      padding: 20px;
      width: 100%;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2rem;
    }
  }

    // Header Styling
    .contact-header {
      text-align: center;
      margin-bottom: 90px; // Increased spacing for separation
      
      h1 {
        font-size: 3rem;
        font-weight: bold;
        color: $primary-color;
        text-transform: uppercase;
        margin-bottom: 35px;
      }
  
      p {
        font-size: 1.2rem;
        color: $text-muted;
      }
    }

  
    // Location Section
    .location {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap; // Better responsiveness
      gap: 30px;
      margin-bottom: 60px; // More spacing
  
      .location-image {
        width: 45%; // Larger width
        border-radius: 15px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
      }
  
      .location-info {
        max-width: 500px;
  
        h3 {
          font-size: 1.8rem;
          font-weight: bold;
          color: $primary-color;
          margin-bottom: 15px;
        }
  
        p {
          font-size: 1rem;
          color: $text-muted;
          margin-bottom: 8px;
  
          &.phone {
            font-weight: bold;
            color: $secondary-color;
          }
        }
      }
    }
  
    // Contact Form
  
  }
  </style>
  