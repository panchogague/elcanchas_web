<script lang="ts" src="./SearchPage.ts" />
<template>
  <q-layout>
    <q-page>
      <div class="row">
        <div class="col-2">Total canchas</div>
        <div class="col q-pa-md">
          <div class="q-gutter-md row items-start">
            <div class="col-5">
              <q-input
                color="black"
                filled
                debounce="1000"
                label="Donde quieres jugar?"
              >
                <template v-slot:append>
                  <q-icon name="place" />
                </template>
              </q-input>
            </div>
            <div class="col-5">
              <q-input
                filled
                label="Cuando quieres jugar?"
                color="black"
                v-model="date"
                mask="date"
                :rules="['date']"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="date">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-2" style="background-color: red">
          Filtros de busqueda
        </div>
        <q-spinner-gears
          v-if="isLoading"
          color="primary"
          size="3rem"
          :thickness="5"
        />
        <div class="col q-pa-md row items-start q-gutter-md" v-if="!isLoading">
          <court-card
            v-for="court in courts"
            :key="court.id"
            :court="court"
          ></court-card>
        </div>
      </div>
    </q-page>
  </q-layout>
</template>
