<template>
  <q-btn-dropdown
    color="white"
    :label="userName"
    icon="person"
    rounded
    flat
    no-caps
    v-if="isAuth"
  >
    <q-list style="max-width: 250px">
      <q-item
        v-for="item in userLinks"
        :key="item.title"
        clickable
        :to="{ name: item.link }"
      >
        <q-item-section>{{ item.title }}</q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable>
        <q-item-section @click="logout">Logout</q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>
<script lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from 'src/modules/auth/store/useAuthStore';
import { defineComponent } from 'vue';
import { userLinks } from 'src/router/links';

export default defineComponent({
  name: 'UserMenu',
  setup() {
    const useAuth = useAuthStore();
    const { userName, isAuth } = storeToRefs(useAuth);
    const { logout } = useAuth;

    return {
      userName,
      isAuth,
      userLinks,
      logout,
    };
  },
});
</script>
