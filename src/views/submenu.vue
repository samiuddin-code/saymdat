<template>
    <div id="app" class="main-container">
      <header class="header">
        <div class="logo">
          <img src="../assets/logo-footer.png" alt="Discovery Land Company" />
        </div>
        <button @click="toggleMenu" class="menu-button">☰</button>
      </header>
  
      <aside v-if="menuOpen" class="sidebar">
        <button class="close-button" @click="toggleMenu">×</button>
        <nav>
          <ul>
            <li><a href="#">About DLC</a></li>
            <li><a href="#">Our Worlds</a></li>
            <li><a href="#">Experiences</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Gallery</a></li>
          </ul>
        </nav>
        <footer>
          <a href="#">Foundation</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </footer>
      </aside>
  
      <main class="content">
        <section class="video-section">
          <video autoplay muted loop>
            <source src="../assets/b.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
  
        <section class="intro-text">
          <h1>Discover your world</h1>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .main-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: #fff;
    background-color: #000;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #000;
  }
  
  .logo img {
    height: 40px;
  }
  
  .menu-button {
    font-size: 1.5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }
  
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background: #000;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  }
  
  .close-button {
    align-self: flex-end;
    font-size: 1.5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }
  
  .sidebar nav ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar nav ul li {
    margin: 1rem 0;
  }
  
  .sidebar nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
  }
  
  .sidebar footer {
    margin-top: auto;
  }
  
  .sidebar footer a {
    display: block;
    color: white;
    text-decoration: none;
    margin: 0.5rem 0;
  }
  
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .video-section video {
    width: 100%;
    height: auto;
    max-height: 60vh;
    object-fit: cover;
  }
  
  .intro-text {
    margin-top: 2rem;
  }
  
  .intro-text h1 {
    font-size: 2rem;
    color: white;
  }
  </style>