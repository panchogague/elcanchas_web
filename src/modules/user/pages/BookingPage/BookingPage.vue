<script lang="ts" src="./BookingPage.ts" />
<template>
  <q-page class="bg-deep-teal-1">
    <div class="q-ml-lg q-mt-sm">
      <q-breadcrumbs class="text-brown">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" color="primary" />
        </template>
        <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'home' }" />
        <q-breadcrumbs-el
          label="Búsqueda"
          icon="search"
          :to="{ name: 'search' }"
        />
        <q-breadcrumbs-el :label="court?.name" icon="sports_soccer" />
      </q-breadcrumbs>
    </div>
    <booking-header
      :title="court?.name"
      :img="court?.imgUrl"
      :location="court?.location"
      :price="court?.priceFrom"
      :openHours="openHours"
      :rating="court?.rating"
    ></booking-header>
    <q-separator class="shadow-1" />
    <div class="row">
      <div class="col-9">
        <div class="row q-gutter-md q-pa-lg q-ml-md">
          <slot-picker :court="court"></slot-picker>
        </div>

        <div class="q-gutter-md row items-start q-pa-lg">
          <q-card flat bordered style="width: 100%">
            <booking-detail-info
              icon="sports_soccer"
              title="Facilidades"
              desc=""
            ></booking-detail-info>
            <booking-detail-info
              icon="description"
              title="Descripción"
              :desc="court?.description"
            ></booking-detail-info>
            <booking-detail-info
              icon="vpn_key"
              title="Cómo acceder al recinto"
              :desc="court?.howToAccess"
            ></booking-detail-info>
            <booking-detail-info
              icon="cancel"
              title="Cancelación"
              :desc="court?.cancellationPolicy"
            ></booking-detail-info>
          </q-card>
        </div>
      </div>
      <div class="col-3 gt-sm" style="position: fixed; right: 0; top: auto">
        <div class="row q-pa-sm">
          <booking-detail-card></booking-detail-card>
        </div>
      </div>
    </div>
  </q-page>
</template>
