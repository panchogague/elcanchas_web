import { useAuth } from '../composables/useAuth';

export default {
    setup() {
        const { onRegister, router, email, password, username, isLoading } = useAuth();

        return {

            router,
            email,
            password,
            username,
            isLoading,
            //Methods
            onRegister
        };
    },
};