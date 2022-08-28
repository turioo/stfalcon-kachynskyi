import { Carousel, Slide, Navigation } from "vue3-carousel";
import Loader from "@/components/partials/Loader/index.vue";

export default {
  name: "search",
  components: { Carousel, Slide, Navigation, Loader },
  data() {
    return {
      title: this.$route.query.title,
      settings: {
        itemsToShow: 3,
      },
    };
  },
  mounted() {
    this.$store.dispatch("fetchMoviesList", this.title);
  },
  computed: {
    moviesList() {
      return this.$store.getters.getMoviesList;
    },
    moviesListLoading() {
      return this.$store.getters.getMoviesListLoading;
    },
  },
  methods: {},
};
