<template>
  <q-card class="my-card q-mt-lg">
    <q-card-section class="q-gutter-sm">
      <div class="text-h4">Tú reserva</div>
      <q-separator />
      <div class="row justify-between">
        <div class="text-subtitle1">Cancha:</div>
        <div class="text-subtitle1">{{ pitchName }}</div>
      </div>
      <div class="row justify-between">
        <div class="text-subtitle1">Fecha:</div>
        <div class="text-subtitle1">{{ getCurrentDate }}</div>
      </div>
      <div class="row justify-between">
        <div class="text-subtitle1">Horario:</div>
        <div class="text-subtitle1">10:00 - 11:00</div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row justify-between">
        <div class="text-subtitle1">Subtotal:</div>
        <div class="text-subtitle1">$25.000</div>
      </div>
      <div class="row justify-between">
        <div class="text-subtitle1">Servicio:</div>
        <div class="text-subtitle1">$2.000</div>
      </div>
      <q-separator />
      <div class="row justify-between q-mt-sm">
        <div class="text-h6">Total:</div>
        <div class="text-h6">$27.000</div>
      </div>
    </q-card-section>
    <q-card-actions>
      <q-btn
        color="primary"
        icon="check"
        class="full-width"
        label="Ir a Pagar"
        no-caps
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useBooking } from '../store/useBooking';
import { storeToRefs } from 'pinia';
export default defineComponent({
  name: 'BookingDetailCard',
  setup() {
    const { pitchName, getCurrentDate } = storeToRefs(useBooking());
    return {
      pitchName,
      getCurrentDate,
    };
  },
});
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 400px;
}
</style>
