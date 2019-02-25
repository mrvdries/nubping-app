import { firestore } from './firebase';

export const onceGetParticipant = (id) =>
  firestore.collection('Participants').doc(id).get()

export const createNewParticipant = (id, data) =>
  firestore.collection('Participants').doc(id).set(data);