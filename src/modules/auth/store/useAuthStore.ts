import { defineStore } from 'pinia';
import { auth, onAuthStateChanged } from 'src/boot/firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    UserCredential
} from 'firebase/auth'
import { useUserDB } from 'src/database/useUserDB';
import { User } from 'src/models/User';


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: '' as string,
        user: null as User | null,
        uid: '' as string
    }),
    actions: {
        async login(email: string, password: string) {
            try {
                const resp = await signInWithEmailAndPassword(auth, email, password) as UserCredential;
                this.token = resp.user.refreshToken;
                this.user = await useUserDB().getUserData(resp.user.uid);
                this.uid = resp.user.uid;

                localStorage.setItem('token', JSON.stringify(this.token));
                localStorage.setItem('uid', JSON.stringify(resp.user.uid));
                this.router.push({ name: 'home' });
            } catch (error) {
                // const alertStore = useAlertStore();
                // alertStore.error(error);
                console.log(error);
            }
        },

        async register(user: User) {
            try {
                const resp = await createUserWithEmailAndPassword(auth, user.email, user.password ?? '') as UserCredential;
                this.token = resp.user.refreshToken;
                await useUserDB().createUser(resp.user.uid, user);
                this.uid = resp.user.uid;

                localStorage.setItem('token', JSON.stringify(this.token));
                localStorage.setItem('uid', JSON.stringify(this.uid));
                this.router.push({ name: 'home' });
            } catch (error) {
                console.log(error);
            }
        },
        async logout() {
            this.user = null;
            this.token = '';
            this.uid = '';
            localStorage.removeItem('token');
            localStorage.removeItem('uid');
            await signOut(auth);
            this.router.push({ name: 'home' });
        },

        setUser() {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    this.token = user.refreshToken;
                    this.uid = user.uid;
                    this.user = await useUserDB().getUserData(user.uid);

                    localStorage.setItem('token', JSON.stringify(this.token));
                    localStorage.setItem('uid', JSON.stringify(this.uid));

                } else {
                    console.log('onAuthState Observer: user not logged in or created yet')
                }
            })
            persist: true //<---------persists user state to local storage! 
        },
    },
    getters: {
        isAuth: (state): boolean => state.user != null,
        userName: (state): string => state.user != null ? state.user.firstName : '',
    },
});