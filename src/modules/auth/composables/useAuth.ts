import { User } from 'src/models/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/useAuthStore';
export const useAuth = () => {

    const router = useRouter();
    const authStore = useAuthStore();
    const email = ref('');
    const password = ref('');
    const username = ref('');
    const isLoading = ref(false);

    return {
        onLogin: async () => {
            isLoading.value = true;
            await authStore.login(email.value, password.value);
            isLoading.value = false;
        },
        onRegister: async () => {
            isLoading.value = true;
            const user = new User(email.value, username.value, 'test', false);
            user.password = password.value;
            await authStore.register(user);
            isLoading.value = false;
        },
        router,
        email,
        password,
        username,
        isLoading
    };

};