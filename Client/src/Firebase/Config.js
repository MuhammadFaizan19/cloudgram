import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCEHF8KCmv2Q9wNZBAzCIAchsVW13eqt34",
    authDomain: "cloudgram-v2.firebaseapp.com",
    projectId: "cloudgram-v2",
    storageBucket: "cloudgram-v2.appspot.com",
    messagingSenderId: "363404342754",
    appId: "1:363404342754:web:2496e7b8d95bf5cb5975bb"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
    timestampsInSnapshots: true
});
const storage = firebase.storage();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
export { timeStamp, storage, firebaseConfig };
export default firebase;