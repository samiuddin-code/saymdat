import { Options, Vue } from "vue-class-component";
import { useRouter } from "vue-router";

@Options({
  name: "BottomSection",
  props: {
    picture: {
      type: String,
      required: true,
    },
  },
})
export default class BottomSection extends Vue {
  private router = useRouter();

  navigateToOurWorlds() {
    this.router.push({ name: "Our-Worlds" }); // Ensure this matches the route name in your router config
  }
}
