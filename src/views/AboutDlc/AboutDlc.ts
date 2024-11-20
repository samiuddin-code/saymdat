import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue";
import ExploreCarousel from "@/components/ExploreCarousel/ExploreCarousel.vue";
import TxtImg2 from "@/components/TxtImg2/TxtImg2.vue";
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import BottomSection from "@/components/BottomSection/BottomSection.vue";

@Options({
  name: "AboutDlc",
  components: {
    Title,
    IntroSection,
    ExploreCarousel,
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
      boldText: "Discover the Luxury",
      lightText: "Sanctuary of Your Dreams",
      introParas: [
        
        "Where imagination meets precision, and every idea transforms into an extraordinary reality. We craft spaces that inspire, captivate, and leave a lasting impression. From bold concepts to stunning creations, we blend art and innovation to shape iconic designs. With DAT, your vision becomes a masterpiece beyond expectations",
    

       
      ],
      title: "Our Vision",
      txtParagraphs: [
        " At DAT Architecture, our vision is to reimagine the art of design by blending creativity, innovation, and functionality. We strive to lead in crafting iconic spaces that inspire, captivate, and enrich lives. Guided by excellence, we bring concepts to life with precision and elegance. ",
        "We're passionate about translating our clients' unique aspirations into designs that provide purposeful and distinctive solutions. Each project showcases our dedication to expertise and the attention to detail. We combine use of advanced technology in creating spaces that are not only aesthetically pleasing but also add practical value, changing how people experience them, while closely collaborating with the clients."
      ],
      carousel: [
        // {
        //   pic: "p1.jpg",
        //   title: "Focus on family",
        //   location: `Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.`,
        // },
        {
          pic: "p2.png",
          title: "Incomparable experiences",
          location: `World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.`,
        },
        {
          pic: "p3.png",
          title: "Inspired by land",
          location: `Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.`,
        },
        {
          pic: "p4.png",
          title: "Sustainable future",
          location: `Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.`,
        },
        // {
        //   pic: "p5.jpg",
        //   title: "Luxury bespoke homes",
        //   location: `Through  in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.`,
        // },
        // {
        //   pic: "p1.jpg",
        //   title: "Focus on family",
        //   location: `Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.`,
        // },
        {
          pic: "p2.png",
          title: "Incomparable experiences",
          location: `World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.`,
        },
        {
          pic: "p3.png",
          title: "Inspired by land",
          location: `Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.`,
        },
        {
          pic: "p4.png",
          title: "Sustainable future",
          location: `Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.`,
        },
        {
          pic: "p5.png",
          title: "Luxury bespoke homes",
          location: `Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.`,
        },
      ],
      carouselH1: "The Discovery Story",
      // header1: "Discovery Builders",
      paragraph:
        "At DAT Architecture, we are determined to deliver designs that smoothly integrate architectural sophistication with cutting-edge solutions. Our commitment to excellence is reflected in our scrupulous attention to detail and unparalleled craftsmanship. We work closely with the clients by transforming their vision into a functional, refined space; hence, every project at DAT meets the finest quality, precision, and professionalism. With DAT, you can rest assured that your design will be executed to the highest degree of creativity and skill, coupled with a relentless commitment to excellence.",
       imgRight: require("@/assets/TxtImg2/AboutDlc/TxtImg1.jpg"),
       imgLeft: require("@/assets/TxtImg2/AboutDlc/TxtImg2.jpg"),
      headerMirror: "A Decade of DAT Architecture",
      paragraphMirror: "With over 10 years of experience, DAT Architecture has redefined design by blending creativity, innovation, and precision. From our early projects to becoming a trusted industry leader, we’ve consistently transformed ideas into exceptional spaces. Our journey reflects a commitment to excellence, bringing visionary concepts to life. Passionate about design and dedicated to perfection, we continue to push boundaries, crafting timeless, inspiring environments that captivate and elevate every experience. At DAT, every design tells a story.",
      imgRightMirror: require("@/assets/TxtImg2/AboutDlc/TxtImg1Mirror.jpg"),
       imgLeftMirror: require("@/assets/TxtImg2/AboutDlc/TxtImg2Mirror.jpg"),
    };
  },
})
export default class AboutDlc extends Vue {}
