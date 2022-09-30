import { defineComponent } from 'vue';
import { useAuth } from '../composables/useAuth';

export default defineComponent({
    setup() {
        const { onLogin, router, email, password, isLoading } = useAuth();

        return {

            router,
            email,
            password,
            isLoading,
            //Methods
            onLogin
        };
    },
});