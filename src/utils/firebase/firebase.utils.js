import { initializeApp } from "firebase/app";


import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged

} from "firebase/auth";


import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore'





const firebaseConfig = {
    apiKey: "AIzaSyDobcp6ij0g5pEnA3YoILgt8DvsSo4VrIk",
    authDomain: "crwn-clothing-db-6cd8e.firebaseapp.com",
    projectId: "crwn-clothing-db-6cd8e",
    storageBucket: "crwn-clothing-db-6cd8e.appspot.com",
    messagingSenderId: "2929030806",
    appId: "1:2929030806:web:b53cbe234f15b5ad2ab4b7"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, provider);

export const db = getFirestore(app);

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        } catch (error) {
            // Aquí podrías manejar el error, por ejemplo, loguearlo
            console.error("Error creating user document", error.message);
        }
    }

    return userDocRef;
}; // Aquí falta la llave de cierre para la función


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object);
    });
    await batch.commit();
    console.log("done");


}

export const getCaregoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categores');
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapchot) => {
        const { title, items } = docSnapchot.data()
        acc[title.toLowerCase()] = items
        return acc


    }, {})

    return categoryMap;


}




export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}


export const signOutUser = async () => await signOut(auth);



export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback);
}
