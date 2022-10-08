<template>
  <ul>
    <li v-for="goal in goals" :key="goal">{{ goal }}</li>
    <!-- The another propt will be acessible in slotProps in App.vue too -->
    <slot :item="goal" another-prop="..."></slot>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn Vue"],
    };
  },
};
</script>
