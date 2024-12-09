<template>
  <section class="image-gallery">
    <h1>Gallery</h1>
    <div class="gallery-grid">
      <div 
        v-for="(image, index) in images" 
        :key="index" 
        class="gallery-item"
        @click="openModal(index)"
      >
        <img :src="image.gallery_images" :alt="image.title" />
      </div>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">×</button>
        <!-- Display Image, Title, and Description in the Modal -->
        <img :src="currentImage.gallery_images" :alt="currentImage.title" />
        <h2>{{ currentImage.title }}</h2>
        <p>{{ currentImage.description }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "GalleryWithModal",
})
export default class GalleryWithModal extends Vue {
  isModalOpen = false; // State to toggle the modal
  selectedIndex = -1;  // Index of the currently selected image

  get images() {
    return [
      {
        title: "MS Villa interior",
        description: "A modern villa with stunning interior design.",
        gallery_images: require("@/assets/Gallery/gallery-1.png"),
      },
      {
        title: "Golf",
        description: "Relaxing golf courses with lush green surroundings.",
        gallery_images: ("https://d2rxnzr2197voo.cloudfront.net/assets/Gallery/gallery-2.png"),
      },
      {
        title: "Lifestyle",
        description: "A modern and luxurious lifestyle.",
        gallery_images: ("https://d2rxnzr2197voo.cloudfront.net/assets/Gallery/gallery-3.png"),
      },
      {
        title: "Landscapes",
        description: "Beautiful landscapes to explore.",
        gallery_images: ("https://d2rxnzr2197voo.cloudfront.net/assets/Gallery/gallery-4.png"),
      },
      {
        title: "Clubhouses",
        description: "Elegant clubhouses for recreation.",
        gallery_images:("https://d2rxnzr2197voo.cloudfront.net/assets/Gallery/gallery-5.png"),
      },
      {
        title: "Wellness",
        description: "Spaces for relaxation and wellness.",
        gallery_images: ("https://d2rxnzr2197voo.cloudfront.net/assets/Gallery/gallery-6.png"),
      },
    ];
  }

  get currentImage() {
    return this.selectedIndex !== -1 ? this.images[this.selectedIndex] : {};
  }

  openModal(index: number) {
    this.selectedIndex = index;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedIndex = -1;
  }
}
</script>

<style scoped lang="scss">
.image-gallery {
  padding: 2rem;
  background-color: #000000;
  padding-top: 10rem;
  position: relative;
  height: 800px;
  text-align: center;

  h1 {
    margin-bottom: 16px;
    font-size: 24px;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;

    .gallery-item {
      cursor: pointer;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      img {
        max-width: 100%;
        border-bottom: 1px solid #ddd;
      }
    }
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background: white;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    position: relative;

    img {
      max-width: 90%;
      max-height: 70vh;
      margin-bottom: 16px;
    }

    h2 {
      font-size: 24px;
      margin-bottom: 8px;
    }

    p {
      font-size: 16px;
      color: #666;
    }

    .close-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
  }
}
</style>
