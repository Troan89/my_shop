// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {DatabaseReference,
    Query,
    child,
    connectDatabaseEmulator,
    getDatabase,
    limitToLast,
    off,
    onChildAdded,
    onChildChanged,
    onChildRemoved,
    onValue,
    orderByChild,
    push,
    query,
    ref,
    runTransaction,
    set,
    update,} from "firebase/database";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// const database = getDatabase();
// console.log(database)
// if (window.location.hostname === 'localhost') {
//     connectDatabaseEmulator(database, '127.0.0.1', 9000);
// }

const firebaseConfig = {
    apiKey: "AIzaSyAq1fHgTJeDiCvjTeHjGg0wLfb1xSpxBdE",
    authDomain: "shop-e5962.firebaseapp.com",
    databaseURL: "https://shop-e5962-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shop-e5962",
    storageBucket: "shop-e5962.appspot.com",
    messagingSenderId: "784890665949",
    appId: "1:784890665949:web:02f85fd88332071aba7434",
    measurementId: "G-BT538MSSPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, 'Shop2');
// console.log(getDatabase(app))
//
// const db = getFirestore(app);

// console.log(db)
// async function getCities(db) {
//     const citiesCol = collection(db, 'products');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
// }
//
// console.log(getCities(db))

// console.log(database.getDatabase(app))
export const analytics = getAnalytics(app);