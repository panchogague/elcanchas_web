<template>
  <q-card class="my-card">
    <q-card-section class="col q-gutter-xs">
      <div class="text-center">
        <span class="title">{{ title1 }}</span
        ><br />
        <template v-if="subtitle">
          <span class="sub-title">{{ subtitle }}</span
          ><br />
        </template>
        <span class="title">{{ title2 }}</span>
      </div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SlotCard',
  props: {
    title1: {
      type: String,
      required: true,
    },
    title2: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
  },
  setup() {
    return {
      //
    };
  },
});
</script>
<style lang="scss" scoped>
.title {
  font-size: 15px;
  font-weight: bold;
}
.sub-title {
  font-size: 14px;
  font-weight: 500;
}
.my-card {
  width: 100%;
  max-width: 150px;
}
</style>
