import { db } from 'src/boot/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Court, courtConverter } from 'src/models/court';
import { getPitchesByCourtId } from './pitch_db';

export const getCourts = async (): Promise<Court[]> => {
  const q = query(collection(db, 'courts').withConverter(courtConverter), where('isActive', '==', true));
  const querySnapshot = await getDocs(q);
  const courts: Court[] = [];
  querySnapshot.forEach((item) => {
    const court = item.data() as Court;
    getPitchesByCourtId(item.id).then((resp) => {
      court.pitches = resp;
    });
    court.id = item.id;
    courts.push(court);
  });
  return courts;
};
