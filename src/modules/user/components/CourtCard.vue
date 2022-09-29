<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <div class="col-5 q-pa-md">
        <q-img
          class="rounded-borders"
          src="https://image-service.onefootball.com/transform?w=280&h=210&dpr=2&image=https%3A%2F%2Fimages.performgroup.com%2Fdi%2Flibrary%2FGOAL%2F5b%2Fef%2Fjan-breydel-stadium_jwo0464yk8s517j36es569jht.png%3Ft%3D821261326"
          style="height: 180px"
        />

        <q-chip
          class="shadow-3 bottom-div"
          color="orange"
          text-color="white"
          icon-right="star"
          label="4.3"
        >
        </q-chip>
      </div>
      <q-card-section class="q-gutter-md">
        <div class="row items-center">
          <q-icon name="location_on" style="color: gray" />
          <span class="subtitle"> Calle Aranda #34, Villa Alemana</span>
        </div>
        <span class="row text-h6">Cancha Guaton Linares</span>
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
        @click="router.push({ name: 'court' })"
      >
        Reserva
      </q-btn>
      <q-space />
      <span class="text-h6">Desde: $20.000</span>
    </q-card-actions>
  </q-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    return {
      router,
      lorem:
        'Sit irure velit exercitation mollit ipsum magna irure est adipisicing laborum ad consectetur.',
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
