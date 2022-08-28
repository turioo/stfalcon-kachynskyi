import Loader from "@/components/partials/Loader/index.vue";

export default {
  name: "movie",
  components: { Loader },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.$store.dispatch("fetchMovieInfo", this.id);
  },
  computed: {
    movieInfo() {
      return this.$store.getters.getMovieItem;
    },
    movieInfoLoading() {
      return this.$store.getters.getMovieItemLoading;
    },
  },
  methods: {},
};
