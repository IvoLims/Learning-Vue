import { createApp } from "vue";

import App from "./App.vue";
// import TheHeader from './components/TheHeader.vue';
import BaseBadge from "./components/ui/BaseBadge.vue";
// import BadgeList from "./components/BadgeList.vue";
//import UserInfo from './components/UserInfo.vue';
import BaseCard from "./components/ui/BaseCard.vue";

const app = createApp(App);

/* It's only used in one place (in App.vue) no need to load it globally
   app.component('the-header', TheHeader);
*/

//This one is global cuz it's used in BadgeList.vue and UserInfo.vue
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);
/* It's only used in one place (in App.vue) no need to load it globally
app.component("badge-list", BadgeList);

   It's only used in one place (in App.vue) no need to load it globally
   app.component('user-info', UserInfo);
*/

app.mount("#app");
