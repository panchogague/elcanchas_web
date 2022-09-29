<template>
  <div class="row q-pa-lg q-mt-md q-ml-xl items-start">
    <div class="col-4">
      <q-img
        :src="img"
        spinner-color="primary"
        spinner-size="82px"
        style="width: 100%"
        class="img rounded-borders"
      />
    </div>

    <div class="col-5 q-mt-md q-ml-xs q-gutter-md">
      <span class="text-h3">{{ title }}</span>
      <div class="row items-center">
        <q-icon name="location_on" style="color: gray" />
        <span class="subtitle">{{ location }} </span>
      </div>
      <q-btn color="primary">
        <q-icon left name="map" />
        <div>Ver en mapa</div>
      </q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BookingHeader',
  props: {
    img: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    //
  },
});
</script>

<style scoped>
.img {
  width: 100%;
  height: 280px;
  max-width: 550px;
}
</style>
