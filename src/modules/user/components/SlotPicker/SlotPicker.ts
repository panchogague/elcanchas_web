import { defineComponent, ref, onMounted, computed } from 'vue';
import { date } from 'quasar';
import SlotCard from '../SlotCard.vue';
import { ItemPicker } from './models/item_picker';
import { Court } from 'src/models/court';
import { useBooking } from '../../store/useBooking';


export default defineComponent({
    name: 'SlotPicker',
    components: {
        SlotCard,
    },
    props: {
        court: {
            type: Court,
            required: true,
        }
    },
    setup() {
        const listDay = ref<ItemPicker[]>([]);
        const { addToDate } = date;
        const page = ref(1);
        const store = useBooking();
        onMounted(() => {
            loadDays(new Date());
        });

        const loadDays = (fecha: Date) => {
            listDay.value = [];
            for (let index = 0; index < 7; index++) {
                const newDay = addToDate(fecha, { days: index });
                const nameDay = date.formatDate(newDay, 'ddd.');
                const numberDay = date.formatDate(newDay, 'DD');
                const month = date.formatDate(newDay, 'MMM.');
                listDay.value.push(
                    {
                        text3: nameDay,
                        text2: numberDay,
                        text1: month,
                        isSelected: index == 0 ? true : false,
                        value: date.formatDate(newDay, 'YYYY-MM-DD')
                    });
            }
        };

        return {
            listDay,
            store,
            isDisable: computed(() => page.value == 1),
            nextDays: () => {
                page.value++;
                const newDay = addToDate(new Date(), { days: page.value * 7 });
                loadDays(newDay);
            },
            prevDays: () => {
                page.value--;
                const newDay = addToDate(new Date(), { days: page.value * 7 });
                loadDays(newDay);
            },
            selectDate: (index: number) => {
                for (const item in listDay.value) {
                    listDay.value[item].isSelected = false;
                }
                listDay.value[index].isSelected = !listDay.value[index].isSelected;
                store.currentDate = new Date(listDay.value[index].value);
            },

        };
    },
});