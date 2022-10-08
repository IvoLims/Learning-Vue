<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <!-- Both can be done no better way 
      <button @click="deleteFriend">Remove Friend</button> 
    -->
    <button @click="$emit('delete', this.id)">Remove Friend</button>
  </li>
</template>

<script>
export default {
  // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function(value) {
      //   return value === '1' || value === '0';
      // }
    },
  },
  // Basic stuff
  emits: ["toggle-favorite", "delete"],
  // emits: {
  //   'toggle-favorite': function(id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('Id is missing!');
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false,
      /* We use emits for this:
      friendIsFavorite: this.isFavorite,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      }, 
      */
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      /*
      We will need all this info so I must emit it
      if (this.friendIsFavourite === "1") {
        this.friendIsFavourite = "0";
      } else {
        this.friendIsFavourite = "1";
      }
      Will carry the id information but it must be added to the props
      */
      this.$emit("toggle-favorite", this.id);
    },
    // deleteFriend() {
    //   this.$emit("delete");
    // },
  },
};
</script>
