<template>
  <!-- <button @click="addOne">Add 1</button> -->
  <button @click="inc">Add 1</button>
  <button @click="increase({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    /*
    addOne() {
      /* this.$store.commit('increment');
         No need for this since we made something global
        return this.$store.state.counter++;

      this.$store.dispatch('increment');
    }

    ...mapActions(['increment', 'increase']),
    The above can be more custom  
    */
    ...mapActions('numbers', { inc: 'increment', increase: 'increase' }),
  },
};
</script>
