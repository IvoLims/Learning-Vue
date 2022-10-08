<template>
  <ul>
    <!-- <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      Will only remove this line: @select-topic="$emit('select-topic', $event)"
    ></knowledge-element> -->
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // needs a parent child relation to work
  inject: ['topics'],
  // Will be removed too emits: ['select-topic'],
};
</script>
