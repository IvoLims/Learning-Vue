<template>
  <section>
    <!-- This is called a slot wrap tags between another one -->
    <base-card>
      <!-- v-slot can be written as #header 
        <template v-slot:header> 
      -->
      <template #header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <!--  Para ser mais claro posso usar: -->
      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>
