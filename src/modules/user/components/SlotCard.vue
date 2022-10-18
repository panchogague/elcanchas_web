<template>
  <q-card class="my-card" :class="isSelected ? 'is-selected' : ''">
    <q-card-section class="col q-gutter-xs">
      <div class="text-center" v-if="isDatePicker">
        <span class="sub-title">{{ title1 }}</span
        ><br />
        <template v-if="subtitle">
          <span class="title">{{ subtitle }}</span
          ><br />
        </template>
        <template v-if="title2">
          <span class="sub-title">{{ title2 }}</span>
        </template>
      </div>
      <div class="text-center" v-else>
        <span class="title" style="font-size: 15px">{{ title1 }}</span
        ><br />
        <template v-if="subtitle">
          <span class="sub-title">{{ subtitle }}</span
          ><br />
        </template>
        <template v-if="title2">
          <span class="title" style="font-size: 15px">{{ title2 }}</span>
        </template>
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
    },
    subtitle: {
      type: String,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    isDatePicker: {
      type: Boolean,
      default: false,
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
  font-size: 20px;
  font-weight: bold;
}
.sub-title {
  font-size: 14px;
  font-weight: 500;
}
.my-card {
  width: 100%;
  max-width: 120px;
  min-width: 80px;
  cursor: pointer;
}

.is-selected {
  background-color: $primary;
  color: white;
}
</style>
