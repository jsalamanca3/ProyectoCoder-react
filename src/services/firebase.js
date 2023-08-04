// Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query, } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-4mlAKg_g_XauDcMGdiTxpdCzrrMxCGw",
    authDomain: "proyecto-react-coderhous-fdcef.firebaseapp.com",
    projectId: "proyecto-react-coderhous-fdcef",
    storageBucket: "proyecto-react-coderhous-fdcef.appspot.com",
    messagingSenderId: "618357078489",
    appId: "1:618357078489:web:7e12885744f9f8469e01c8",
    measurementId: "G-DBSHPGW6GS"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);


async function getData() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map(
    (item) => {
      return { ...item.data(), id: item.id };
    }
  );
  return docsData;
}

async function getProductData(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

async function getCategoryData() {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("price", ">=", 200));
  const documentsSnapshot = await getDocs(q);
  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

export { getData, getProductData, getCategoryData };