import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue";

import IntroSection from "@/components/Build/IntroSection.vue";
import BottomSection from "@/components/BottomSection/BottomSection.vue";
import TxtImg2 from "@/components/TxtImg2/TxtImg2.vue";

@Options({
  name: "AboutDlc",
  components: {
    Title,
    IntroSection,

    TxtImg2,
    BottomSection
  },
  data() {
    return {
      elements: {} as {
        boldText: string;
        lightText: string;
        introParas: [];
        title: string;
        txtParagraphs: [];
        carousel: [];
        carouselH1: string;
        header1: string;
        paragraph: string;
        imgRight: string;
        imgLeft: string;
        headerMirror: string;
        paragraphMirror: string;
        imgRightMirror: string;
        imgLeftMirror: string;
      }[],
    };
  },
  created() {
    this.elements = {
      boldText: "Build",
      // lightText: "Sanctuary of Your Dreams",
      introParas: [
        
        "AT DAT, we don't just build we create masterpieces. Every project is a fusion of innovation, craftsmanship, and meticulous attention to detail. From bold concepts down to flawless execution, we will turn your vision into reality and craft spaces that inspire, captivate, and conquer time with unmatched elegance and precision.",
    

       
      ],
      title: " Crafting Timeless Masterpieces",
      txtParagraphs: [
        " At DAT, we don't just construct spaces we create masterpieces that will stand the test of time. Every project is an artful fusion of innovation, craftsmanship, and unwavering attention to detail. We take every idea-from a spark of bold concepts to flawless execution that brings them to life-and make sure everything works in harmony to meet your vision and aspirations. Our work doesn't just fill a space; it transforms it-creating inspiring, captivating, and leaving onlookers with a lasting impression. We design with purpose, crafting spaces with unmatched elegance and precision to echo your unique story while conquering time with beauty and functionality."
      ],
      carousel: [
        // {
        //   pic: "p1.jpg",
        //   title: "Focus on family",
        //   location: `Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.`,
        // },
      
      ],
      carouselH1: "The Discovery Story",
      // header1: "Discovery Builders",
      paragraph:
        "Our designs go beyond aesthetics, intentionally combining beauty and functionality into environments that reflect your story. Every element is carefully curated to ensure your space is visually striking, yet practical and enduring. Whether it's a serene home retreat, a vibrant workspace, or a social hub, we design with intention, creating spaces that enrich everyday life.We believe that design is personal, and every detail matters. From the texture of materials to the play of light and shadow, we craft spaces that inspire emotion and connection. By harmonizing form and purpose, we transform ordinary places into extraordinary experiences, tailored to your unique needs and aspirations Our approach begins with listening, understanding your vision, and translating it into reality with precision and care. Each project is a collaboration, where your ideas and our expertise come together to shape an environment that feels authentically yours.",
       imgRight: require("@/assets/TxtImg2/AboutDlc/qq.png"),
       imgLeft: require("@/assets/TxtImg2/AboutDlc/ccc.png"),
      headerMirror: "Where Vision Meets Artistry at DAT",
      paragraphMirror: "At DAT, we don't build mere structures we create masterpieces that come alive. Innovation, craftsmanship, and passion meld into one to turn an idea into space that inspires and delights. Our designs will be beautiful and functional, crafted with purpose to reflect your vision. We craft timeless environments that elevate the everyday, marrying elegance and practicality. Building with DAT is about creating a legacy in craftsmanship.",
      imgRightMirror: require("@/assets/TxtImg2/AboutDlc/abcde.png"),
       imgLeftMirror: require("@/assets/TxtImg2/AboutDlc/TxtImg2Mirrorrrr.png"),
    };
  },
})
export default class AboutDlc extends Vue {}
