const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "<h2> Hello World!! </h2>",
      courseGoalB: "sup",
      vueLink: "http://vuejs.org/",
      // name: "",
      // birthdate: null,
    };
  },

  computed: {
    age() {
      if (!this.birthdate) {
        return "Please fill birthdate";
      }

      return this.getAge();
    },
  },

  methods: {
    outPutGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },

    getAge() {
      var today = new Date();
      var birthDate = new Date(this.birthdate);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },

    printName() {
      console.log(this.name);
    },
  },

  created() {
    this.name = "Ivo";
  },
});
app.mount("#user-goal");

// computed
// created
// mounted
