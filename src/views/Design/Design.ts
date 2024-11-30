import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue";

import TxtImg2 from "@/components/TxtImg2/TxtImg2.vue";
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import BottomSection from "@/components/BottomSection/BottomSection.vue";

@Options({
  name: "Design",
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
      boldText: "Design",
      // lightText: "Sanctuary of Your Dreams",
      introParas: [
        
        "At DAT, We Turn Spaces into Stories—Breathing Life into Luxury, Blending Elegance with Functionality, and Turning Every Corner into a Reflection of Your Dreams and Identity.",
    

       
      ],
      title: "Designing Dreams with Passion and Precision",
      txtParagraphs: [
        " At DAT, we don't just design spaces we craft experiences that tell stories-your stories. Every corner, every curve, every detail is instilled with a sense of purpose, making spaces breathe with life and meaning. To us, luxury isn't about opulence alone it's about the moments, memories, and connections that a space inspires. ",
        "Our work is powered by passion, that unstoppable drive to do something extra-ordinary each time. It's the spark that fires our ideas and makes us dream bigger for you. But passion isn't enough it is precision that gives shape to our vision. "
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
        "Our process is powered by a combination of passion and precision. Passion drives us to dream big and think creatively, while precision ensures those dreams are brought to life with flawless execution. We balance elegance with functionality, crafting spaces that are not only beautiful but also seamless to live or work in.",
       imgRight: require("@/assets/TxtImg2/AboutDlc/TxtImg1.jpg"),
       imgLeft: require("@/assets/TxtImg2/AboutDlc/TxtImg2.jpg"),
      headerMirror: "A Decade of DAT Architecture",
      paragraphMirror: "With DAT, you are not just investing in a design service but entering a journey where your story becomes the heart of creation. We listen intently to your aspirations, values, and lifestyle, weaving them into every inch of your space. Each design decision, whether big or small, reflects your individuality and personal taste. Our process is rooted in passion and precision, blending elegance with functionality to create spaces that speak to you. At DAT, your vision isn't just realized but celebrated to make the space an extension of who you are.",
      imgRightMirror: require("@/assets/TxtImg2/AboutDlc/TxtImg1Mirror.jpg"),
       imgLeftMirror: require("@/assets/TxtImg2/AboutDlc/TxtImg2Mirror.jpg"),
    };
  },
})
export default class AboutDlc extends Vue {}
