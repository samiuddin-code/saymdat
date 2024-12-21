import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add Font Awesome icons to the library
library.add(faArrowRight);

export default defineComponent({
  name: "Panels",
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const router = useRouter();

    // Define panel content
    const panelContents = reactive({
      concept: {
        title: "Concept",
        description: "Experience thrilling adventures and world-class facilities.",
      },
      design: {
        title: "Design",
        description: "Explore luxury and elegance with curated lifestyle options.",
      },
      build: {
        title: "Build",
        description: "Discover wellness designed to nurture body, mind, and soul.",
      },
    });

    const navigateTo = (panel: string) => {
      const validPanels = Object.keys(panelContents);
      if (validPanels.includes(panel)) {
        router.push({ name: panel.charAt(0).toUpperCase() + panel.slice(1) }).catch((err) => {
          console.error(`Navigation error: ${err}`);
        });
      } else {
        console.error(`Invalid panel: ${panel}`);
      }
    };

    return { panelContents, navigateTo };
  },
});