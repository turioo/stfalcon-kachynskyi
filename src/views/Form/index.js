// core
import { required, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { VueTheMask } from "vue-the-mask";

export default {
  name: "form",
  components: { VueTheMask },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      popup: false,
      size: false,
      form: {
        owner: "",
        title: "",
        poster: null,
        director: "",
        year: "",
      },
    };
  },
  validations() {
    return {
      form: {
        owner: { required, minLength: minLength(5) },
        title: { required, minLength: minLength(3) },
        poster: { required },
        director: { required, minLength: minLength(5) },
        year: { required, minLength: minLength(4) },
      },
    };
  },
  methods: {
    handleImg(e) {
      if (e.target.files[0] && e.target.files[0].size / 1024 < 5000) {
        let dataSend = new FormData();
        dataSend.append("poster", e.target.files[0]);
        this.form.poster = dataSend;
        this.size = false;
      } else {
        this.size = true;
      }
    },
    async submit() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      this.form = {
        owner: "",
        title: "",
        poster: null,
        director: "",
        year: "",
      };
      this.popup = true;
      this.v$.$reset();
      console.log(this.form);
    },
  },
};
