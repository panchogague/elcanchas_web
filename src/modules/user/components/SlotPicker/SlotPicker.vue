<script lang="ts" src="./SlotPicker" />
<template>
  {{ court }}
  <div class="col">
    <div class="q-mt-md">
      <span class="text-h5">Canchas</span>
      <div class="column no-wrap q-mt-sm">
        <div class="row fit q-gutter-lg" v-if="court">
          <slot-card
            v-for="pitch in court.pitches"
            :key="pitch.id"
            :title1="pitch.name"
            :title2="pitch.price.toLocaleString()"
            :subtitle="pitch.size"
            :is-selected="store.pitch?.id == pitch.id"
            @click="store.pitch = pitch"
          ></slot-card>
        </div>
      </div>
    </div>
    <div class="q-mt-md">
      <span class="text-h5">Horarios</span>
      <div class="column no-wrap q-mt-sm">
        <div style="min-width: 150px">
          <table>
            <tr>
              <td>
                <q-btn
                  flat
                  color="primary"
                  icon="chevron_left"
                  @click="prevDays"
                  :disable="isDisable"
                />
              </td>
              <td v-for="(d, index) in listDay" :key="index">
                <slot-card
                  :title1="d.text1"
                  :subtitle="d.text2"
                  :title2="d.text3"
                  :is-selected="d.isSelected"
                  is-date-picker
                  @click="selectDate(index)"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td>
                <q-btn
                  flat
                  color="primary"
                  icon="navigate_next"
                  @click="nextDays"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <slot-card
                  title1="20:00"
                  title2="21:00"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td>
                <slot-card
                  title1="20:00"
                  title2="21:00"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td>
                <slot-card
                  title1="20:00"
                  title2="21:00"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td>
                <slot-card
                  title1="20:00"
                  title2="21:00"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td>
                <slot-card
                  title1="20:00"
                  title2="21:00"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td>
                <slot-card
                  title1="20:00"
                  title2="21:00"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td>
                <slot-card
                  title1="20:00"
                  title2="21:00"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <slot-card
                  title1="20:00"
                  title2="21:00"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td>
                <slot-card
                  title1="20:00"
                  title2="21:00"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td>
                <slot-card
                  title1="20:00"
                  title2="21:00"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td>
                <slot-card
                  title1="20:00"
                  title2="21:00"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td>
                <slot-card
                  title1="20:00"
                  title2="21:00"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td>
                <slot-card
                  title1="20:00"
                  title2="21:00"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td>
                <slot-card
                  title1="20:00"
                  title2="21:00"
                  class="q-ma-sm"
                ></slot-card>
              </td>
              <td></td>
            </tr>
          </table>
          <!-- <div class="row">
      <div class="col-1">
        <q-btn
          flat
          color="primary"
          icon="chevron_left"
          @click="prevDays"
          :disable="isDisable"
        />
      </div>
      <div class="col">
        <div class="row">
          <div class="col" v-for="(d, index) in listDay" :key="d.numberDay">
            <slot-card
              :title1="d.month"
              :subtitle="d.numberDay"
              :title2="d.nameDay"
              :is-selected="d.isSelected"
              is-date-picker
              @click="selectItem(index)"
            ></slot-card>
          </div>
        </div>
      </div>
      <div class="col-1">
        <q-btn flat color="primary" icon="navigate_next" @click="nextDays" />
      </div>
    </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
