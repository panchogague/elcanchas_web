<script lang="ts" src="./LoginPage.ts" />
<template>
  <q-page
    class="bg-teal-1 window-height window-width row justify-center items-center"
  >
    <div class="row">
      <q-card square class="shadow-24" style="width: 450px; height: 550px">
        <q-card-section class="bg-teal-7">
          <h4 class="text-h5 text-white q-my-md">Ingresar con</h4>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
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
        <q-card-section>
          <div class="text-center q-pa-md q-gutter-md">
            <q-btn round color="indigo-7">
              <q-icon name="fab fa-facebook-f" size="1.2rem" />
            </q-btn>
            <q-btn round color="red-8">
              <q-icon name="fab fa-google-plus-g" size="1.2rem" />
            </q-btn>
            <q-btn round color="light-blue-5">
              <q-icon name="fab fa-twitter" size="1.2rem" />
            </q-btn>
          </div>
        </q-card-section>
        <q-card-actions class="q-px-lg">
          <q-btn
            unelevated
            size="lg"
            color="primary"
            class="full-width text-white"
            label="Sign In"
            no-caps
            @click="onLogin"
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
            @click="router.push({ name: 'register' })"
            style="cursor: pointer"
          >
            Registrate
          </p>
          <p class="text-grey-6">Olvidaste tu cuenta?</p>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
