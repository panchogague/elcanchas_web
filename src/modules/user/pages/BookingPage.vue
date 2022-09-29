<template>
  <q-page class="bg-deep-teal-1">
    <booking-header
      title="Cancha guaton linares"
      img="https://image-service.onefootball.com/transform?w=280&h=210&dpr=2&image=https%3A%2F%2Fimages.performgroup.com%2Fdi%2Flibrary%2FGOAL%2F5b%2Fef%2Fjan-breydel-stadium_jwo0464yk8s517j36es569jht.png%3Ft%3D821261326"
      location="Calle Aranda #34, Villa Alemana"
    ></booking-header>
    <q-separator class="shadow-1" />
    <div class="row q-gutter-md q-pa-lg q-ml-md">
      <div class="col">
        <div class="q-mt-md">
          <span class="text-h5">Cuando quieres jugar?</span>
          <div class="row no-wrap justify-center">
            <q-date v-model="date" landscape style="width: 800px" />
          </div>
        </div>

        <div class="q-mt-md">
          <span class="text-h5">Canchas</span>
          <div class="column no-wrap">
            <div class="row fit justify-center items-center q-gutter-lg">
              <slot-card
                title1="Cancha 1"
                title2="$14.500"
                subtitle="6v6"
              ></slot-card>
              <slot-card
                title1="Cancha 2"
                title2="$14.500"
                subtitle="6v6"
              ></slot-card>
              <slot-card
                title1="Cancha Pasto"
                title2="$24.000"
                subtitle="8v8"
              ></slot-card>
              <slot-card
                title1="Cancha Tierra"
                title2="$8.500"
                subtitle="6v6"
              ></slot-card>
              <slot-card
                title1="Cancha Grande"
                title2="$50.000"
                subtitle="11v11"
              ></slot-card>
            </div>
          </div>
        </div>
        <div class="q-mt-md">
          <span class="text-h5">Horarios</span>
          <div class="column no-wrap q-mt-sm">
            <div class="row fit justify-center items-center q-gutter-lg">
              <slot-card title1="10:00" title2="11:00"></slot-card>
              <slot-card title1="12:00" title2="13:00"></slot-card>
              <slot-card title1="20:00" title2="21:00"></slot-card>
              <slot-card title1="20:00" title2="21:00"></slot-card>
              <slot-card title1="20:00" title2="21:00"></slot-card>
              <slot-card title1="17:00" title2="18:00"></slot-card>
              <slot-card title1="20:00" title2="21:00"></slot-card>
              <slot-card title1="22:00" title2="23:00"></slot-card>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="q-gutter-md row items-start q-pa-lg">
      <q-card flat bordered>
        <booking-detail-info
          icon="sports_soccer"
          title="Facilidades"
          desc="  Et cillum pariatur adipisicing nulla proident dolor do non minim aute
          velit ea nisi. Nostrud aute mollit pariatur fugiat dolor Lorem ipsum
          occaecat laboris excepteur et veniam. Ipsum aliquip non in laboris
          magna fugiat id velit dolore qui do esse nisi. Tempor labore esse ut
          eiusmod fugiat. Quis pariatur eu officia eiusmod do ex ut nostrud
          nulla anim in voluptate amet. Duis velit deserunt ullamco minim
          laboris nostrud. Excepteur ea est ut mollit exercitation ex dolore
          anim non laboris."
        ></booking-detail-info>
        <booking-detail-info
          icon="description"
          title="Descripción"
          desc="  Et cillum pariatur adipisicing nulla proident dolor do non minim aute
          velit ea nisi. Nostrud aute mollit pariatur fugiat dolor Lorem ipsum
          occaecat laboris excepteur et veniam. Ipsum aliquip non in laboris
          magna fugiat id velit dolore qui do esse nisi. Tempor labore esse ut
          eiusmod fugiat. Quis pariatur eu officia eiusmod do ex ut nostrud
          nulla anim in voluptate amet. Duis velit deserunt ullamco minim
          laboris nostrud. Excepteur ea est ut mollit exercitation ex dolore
          anim non laboris."
        ></booking-detail-info>
        <booking-detail-info
          icon="vpn_key"
          title="Cómo acceder al recinto"
          desc="  Et cillum pariatur adipisicing nulla proident dolor do non minim aute
          velit ea nisi. Nostrud aute mollit pariatur fugiat dolor Lorem ipsum
          occaecat laboris excepteur et veniam. Ipsum aliquip non in laboris
          magna fugiat id velit dolore qui do esse nisi. Tempor labore esse ut
          eiusmod fugiat. Quis pariatur eu officia eiusmod do ex ut nostrud
          nulla anim in voluptate amet. Duis velit deserunt ullamco minim
          laboris nostrud. Excepteur ea est ut mollit exercitation ex dolore
          anim non laboris."
        ></booking-detail-info>
        <booking-detail-info
          icon="cancel"
          title="Cancelación"
          desc="  Et cillum pariatur adipisicing nulla proident dolor do non minim aute
          velit ea nisi. Nostrud aute mollit pariatur fugiat dolor Lorem ipsum
          occaecat laboris excepteur et veniam. Ipsum aliquip non in laboris
          magna fugiat id velit dolore qui do esse nisi. Tempor labore esse ut
          eiusmod fugiat. Quis pariatur eu officia eiusmod do ex ut nostrud
          nulla anim in voluptate amet. Duis velit deserunt ullamco minim
          laboris nostrud. Excepteur ea est ut mollit exercitation ex dolore
          anim non laboris."
        ></booking-detail-info>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BookingDetailInfo from '../components/BookingDetailInfo.vue';
import BookingHeader from '../components/BookingHeader.vue';
import SlotCard from '../components/SlotCard.vue';

export default defineComponent({
  components: {
    BookingDetailInfo,
    BookingHeader,
    SlotCard,
  },
  setup() {
    return {
      date: ref('2022/09/29'),
      slide: ref(1),
    };
  },
});
</script>
