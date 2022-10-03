<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <div class="col-5 q-pa-md">
        <q-img
          class="rounded-borders"
          :src="court.imgUrl"
          style="height: 180px"
        />

        <q-chip
          v-if="court.rating"
          class="shadow-3 bottom-div"
          color="orange"
          text-color="white"
          icon-right="star"
          :label="court.rating"
        >
        </q-chip>
      </div>
      <q-card-section class="q-gutter-md">
        <div class="row items-center">
          <q-icon name="location_on" style="color: gray" />
          <span class="subtitle">{{ court.location }}</span>
        </div>
        <span class="row text-h6">{{ court.name }}</span>
        <div class="row">
          <div class="col q-mr-xs">
            <q-chip
              label="Pasto Sintético"
              outline
              size="sm"
              color="primary"
              text-color="white"
              icon="layers"
            >
            </q-chip>
          </div>
          <div class="col">
            <q-chip
              label="Outdoor"
              size="sm"
              outline
              color="primary"
              text-color="white"
              icon="light_mode"
            >
            </q-chip>
          </div>
        </div>
      </q-card-section>
    </q-card-section>
    <q-separator />

    <q-card-actions>
      <q-btn
        flat
        size="lg"
        color="primary"
        no-caps
        @click="
          router.push({
            name: 'court',
            params: { id: court.id, court: JSON.stringify(court) },
          })
        "
      >
        Reserva
      </q-btn>
      <q-space />
      <span class="text-h6">Desde: {{ court.priceFrom }}/Hora</span>
    </q-card-actions>
  </q-card>
</template>
<script lang="ts">
import { Court } from 'src/models/court';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'CourtCard',
  props: {
    court: {
      type: Court,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>
<style lang="scss" scoped>
.subtitle {
  color: gray;
  font-size: 12px;
  font-weight: 500;
}
.my-card {
  width: 100%;
  max-width: 400px;
}
.bottom-div {
  position: absolute;
  bottom: 0px;
  left: 40px;
  z-index: 2;
}
</style>
