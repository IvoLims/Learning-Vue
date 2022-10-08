//import { endsWith } from "core-js/core/string";
import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";

const app = createApp(App);
app.component("friendContact", FriendContact);
app.mount("#app");
