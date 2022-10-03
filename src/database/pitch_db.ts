import { db } from 'src/boot/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Pitch, pitchConverter } from 'src/models/pitch';

export const getPitchesByCourtId = async (courtId: string): Promise<Pitch[]> => {
    const q = collection(db, 'courts/' + courtId + '/pitches').withConverter(pitchConverter);
    const querySnapshot = await getDocs(q);
    const pitches: Pitch[] = [];
    querySnapshot.forEach((doc) => {
        const pitch = doc.data() as Pitch;
        pitch.id = doc.id;
        pitches.push(pitch);
    });
    return pitches;
}