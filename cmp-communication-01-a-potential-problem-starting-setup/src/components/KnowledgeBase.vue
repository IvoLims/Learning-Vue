<template>
  <section>
    <h2>Select a Topic</h2>
    <!-- Will be deleted 
      <knowledge-grid
      @select-topic="$emit('select-topic', $event)"
      ></knowledge-grid> 
    -->
    <knowledge-grid></knowledge-grid>
  </section>
</template>

<script>
export default {
  // Will be deleted emits: ['select-topic'],
};
</script>
