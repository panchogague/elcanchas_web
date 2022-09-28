<template>
  <q-page class="bg-deep-teal-1">
    <div class="row">Filtros</div>
    <div class="row">
      <div class="col-2" style="background-color: red">Filtros de busqueda</div>
      <div
        class="col q-pa-md row items-start q-gutter-md"
        style="background-color: green"
      >
        <court-card></court-card>
        <court-card></court-card>
        <court-card></court-card>
        <court-card></court-card>
        <court-card></court-card>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import CourtCard from '../components/CourtCard.vue';
export default {
  components: {
    CourtCard,
  },
  setup() {
    //
  },
};
</script>
