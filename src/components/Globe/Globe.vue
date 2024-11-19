<template>
  <div class="container">
    <!-- Map -->
    <div id="map" class="map"></div>

    <!-- Side Panel: Rendered only when showPanel is true -->
    <div v-if="showPanel" class="side-panel">
      <div class="panel-header">
        <h2>DAT Architecture - The Opus by Omniyat</h2>
        <button @click="closePanel" class="close-btn">×</button>
      </div>
      <div class="panel-content">
        <p><strong>Office:</strong> B803</p>
        <p><strong>Address:</strong> Al A'amal St, Business Bay, Dubai, United Arab Emirates</p>
        <p><strong>Description:</strong> Ultra-luxury office space in a stunning building. Everything is top-notch level.</p>
        <div class="office-image">
          <img src="../../../public/office.png" alt="Office" loading="lazy"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

export default defineComponent({
  name: "GoogleMapWithSidePanel",
  data() {
    return {
      map: null as google.maps.Map | null,
      marker: null as google.maps.Marker | null,
      showPanel: false, // Panel is hidden by default (not rendered)
      center: { lat: 25.1836, lng: 55.2610 }, // Coordinates for the office
      zoom: 16,
    };
  },
  mounted() {
    this.loadMap();
  },
  methods: {
    loadMap() {
      const loader = new Loader({
        apiKey: "AIzaSyDeBff6_eno9PbFTJ8JyULPvlbHFTg1Jlo", // Replace with your actual API key
        version: "weekly",
        libraries: ["places"],
      });

      loader.load().then(() => {
        // Initialize the map once the Google Maps API is loaded
        this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: this.center,
          zoom: this.zoom,
        });

        // Create the marker
        this.marker = new google.maps.Marker({
          position: this.center,
          map: this.map,
          title: "DAT Architecture - The Opus by Omniyat",
        });

        // Add event listener to the marker to open the side panel
        this.marker.addListener("click", this.openPanel);
      });
    },
    openPanel() {
      console.log("Marker clicked, opening side panel!");
      this.showPanel = true; // Show the side panel when marker is clicked
    },
    closePanel() {
      this.showPanel = false; // Close the side panel when close button is clicked
    },
  },
});
</script>

<style scoped>
.container {
  position: relative; /* Make container relative for positioning the panel inside */
  height: 100vh; /* Full screen height */
}

.map {
  height: 100%;
  width: 100%; /* Map takes full width */
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* Side Panel */
.side-panel {
  position: absolute; /* Absolute positioning inside the map container */
  top: 0;
  right: 0px; /* Initially off-center to the left */
  width: 350px; /* Fixed width for the panel */
  height: 100%; /* Full height of the map container */
  background: #2d2d2d;
  color: #fff;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  overflow-y: auto; /* Allow vertical scrolling */
  z-index: 0; /* Make sure the panel is on top */
}

.side-panel.panel-open {
  transform: translateX(250px); /* Slide the panel in towards the center */
}

.side-panel .panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #fff;
  padding-bottom: 10px;
}

.side-panel h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.close-btn {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

.side-panel .panel-content {
  padding-top: 20px;
}

.side-panel p {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.office-image {
  width: 100%;
  height: auto;
  margin-top: 20px;
}

.office-image img {
  width: 100%;
  /* border-radius: 10px; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Responsive design adjustments */
@media (max-width: 768px) {
  .container {
    /* For mobile, the container stays the same */
  }

  .side-panel {
    width: 100%;
    transform: translateX(100%); /* Offscreen from the left on mobile */
  }

  .side-panel.panel-open {
    transform: translateX(0); /* Slide panel in for mobile */
  }

  .side-panel .panel-header h2 {
    font-size: 1.2rem;
  }

  .side-panel .close-btn {
    font-size: 1.2rem;
  }
}
</style>
