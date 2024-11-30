import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue";

import TxtImg2 from "@/components/TxtImg2/TxtImg2.vue";
import IntroSection from "@/components/Concept/IntroSection.vue";
import BottomSection from "@/components/BottomSection/BottomSection.vue";

@Options({
  name: "Concept",
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
      boldText: "Concept",
      // lightText: "Sanctuary of Your Dreams",
      introParas: [
        
        "At DAT Architecture, we bring ideas to life and create concepts that become iconic in design and will never be worn out by time and aging. We design spaces with innovation and precision that are sustainable, inspiring, and enduring. At DAT, we do not design buildings; we shape the future of architecture",
    

       
      ],
      title: "Sculpting the Future",
      txtParagraphs: [
        " At DAT Architecture, ideas are not just put into reality but into an iconic design that can stand the test of time. Each of our concepts is a perfect blend of creativity and precision, innovatively designed to stand the test of time. Our designs rise above mere trends and turn into perpetual landmarks, inspiring many for centuries. We think of spaces that are strikingly beautiful, sustainable, and functional to remain relevant and beautiful, no matter how the world changes. ",
        "We're passionate about translating our clients' unique aspirations into designs that provide purposeful and distinctive solutions. Each project showcases our dedication to expertise and the attention to detail. We combine use of advanced technology in creating spaces that are not only aesthetically pleasing but also add practical value, changing how people experience them, while closely collaborating with the clients."
      ],
      carousel: [
 


      ],
      carouselH1: "Design for Tomorrow",
      // header1: "Discovery Builders",
      paragraph:
        "Ultimately, we strive to redefine how people experience the spaces they live, work, and play in. By emphasizing precision and innovation, we create architecture that doesn't just serve a purpose but enhances life, fosters connection, and leaves a lasting legacy. At DAT, we don't just design for the present; we design for tomorrow.",
       imgRight: require("@/assets/TxtImg2/AboutDlc/concept.png"),
       imgLeft: require("@/assets/TxtImg2/AboutDlc/600x400/concept.png"),
      headerMirror: "A Decade of DAT Architecture",
      paragraphMirror: "At DAT Architecture, ideas are not just put into reality but into an iconic design that can stand the test of time. Each of our concepts is a perfect blend of creativity and precision, innovatively designed to stand the test of time. Our designs rise above mere trends and turn into perpetual landmarks, inspiring many for centuries. We think of spaces that are strikingly beautiful, sustainable, and functional to remain relevant and beautiful, no matter how the world changes.",
      imgRightMirror: require("@/assets/TxtImg2/AboutDlc/3500xx4375/concept.png"),
       imgLeftMirror: require("@/assets/TxtImg2/AboutDlc/downimage/concept.png"),
    };
  },
})
export default class AboutDlc extends Vue {}
