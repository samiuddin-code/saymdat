import { Options, Vue } from "vue-class-component";

@Options({
  name: "ProjectDetails",
})
export default class ProjectDetails extends Vue {
  project = null;

  allProjects = [
    { id: 1, title: "District One Mansion", location: "Dubai, UAE", pic: "p3.png" },
    { id: 2, title: "Art Villa", location: "Dubai, UAE", pic: "p4.png" },
    { id: 3, title: "AMN Villa", location: "Dubai, UAE", pic: "p5.jpg" },
  ];

  created() {
    const projectId = parseInt(this.$route.params.id as string);
    // this.project = this.allProjects.find((p) => p.id === projectId);
  }
}
