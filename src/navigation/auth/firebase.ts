import { initializeApp } from 'firebase/app';
import { useIdTokenAuthRequest } from 'expo-auth-session/providers/google';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithCredential,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCnDXhrfF8I--WhavnTwo1QC40TBAg4V5A',
	authDomain: 'common-room-1939e.firebaseapp.com',
	databaseURL: 'https://common-room-1939e-default-rtdb.firebaseio.com',
	projectId: 'common-room-1939e',
	storageBucket: 'common-room-1939e.appspot.com',
	messagingSenderId: '407776071745',
	appId: '1:407776071745:web:6faa7e270bbe4825fe76c0',
	measurementId: 'G-DFLB9EN425',
};

initializeApp(firebaseConfig);

const GoogleFirebase = () =>
	useIdTokenAuthRequest({
		clientId:
			'407776071745-q2dncci7kv03onfhhoc0to6nlkjb5858.apps.googleusercontent.com',
	});

async function getUserIdToken(idToken: string) {
	const auth = getAuth();
	const credential = GoogleAuthProvider.credential(idToken);
	const { user } = await signInWithCredential(auth, credential);
	const token = await user.getIdToken();
	return token;
}

export { GoogleFirebase, getUserIdToken };
