import { db } from 'src/boot/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { userConverter, User } from 'src/models/user';

export const getUserData = async (userId: string) => {
    const docRef = doc(db, 'users', userId).withConverter(userConverter);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const user = docSnap.data();
        if (user) {
            return user as User;
        }
    }
    return null;
}

export const createUser = async (userId: string, user: User) => {
    const ref = doc(db, 'users', userId).withConverter(userConverter);
    await setDoc(ref, user);
}

