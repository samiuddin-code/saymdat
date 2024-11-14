import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue";
import IntroSection from "@/components/IntroSection/IntroSection.vue";
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
        " At DAT Architecture, we design spaces to make any moment worth living to the fullest ",
        "Every detail is added thoughtfully to enhance your lifestyle and living experience, ",
        "Step into a home that is not only designed to impress, but inspire. At DAT, we translate your dream into reality,  setting a new standard for what luxury living truly means.",
      ],
      title: "Exclusive to<br>your world",
      txtParagraphs: [
        "Our worlds are designed to offer you endless opportunities to share incredible once-in-a-lifetime experiences and adventures every single minute of the day. Each of our settings offers a relaxed sense of extensive Outdoor Pursuits program. Create moments of joy and wonder, unforgettable memories and cherished times, together with those who matter most.",
      ],
      expTitle: "Golf",
      expPara: "We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.",
      expTitle2: "MS ",
      expPara2: "Our signature Outdoor Pursuits program is designed for families to create memories together. Whether you’re trying a new sport or taking a day trip, our team will ensure you make the most of every minute with activities designed to help you take advantage of everything each region has to offer.",
      expTitle3: "Wellness",
      expPara3: "Unwind at an indulgent spa. Set challenging targets with a tailor-made fitness plan. Or let our talented chefs treat you to our flavorful international menus created using the finest, carefully selected foods sourced locally from organic farms.",
    };
  },
})
export default class Experiences extends Vue {}
