import { defineStore } from 'pinia';
import { Court } from 'src/models/court';
import { Pitch } from 'src/models/pitch';
import { date } from 'quasar';

export const useBooking = defineStore('booking', {
  state: () => ({
    currentDate: new Date() || Date.now,
    pitch: null as Pitch | null,
    court: null as Court | null,
  }),
  getters: {
    pitchName: (state) => state.pitch != null ? `${state.pitch?.name} (${state.pitch?.size})` : '',
    getCurrentDate: (state) => date.formatDate(state.currentDate, 'DD-MM-YYYY'),
  },
  actions: {

  },
});
