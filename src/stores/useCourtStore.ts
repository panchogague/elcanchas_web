import { defineStore } from 'pinia';
import { getCourts, getCourtById } from 'src/database/court_db';
import { Court } from 'src/models/court';

export const useCourtStore = defineStore('court', {
  state: () => ({
    courts: [] as Court[]
  }),
  getters: {
    getCourtById: (state) => (id: string) => state.courts.find(d => d.id === id),
  },
  actions: {
    async loadCourts() {
      try {
        const resp = await getCourts();
        this.courts = resp;
      } catch (error) {
        console.log(error);
      }
    },
    async loadCourtById(courtId: string) {
      try {
        const court = await getCourtById(courtId);
        if (court != null) {
          this.courts.push(court);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
});
