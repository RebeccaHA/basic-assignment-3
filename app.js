const app = Vue.createApp({
  data() {
    return {
      result: 0
    };
  },
  computed: {
    text() {
      if (this.result < 37) {
        return "Not there yet";
      } else if (this.result === 37) {
        return 37;
      } else {
        return "Too much";
      }
    }
  },
  methods: {
    addFive(num) {
      this.result = this.result + num;
    },
    addOne(num) {
      this.result = this.result + num;
    }
  },
  watchers: {
    result(value) {
      setTimeout((this.result = 0), 5000);
    }
  }
});

app.mount("#assignment");
