import { db } from 'src/boot/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const getCourts = async () => {
  const q = query(collection(db, 'courts'), where('isActive', '==', true));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
  });

  return null;
};
