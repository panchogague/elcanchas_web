import { defineComponent, ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/modules/auth/store/useAuthStore';
import UserMenu from '../components/UserMenu.vue';
import { userLinks } from 'src/router/links';

export default defineComponent({
    name: 'MainLayout',
    components: {
        UserMenu,
    },
    setup() {
        const leftDrawerOpen = ref(false);
        const router = useRouter();
        const useAuth = useAuthStore();
        const { setUser, logout } = useAuth;

        onMounted(() => {
            console.log('mounting..');
            setUser();
        });

        const { user, isAuth } = storeToRefs(useAuth);

        return {
            user,
            isAuth,
            router,
            leftDrawerOpen,
            userLinks,
            //Methods
            logout,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
        };
    },
});