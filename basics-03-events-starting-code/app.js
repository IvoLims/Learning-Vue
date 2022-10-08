const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confName: "",
      // fullName: "",
      lastName: " Cordeiro",
    };
  },
  watch: {
    counter(counter) {
      if (counter > 25) {
        this.counter = 0;
      }
    },
    // Can be done easier with computed properties:
    // name(valueName) {
    //   if (valueName === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullName = valueName + " " + this.lastName;
    //   }
    // },
    // lastName(valueLastName) {
    //   if (valueLastName === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullName = this.name + " " + valueLastName;
    //   }
    // },
  },
  computed: {
    fullName() {
      if (this.name === "" || this.lastName === "") {
        return "";
      } else {
        return this.name + this.lastName;
      }
    },
  },
  methods: {
    outPutFname() {
      if (this.name === "") {
        return "";
      } else {
        return this.name + " Cordeiro";
      }
    },
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      if (this.counter - num >= 0) {
        this.counter = this.counter - num;
      }
    },
    confirmedName() {
      this.confName = this.name;
    },
    setName(event /*,lastName*/) {
      this.name = event.target.value;
    },
    /* This is standard
    submitForm(event) {
      event.preventDefault();
      alert("Your logged in!");
    },
    */
    submitForm() {
      alert("Your logged in!");
    },
    resetCounter() {
      this.counter = 0;
    },
    resetName() {
      this.name = "";
    },
  },
});

app.mount("#events");
