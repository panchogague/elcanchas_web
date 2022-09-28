<template>
  <div class="row bg-primary">
    <div class="col">
      <div
        style="
          max-width: 650px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        "
      >
        <div class="text-h4 text-bold text-white q-mt-xl q-pt-xl q-pb-lg">
          Quieres hacer deporte y no sabes donde?
        </div>
        <div class="text-h6 text-bold text-white q-pl-lg q-pr-lg q-pb-sm">
          Búsca aquí la cancha que necesitas:
        </div>
        <div class="q-gutter-md">
          <q-input
            color="black"
            bg-color="white"
            filled
            debounce="1000"
            label="Donde quieres jugar?"
          >
            <template v-slot:append>
              <q-icon name="place" />
            </template>
          </q-input>
          <q-select
            color="black"
            bg-color="white"
            filled
            v-model="model"
            :options="options"
            label="Qué quieres jugar?"
            multiple
            emit-value
            map-options
          >
            <template
              v-slot:option="{ itemProps, opt, selected, toggleOption }"
            >
              <q-item v-bind="itemProps">
                <q-item-section>
                  <q-item-label>{{ opt.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-toggle
                    :model-value="selected"
                    @update:model-value="toggleOption(opt)"
                  />
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-btn
            outline
            rounded
            class="full-width"
            color="white"
            icon-right="search"
            label="Búsca ahora!"
            @click="router.push({ name: 'search' })"
          />
          <q-space />
        </div>
      </div>
    </div>
    <div class="col gt-md">
      <q-img
        src="https://pngimg.com/uploads/football_player/football_player_PNG76.png"
        style="margin-left: auto; margin-right: auto; display: block"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    return {
      model: ref([]),
      router,

      options: [
        {
          label: 'Fútbol',
          value: 1,
        },
        {
          label: 'Padel',
          value: 2,
        },
        {
          label: 'Tenis',
          value: 3,
        },
        {
          label: 'Basquetball',
          value: 4,
        },
      ],
    };
  },
};
</script>
