<template>
  <section class="main">
    <div class="our-worlds-cards">
      <OurWorldsCard
        v-for="(image, index) in images"
        :key="index"
        :pic="image.location_images"
        :title="image.title"
        @click="navigateToProjectDetail(image)"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import OurWorldsCard from '../../components/OurWorldsCard/OurWorldsCard.vue';
import { ApiResponse, Project, ImageDetails } from './OurWorlds'; // Import types

@Options({
  name: 'OurWorlds',
  components: {
    OurWorldsCard,
  },
})
export default class OurWorlds extends Vue {
  images: ImageDetails[] = [];

  async created() {
    await this.fetchImages();
  }

  async fetchImages() {
  try {
    const response = await axios.get<ApiResponse>(
      'https://www.datconsultancy.com/_next/data/N_ZdEUENL-4he4wQLVNM_/projects/residential.json?category=residential'
    );

    const projectsArray = response.data?.pageProps?.response;

    if (!projectsArray) {
      console.warn('No projects found in the response');
      return;
    }

    const projects: Project[] = Array.isArray(projectsArray)
      ? projectsArray.find((item: { data: { rows: Project[] } }) => item.data.rows)?.data.rows || []
      : [];

    if (!projects.length) {
      console.warn('No projects found in the response');
      return;
    }

    this.images = projects.map((project: Project) => ({
      title: project.title,
      subtitle: project.highlight || '',
      location_images: `https://api.datconsultancy.com/uploads/${project.image}`,
      id: String(project.id),
      projectSlug: project.slug, // Ensure projectSlug is mapped
    }));

    console.log('Fetched images:', this.images);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}


  // Navigate to the project detail page with the projectSlug
  navigateToProjectDetail(image: ImageDetails) {
    // Dynamically construct the URL for project detail
    const projectSlug = image.projectSlug;
    this.$router.push({ name: 'ProjectDetail', params: { projectSlug } });
  }
}
</script>

<style scoped lang="scss">
@use "./OurWorlds"; // Ensure relevant styles are defined here
</style>
