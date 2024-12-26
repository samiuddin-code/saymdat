import { Options, Vue } from "vue-class-component";
import $ from "jquery"; // Slick requires jQuery
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";

interface CarouselItem {
  title: string;
  pic: string;
  location: string;
}

@Options({
  name: "ExploreCarousel",
  props: {
    carousel: {
      type: Array as () => CarouselItem[],
      required: true,
    },
    worldPath: {
      type: String,
      required: true,
    },
    carouselH1: {
      type: String,
      required: true,
    },
    carouselH2: {
      type: String,
      required: true,
    },
  },
})
export default class ExploreCarousel extends Vue {
  // Props
  carousel!: CarouselItem[];
  worldPath!: string;
  carouselH1!: string;
  carouselH2!: string;

  // Methods
  navigateToDetails(title: string) {
    this.$router.push({ path: `/details/${encodeURIComponent(title)}` });
  }

  goLeft() {
    $(".slider").slick("slickPrev"); // Move to previous slide
  }

  goRight() {
    $(".slider").slick("slickNext"); // Move to next slide
  }
  mounted() {
    $(".slider").slick({
      infinite: true,
      slidesToShow: 3, // Show 4 slides by default
      slidesToScroll: 1, // Scroll 1 slide at a time
      dots: true, // Optional: Show navigation dots
      arrows: true, // Optional: Show navigation arrows
      responsive: [
        {
          breakpoint: 1200, // Large screens (desktops)
          settings: {
            slidesToShow: 4, // Show 4 slides
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024, // Medium screens (tablets)
          settings: {
            slidesToShow: 3, // Show 3 slides
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // Small screens (portrait tablets, small laptops)
          settings: {
            slidesToShow: 2, // Show 2 slides
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480, // Extra small screens (mobile devices)
          settings: {
            slidesToShow: 1, // Show 1 slide
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
}
