<template>
  <q-card-section>
    <div class="text-h5">
      <div class="row items-center">
        <q-icon
          :name="icon"
          color="primary"
          size="20px"
          style="margin-right: 5px"
        />
        {{ title }}
      </div>
    </div>
  </q-card-section>
  <q-card-section>
    {{ desc }}
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BookingDetailInfo',
  props: {
    desc: {
      type: String,
      required: true,
    },
    icon: {
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
