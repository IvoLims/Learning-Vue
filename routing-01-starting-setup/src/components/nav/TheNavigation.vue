<template>
  <header>
    <nav>
      <ul>
        <li>
          <!-- <button @click="setActivePage('teams-list')">Teams</button> -->
          <router-link to="/teams">Teams</router-link>
        </li>
        <li>
          <!-- <button @click="setActivePage('users-list')">Users</button> -->
          <router-link to="/users">Users</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<!-- Theres no need to emit or send nothing since we are using routes 
<script>
export default {
  emits: ['set-page'],
  methods: {
    setActivePage(page) {
      this.$emit('set-page', page);
    },
  },
};
</script> -->

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

/* They aren't buttons anymore, so we can comment them out

button {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

button:hover,

button:active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
*/

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active
/* No need since we made default active 
a.router-link-active */ {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>
