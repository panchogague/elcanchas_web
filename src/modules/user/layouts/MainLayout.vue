<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        <q-toolbar-title> Booking-App </q-toolbar-title>
        <div class="gt-xs">
          <q-btn flat icon="shopping_cart" class="q-mr-sm" />
          <q-btn outline rounded label="sign up" class="q-mr-sm" />
          <q-btn outline rounded label="sign in" />
        </div>
        <div class="lt-sm">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Carrito',
    icon: 'shopping_cart',
    link: 'https://quasar.dev',
  },
  {
    title: 'Sign in',
    icon: 'record_voice_over',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Sing up',
    icon: 'record_voice_over',
    link: 'https://chat.quasar.dev',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
