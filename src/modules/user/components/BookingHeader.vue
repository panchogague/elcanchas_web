<template>
  <div class="row q-pa-lg q-mt-md q-ml-xl items-start gt-sm">
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
      <div class="row">
        <div class="col">
          <q-btn color="primary" no-caps>
            <q-icon left name="map" />
            <div>Ver en mapa</div>
          </q-btn>

          <q-btn color="red" class="q-ml-sm" no-caps>
            <q-icon left name="favorite_border" />
            <div>Guardar Favorito</div>
          </q-btn>
        </div>
      </div>
      <div class="col">
        <q-icon name="star" color="orange" size="20px" class="q-mb-xs" />
        <span class="text-body1">
          4.5 <a href="#">(Ver Comentarios)</a> · Abre a las: 12:00PM · Cierra a
          las: 22:00PM</span
        >
      </div>
      <span class="row text-h6"> Desde: $25.000/Hora</span>
    </div>
  </div>
  <div class="lt-md">
    <q-img
      :src="img"
      spinner-color="primary"
      spinner-size="82px"
      class="img-small-screen"
    />
    <div class="q-pa-md q-gutter-xs">
      <span class="text-h4">{{ title }}</span>
      <div class="row items-center">
        <q-icon name="location_on" style="color: gray" />
        <span class="subtitle">{{ location }} </span>
      </div>

      <div class="col">
        <q-icon name="star" color="orange" size="18px" />
        <span class="text-body2 q-ml-xs">
          4.5 <a href="#">(Ver Comentarios)</a> · Abre a las: 12:00PM · Cierra a
          las: 22:00PM</span
        >
      </div>
      <span class="row text-h6"> Desde: $25.000/Hora</span>
      <div class="row">
        <div class="col">
          <q-btn color="primary" no-caps>
            <q-icon left name="map" />
            <div>Ver en mapa</div>
          </q-btn>

          <q-btn color="red" class="q-ml-sm" no-caps>
            <q-icon left name="favorite_border" />
            <div>Guardar Favorito</div>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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
    return {
      ratingModel: ref(4),
    };
  },
});
</script>

<style scoped>
.img {
  width: 100%;
  height: 280px;
  max-width: 550px;
}
.img-small-screen {
  width: 100%;
  height: 300px;
}
</style>
