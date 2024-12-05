import { Options, Vue } from "vue-class-component";
import { reactive } from "vue";
import { useRouter } from "vue-router";

interface PanelContent {
  title: string;
  description: string;
}

@Options({
  name: "Panels",
})
export default class Panels extends Vue {
  private router = useRouter();

  // Define the content for each panel
  private panelContents: Record<string, PanelContent> = {
    concept: {
      title: "Concept",
      description:
        "Experience the ultimate activities with thrilling adventures and world-class facilities.",
    },
    design: {
      title: "Design",
      description: "Explore a world of luxury and elegance with curated lifestyle options.",
    },
    build: {
      title: "Build",
      description: "Discover wellness options designed to nurture your body, mind, and soul.",
    },
  };

  // Initialize with default content
  private currentContent = reactive<PanelContent>({
    title: "Concept",
    description:
      "Experience the ultimate activities with thrilling adventures and world-class facilities.",
  });

  // Method to load content based on panel selection
  loadContent(panel: string): void {
    const content = this.panelContents[panel];
    if (content) {
      this.currentContent.title = content.title;
      this.currentContent.description = content.description;
    }
  }

  // Method to navigate to a specific page
  navigateTo(panel: string): void {
    const routeName = panel.charAt(0).toUpperCase() + panel.slice(1); // Capitalize for route names
    this.router.push({ name: routeName });
  }
}
