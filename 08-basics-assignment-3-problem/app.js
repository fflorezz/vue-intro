const app = Vue.createApp({
  data() {
    return { result: 0, warning: "", setId: null };
  },
  methods: {
    add5() {
      this.result += 5;
    },
    add1() {
      this.result++;
    },
  },
  watch: {
    result(value) {
      if (value < 37) this.warning = "Not there yet";
      if (value > 37) this.warning = "Too much!";

      const timer = () => {
        this.result = 0;
        this.setId = null;
      };

      if (this.setId) {
        console.log("unset: ", this.setId);
        clearTimeout(this.setId);
        this.setId = setTimeout(timer, 5000);
      } else {
        console.log("set: ", this.setId);
        this.setId = setTimeout(timer, 5000);
      }
    },
  },
});

app.mount("#assignment");
