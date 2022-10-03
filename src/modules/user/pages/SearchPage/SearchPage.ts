
import { ref, onMounted } from 'vue';
import CourtCard from '../../components/CourtCard.vue';
import { useCourtStore } from 'src/stores/useCourtStore';
import { storeToRefs } from 'pinia';

export default {
    components: {
        CourtCard,
    },
    setup() {
        const date = ref();
        const store = useCourtStore();
        const isLoading = ref(false);
        const { courts } = storeToRefs(store);

        onMounted(async () => {
            isLoading.value = true;
            await store.loadCourts();
            isLoading.value = false;
        });
        return {
            date,
            courts,
            isLoading
        };
    },
} 