import { Court } from 'src/models/court';
import { useCourtStore } from 'src/stores/useCourtStore';
import { defineComponent, ref, onMounted, computed } from 'vue';
import BookingDetailCard from '../../components/BookingDetailCard.vue';
import BookingDetailInfo from '../../components/BookingDetailInfo.vue';
import BookingHeader from '../../components/BookingHeader.vue';
import SlotCard from '../../components/SlotCard.vue';

export default defineComponent({
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    components: {
        BookingDetailInfo,
        BookingHeader,
        SlotCard,
        BookingDetailCard,
    },
    setup(prop) {
        const store = useCourtStore();
        const court = ref<Court>();

        onMounted(async () => {
            if (store.courts.length > 0) {
                court.value = store.getCourtById(prop.id);
            } else {
                await store.loadCourtById(prop.id);
                court.value = store.getCourtById(prop.id);
            }
        });

        return {
            court,
            date: ref('2022/09/29'),
            openHours: computed(() => {
                if (court.value != null) {
                    const openH = court.value?.openDays;
                    if (openH != null) {
                        return `Abre a las ${openH[0].from} · Cierra a las: ${openH[0].to}`
                    }
                    //TODO:mejorar esto
                }
                return '';
            })
        };
    },
});