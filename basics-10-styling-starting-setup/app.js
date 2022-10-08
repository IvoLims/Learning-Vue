const app = Vue.createApp({
  data() {
    return {
      box1Select: false,
      box2Select: false,
      box3Select: false,
    };
  },
  computed: {
    boxAClasses() {
      return {
        active: this.box1Select,
      };
    },
  },
  methods: {
    boxHighlight(box) {
      if (box === "A") {
        this.box1Select = !this.box1Select;
      } else if (box === "B") {
        this.box2Select = !this.box2Select;
      } else {
        this.box3Select = !this.box3Select;
      }
    },
  },
});

app.mount("#styling");
