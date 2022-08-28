import { required } from "@vuelidate/validators";
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
      name: "",
      phone: "",
    };
  },
  validations() {
    return {
      name: { required }, // Matches this.firstName
      phone: { required }, // Matches this.firstName
    };
  },
  methods: {
    async submit() {
      const result = await this.v$.$validate();
      if (!result) {
        // notify user form is invalid
        return;
      }
      console.log(this.phone);
    },
  },
};
