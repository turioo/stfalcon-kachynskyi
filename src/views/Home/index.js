export default {
  name: "home",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    findMovie(e) {
      e.preventDefault();
      this.$router.push({ path: "/search", query: { title: this.search } });
      this.search = "";
    },
  },
};
