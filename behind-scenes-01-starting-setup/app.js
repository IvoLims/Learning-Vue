const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
      users: [
        {
          id: 1,
          name: "John",
        },
        {
          id: 2,
          name: "Jane",
        },
        {
          id: 3,
          name: "Ivo",
        },
      ],
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("Some dummy text");
  },
  created() {
    console.log("Some more dummy text");
  },
  beforeMount() {
    console.log("Some more more dummy text");
  },
  mounted() {
    console.log("Some more more more dummy text");
  },
  beforeUpdate() {
    console.log("Let's go!");
  },
  updated() {
    console.log("Let's go is done!");
  },
  beforeUnmount() {
    console.log("Being destroyed :C");
  },
  unmounted() {
    console.log("Destroyed :C");
  },
});

app.mount("#app");

setTimeout(function () {
  app.unmount();
}, 3000);

/*--- Second App ---*/

const app2 = Vue.createApp({
  template: `
  <p>{{favouriteMeal}}</p>
  `,
  data() {
    return { favouriteMeal: "Pizza" };
  },
  methods: {},
});

app2.mount("#app2");
