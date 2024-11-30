import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue";
import IntroSection from "@/components/AboutConcept/IntroSection.vue";
import BottomSection from "@/components/BottomSection/BottomSection.vue";
import ExperiencesArticle from "@/components/ExperiencesArticle/ExperiencesArticle.vue";

@Options({
  name: "Experiences",
  components: {
    Title,
    IntroSection,
    ExperiencesArticle,
    BottomSection
  },
  data() {
    return {
      elements: {} as {
        boldText: string;
        lightText: string;
        video: string;
        introParas: [];
        title: string;
        txtParagraphs: [];
        expTitle: string;
        expPara: string;
        expTitle2: string;
        expPara2: string;
        expTitle3: string;
        expPara3: string;
      }[],
    };
  },
  created() {
    this.elements = {
      boldText: "Designing Your World",
      lightText: "One Moment at a Time",
       video: require("@/assets/discovery.mp4"),
      introParas: [
        " At DAT Architecture, we design spaces to make any moment worth living to the fullest with your loved ones. Our designs are dedicated to merging innovation with functionality in every space, so as to leave a lasting memory  ",
      
      ],
      
      title: "CONCEPT ",
      txtParagraphs: [
        "Concept in DAT Architecture is an abstract creative essence at the root of the design. It is the integration of art and engineering into the client's vision that drives every move to take the project further. Any structure has its conscious creation based on aesthetics, functionality, and context to create something unique and effective. Our approach ensures every project we execute is unique and memorable, with innovations and quality that blend into the environment and need of our clients.",
      ],
      expTitle: "DESIGN ",
      expPara: "AT Architecture, design is way beyond aesthetic excellence; it is a very deliberative process that blends creativity, precision, and purpose together. Our design approach is centered on the deep understanding of the client's vision and translating it into structures that move, captivate, and stay relevant. Every project undertaken is well thought of to achieve the perfect balance between aesthetics and functionality, as space also has to be practical and innovative. We pay attention to every detail, aiming to be the best in everything so that all the components can harmoniously complement each other in the whole.",
      expTitle2: "Build ",
      expPara2: "DAT Architecture At DAT Architecture, building is the thoughtful design, precision engineering, and expert craftsmanship all come together. Excellence in quality and efficiency, along with all considerations in any given project, determine a structure that is aesthetically pleasing, yet robust and long-lasting. Throughout the construction process, we work hand in glove with our clients to communicate openly and transparently, delivering on our promises. Translating this from villas to residences means the creation of functional, sustainable, strikingly attractive environments that meet the highest standards of excellence. ",
      expTitle3: "REAL ESTATE INVESTMENT",
      expPara3: "At DAT Architecture, we understand that real estate investment is not just a matter of buying any property but essentially value creation over time. Our design and architectural capabilities are crucial to maximizing the investment potential of any real estate project. We offer sustainable design and optimal spacing and modern aesthetics, hence ensuring maximum functionality and appeal for the properties. Our investment philosophy in real estate, whether residential or commercial, remains resolute",
    };
  },
})
export default class Experiences extends Vue {}
