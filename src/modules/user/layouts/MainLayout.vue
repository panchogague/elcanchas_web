<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        <q-toolbar-title
          @click="router.push({ name: 'home' })"
          style="cursor: pointer"
        >
          Booking-App
        </q-toolbar-title>
        <div class="gt-xs">
          <q-btn flat icon="shopping_cart" class="q-mr-sm" />
          <q-btn
            v-if="isAuth"
            rounded
            :label="userName"
            class="q-mr-sm"
            no-caps
          />
          <q-btn
            outline
            rounded
            v-if="isAuth"
            label="Logout"
            class="q-mr-sm"
            @click="logout"
          />
          <q-btn
            outline
            rounded
            v-if="!isAuth"
            label="sign up"
            class="q-mr-sm"
            @click="router.push({ name: 'login' })"
          />
          <q-btn
            outline
            rounded
            v-if="!isAuth"
            label="sign in"
            @click="router.push({ name: 'register' })"
          />
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
import { defineComponent, ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import EssentialLink from 'components/EssentialLink.vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/modules/auth/store/useAuthStore';

const linksList = [
  {
    title: 'Carrito',
    icon: 'shopping_cart',
    link: 'https://quasar.dev',
  },
  {
    title: 'Sign in',
    icon: 'record_voice_over',
    link: 'login',
  },
  {
    title: 'Sing up',
    icon: 'record_voice_over',
    link: 'register',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    const useAuth = useAuthStore();
    const { setUser, logout } = useAuth;

    onMounted(() => {
      console.log('mounting..');
      setUser();
    });

    const { userName, isAuth } = storeToRefs(useAuth);

    return {
      userName,
      isAuth,
      router,
      essentialLinks: linksList,
      leftDrawerOpen,
      //Methods
      logout,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
