import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCxc1zFgA5csN6sPtzwMmO84KgIf1sM9cs',
  authDomain: 'crown-db-a5493.firebaseapp.com',
  databaseURL: 'https://crown-db-a5493.firebaseio.com',
  projectId: 'crown-db-a5493',
  storageBucket: 'crown-db-a5493.appspot.com',
  messagingSenderId: '1056985734043',
  appId: '1:1056985734043:web:e6c02eb2c952b8bf191f3e',
  measurementId: 'G-ND99LHYW0S',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error(`error creating user : ${error.message}`);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
