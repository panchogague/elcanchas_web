import { DocumentSnapshot, SnapshotOptions } from 'firebase/firestore';

export class User {
    email: string;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
    password?: string;

    constructor(email: string, firstName: string, lastName: string, isAdmin: boolean) {
        this.email = email;
        this.firstName = firstName;
        this.isAdmin = isAdmin;
        this.lastName = lastName;
    }

    toString() {
        return this.email + ', ' + this.firstName + ', ' + this.lastName;
    }
}

// Firestore data converter
export const userConverter = {
    toFirestore: (user: User) => {
        return {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            isAdmin: user.isAdmin,
        };
    },
    fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
        const data = snapshot.data(options);
        if (data) {
            return new User(data.email, data.firstName, data.lastName, data.isAdmin);
        }
    }
};
