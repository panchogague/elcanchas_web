<template>
  <q-layout view="hHh Lpr lff">
    <q-header>
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        <q-toolbar-title style="cursor: pointer"> Booking-App </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple :to="{ name: 'dashboard' }">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>
            <q-item-section> Home </q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'admin_court' }">
            <q-item-section avatar>
              <q-icon name="fa-regular fa-address-card" />
            </q-item-section>
            <q-item-section> Perfil Recinto </q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'pitches' }">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-futbol" />
            </q-item-section>
            <q-item-section> Mis Canchas </q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'booking_history' }">
            <q-item-section avatar>
              <q-icon name="fa-regular fa-folder" />
            </q-item-section>
            <q-item-section> Historial </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-ripple @click="logout">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-right-from-bracket" />
            </q-item-section>
            <q-item-section> Logout </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { useAuthStore } from 'src/modules/auth/store/useAuthStore';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const { logout } = useAuthStore();

    return {
      drawer: ref(false),
      miniState: ref(true),
      logout,
    };
  },
});
</script>
