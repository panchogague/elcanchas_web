<script lang="ts" src="./RegisterPage.ts" />
<template>
  <q-page
    class="bg-teal-1 window-height window-width row justify-center items-center"
  >
    <div class="row">
      <q-card square class="shadow-24" style="width: 450px; height: 550px">
        <q-card-section class="bg-teal-7">
          <h4 class="text-h5 text-white q-my-md">Registrate</h4>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl q-pb-lg">
            <q-input
              square
              clearable
              v-model="email"
              type="email"
              label="Email"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
            <q-input
              square
              clearable
              v-model="username"
              type="username"
              label="Username"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
            <q-input
              square
              clearable
              v-model="password"
              type="password"
              label="Password"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-lg">
          <q-btn
            unelevated
            size="lg"
            color="primary"
            class="full-width text-white"
            label="Comienza ahora"
            no-caps
            @click="onRegister"
            :disable="isLoading"
          >
            <q-circular-progress
              v-if="isLoading"
              indeterminate
              rounded
              color="white"
              size="30px"
              class="q-ml-lg"
          /></q-btn>
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
          <p
            class="text-grey-6"
            @click="router.push({ name: 'login' })"
            style="cursor: pointer"
          >
            Regresar a login
          </p>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
