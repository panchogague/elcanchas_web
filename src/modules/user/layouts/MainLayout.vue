<script lang="ts" src="./MainLayout.ts" />
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
        <div>
          <q-btn flat icon="shopping_cart" class="q-mr-sm" />
          <user-menu class="gt-xs"></user-menu>
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
        <div class="lt-sm" v-if="isAuth">
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
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple :to="{ name: 'home' }">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>Inicio</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            v-for="item in userLinks"
            :key="item.title"
            :to="{ name: item.link }"
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section> {{ item.title }} </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">
            {{ user?.firstName + ' ' + user?.lastName }}
          </div>
          <div>{{ user?.email }}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
