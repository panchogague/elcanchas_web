import { db } from 'src/boot/firebase';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
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


export const getCourtById = async (courtId: string) => {
  const docRef = doc(db, 'courts', courtId).withConverter(courtConverter);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const court = docSnap.data();
    if (court) {
      court.id = courtId;
      getPitchesByCourtId(courtId).then((resp) => {
        court.pitches = resp;
      });
      return court as Court;
    }
  }
  return null;
}
