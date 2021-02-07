import firebase       from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAvsQ_y10JhtzHC-IaMKO6z4K7rReIv9qM",
    authDomain: "cloudgram-abba9.firebaseapp.com",
    projectId: "cloudgram-abba9",
    storageBucket: "cloudgram-abba9.appspot.com",
    messagingSenderId: "913679403759",
    appId: "1:913679403759:web:15d587f940a1890864291a"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
	timestampsInSnapshots: true
});

const timeStamp=firebase.firestore.FieldValue.serverTimestamp;
export{timeStamp,firebaseConfig};
export default firebase;