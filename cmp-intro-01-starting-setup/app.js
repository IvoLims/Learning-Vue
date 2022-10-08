const app = Vue.createApp({
  data() {
    return {
      friendsList: [
        {
          id: "friend1",
          name: "John",
          email: "john@example.com",
          phone: "123-456-1234",
          email: "john@example.com",
        },
        {
          id: "friend2",
          name: "Jane",
          email: "jane@example.com",
          phone: "443-336-0021",
        },
      ],
    };
  },
  methods: {},
});

app.component("friend-contact", {
  template: `
  <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails()">
            {{ detailsIsOn ? 'Hide details' : 'Show details' }}
          </button>
          <ul v-if="detailsIsOn">
            <li><strong>Phone:</strong> {{ friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailsIsOn: false,
      friend: {
        id: "friend1",
        name: "John",
        email: "john@example.com",
        phone: "123-456-1234",
        email: "john@example.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsIsOn = !this.detailsIsOn;
    },
  },
});

app.mount("#app");
