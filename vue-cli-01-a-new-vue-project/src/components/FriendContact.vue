<template>
  <li>
    <h2>{{ friends.name }}</h2>
    <button @click="showDetails">
      {{ !detailsAreVisable ? "Show " : "Hide " }}Details
    </button>
    <ul v-if="detailsAreVisable">
      <li><strong>Phone:</strong>{{ friends.phone }}</li>
      <li><strong>Email:</strong>{{ friends.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisable: false,
      friends: {
        id: "1",
        name: "John",
        phone: "123-456-1234",
        email: "john@example.com",
      },
    };
  },
  methods: {
    showDetails() {
      this.detailsAreVisable = !this.detailsAreVisable;
    },
  },
};
</script>
