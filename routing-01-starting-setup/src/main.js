import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  // We must indicate our domain and what to render in that page
  routes: [
    // Can be done with a different tag in the path we want as default route
    // The different is that with this one the url change and with the other it doesn't
    {
      path: '/',
      redirect: '/teams',
    },
    /*
    { path: '/teams', component: TeamsList, alias: '/' },
    We will add child paths because they derivate from the same parent path
    { path: '/teams', component: TeamsList },
    */
    {
      name: 'teams',
      path: '/teams',
      components: {TeamsList},
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    { path: '/users', component: UsersList },
    /*
    It will be moved above because it's the child from '/teams' (nested routes)
    { path: '/teams/:teamId', component: TeamMembers, props: true },
    If User puts anything that isn't define above will be threated with this case
    */
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
});
const app = createApp(App);

// It awares Vue that we have a router and it must use it.
app.use(router);

app.mount('#app');
