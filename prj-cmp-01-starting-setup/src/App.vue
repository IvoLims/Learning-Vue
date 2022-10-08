<template>
  <!-- 
    <ul>
    <learning-resource
      v-for="res in storedResource"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul> 
  -->
  <the-header title="RememberMe"></the-header>
  <!-- <stored-resources :resources="storedResources"></stored-resources> -->
  <the-resources></the-resources>
</template>

<script>
// import LearningResource from './components/learning-resources/LearningResource.vue';
// import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';
export default {
  components: {
    // StoredResources,
    TheHeader,
    TheResources,
  },
  /*
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
*/
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
