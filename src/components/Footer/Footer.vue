<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-logo-section">
        <img src="../../assets/logob.png" alt="dat" class="footer-logo" loading="lazy"/>
        <p class="footer-description">
          We are committed to delivering top-notch consulting and design services with the priority of integrating clients' requirements whilst adhering to building standards. Every project's standards and purposes are prioritized to maximize the possibility of solutions needed to achieve the highest points of results.
        </p>
        <div class="footer-contact">
          <p class="footer-contact-text">Email: <a href="mailto:tender@datconsultancy.com">tender@datconsultancy.com</a></p>
          <p class="footer-contact-text">Phone: <a href="tel:+971 42 427 700">+971 42 427 700</a></p>
        </div>
      </div>

      <div class="footer-links-section">
        <div class="footer-column">
          <h3>Links</h3>
          <ul>
            <li><router-link to="/" class="footer-link">Home</router-link></li>
            <li><router-link to="/experiences" class="footer-link">Our Expertise</router-link></li>
            <li><router-link to="/our-worlds" class="footer-link">Our Projects</router-link></li>
            <li><router-link to="/about-dlc" class="footer-link">About Us</router-link></li>
            <li><router-link to="/gallery" class="footer-link">Gallery</router-link></li>
            <li><router-link to="/terms-and-conditions" class="footer-link">Terms and Conditions</router-link></li>
            <li><router-link to="/privacy-policy" class="footer-link">Privacy Policy</router-link></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><router-link to="/news" class="footer-link">Blog</router-link></li>
          </ul>
          <h3>Follow Us</h3>
          <div class="social-icons">
            <a href="https://www.linkedin.com/company/dat-architects" target="_blank">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/dat.architects/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@dat_architects" target="_blank">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
          <!-- <div class="award-logo">
            <img src="../../assets/logob.png" alt="Award" loading="lazy" />
          </div> -->
        </div>

        <div class="footer-column">
          <h3>Company</h3>
          <ul>
            <li><router-link to="/about-us" class="footer-link">About Us</router-link></li>
            <li><router-link to="/careers" class="footer-link">Careers</router-link></li>
          </ul>
          <h3>Offices</h3>
          <p class="footer-contact-text"><strong>Dubai:</strong> The Opus Tower by Zaha Hadid, Office B803, Business Bay, Dubai</p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="language-switcher">
        <button class="language-button">
          <img src="../../assets/logoa.png" alt="English" loading="lazy"/> EN
        </button>
      </div>
      <p>&copy; 2024 DAT Architecture. All rights reserved.</p>
    </div>
  </footer>
</template>

<script type="module" src="./Footer.ts"></script>

<style scoped lang="scss">
  @use "./Footer";
</style>
