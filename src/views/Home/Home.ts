import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue"
import TxtImg2 from "@/components/TxtImg2/TxtImg2.vue"
import ExploreCarousel from "@/components/ExploreCarousel/ExploreCarousel.vue";
import Globe from "@/components/Globe/Globe.vue";
import Panels from "@/components/Panels/Panels.vue";
import ContactD from "../ContactInfo/ContactD.vue";

@Options({
  name:"Home",
  components: {
    Title,
    TxtImg2,
    ExploreCarousel,
    Globe,
    Panels,
    ContactD
  },
  data() {
    return {
      elements: {} as {
        boldText: string;
        lightText: string;
        video: string;
        header1: string;
        header2: string;
        paragraph: string;
        imgRight: string;
        imgLeft: string;
        carousel: [];
        carouselH1: string;
        carouselH2: string;
      }[],
    };
  },
  created(){
    this.elements = {
     
      boldText: "  Experience",
      lightText: "   the Opulent luxury living",
      video: require("@/assets/discovery.mp4"),
      header1: "Discover",
      header2: " Luxury Beyond Limits",
      paragraph: "Discover a new era of luxury with DAT, home that creates an aura of exceptionally crafted luxury, comfort, and eternal elegance combined. Every detail is added thoughtfully to enhance your lifestyle and living experience. Step into a home that is not only designed to impress, but inspire. At DAT, we translate your dream into reality,  setting a new standard for what luxury living truly means.",
      imgRight: require('@/assets/TxtImg2/TxtImg1.jpg'),
      imgLeft: require('@/assets/TxtImg2/TxtImg2.png'),
      carousel: [
   
        {
          pic: "m10.png",
          title: "DISTRICT ONE MANSION",
          location: `DUBAI, UAE`,
        },
        {
          pic: "AMNVILLA.jpg",
          title: "OBSIDIAN VILLA",
          location: `UAE, DUBAI`,
        },
        {
          pic: "AA.jpg",
          title: "ELYSIUM OPULENCE VILLA",
          location: `UAE, DUBAI `,
        },
        {
          pic: "ms2.png",
          title: " Opulent Oasis",
          location: `UAE, DUBAI`,
        },
        {
          pic: "nor.png",
          title: "Eclat Eterné Villa  ",
          location: `UAE, DUBAI`,
        },
        {
          pic: "m10.png",
          title: "DISTRICT ONE MANSION",
          location: `DUBAI, UAE`,
        },
        {
          pic: "AMNVILLA.jpg",
          title: "OBSIDIAN VILLA",
          location: `UAE, DUBAI`,
        },
        {
          pic: "AA.jpg",
          title: "ELYSIUM OPULENCE VILLA",
          location: `UAE, DUBAI `,
        },
        {
          pic: "ms2.png",
          title: " Opulent Oasis",
          location: `UAE, DUBAI`,
        },
        {
          pic: "nor.png",
          title: "Eclat Eterné Villa  ",
          location: `UAE, DUBAI`,
        },
      
      
      ],
      carouselH1: "Explore",
      carouselH2: "Our Projects",
    }
  }
})
export default class Home extends Vue {}