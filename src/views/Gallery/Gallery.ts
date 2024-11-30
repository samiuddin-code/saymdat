import { Options, Vue } from "vue-class-component";
import GalleryCard from "@/components/GalleryCard/GalleryCard.vue";

@Options({
  name: "Gallery",
  components: {
    GalleryCard,
  },
})
export default class Gallery extends Vue {
  images = [] as { title: string; gallery_images: string }[];

  created() {
    const titles = [
      "MS Villa interior",
      "Golf",
      "Lifestyle",
      "Landscapes",
      "Clubhouses",
      "Wellness",
    ];
    for (let i = 1; i <= 6; i++) {
      this.images.push({
        title: titles[i - 1],
        gallery_images: require(`@/assets/Gallery/gallery-${i}.png`),
      });
    }
  }

  navigateToDetail(index: number) {
    this.$router.push({ name: "ImageDetail", params: { index } });
  }
}
