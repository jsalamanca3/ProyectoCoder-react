// Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
  writeBatch
} from "firebase/firestore";


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

  try {
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return { ...docSnapshot.data(), id: docSnapshot.id };
    } else {
      throw new Error("No se ha encontrado el producto");
    }
  } catch (error) {
    throw error;
  }
}




async function getCategoryData(categoryId) {
  const productsRef = collection(db, "products");

  const q = query(productsRef, where("category", "==", "categoryId"));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData){
  const collectionRef = collection(db, "orders")
  const docCreated = await addDoc(collectionRef, orderData)

  return(docCreated.id)
}

async function getOrder(id) {
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()){
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }

}

async function _exportProduct(){
  const productos = [
    {
      title: "Charmeleon",
      id: 1,
      stock: 10,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      price: 3000,
      category: "fuego",
    },
    {
      title: "Vulpix",
      id: 2,
      stock: 3,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg",
      price: 500,
      category: "fuego"
    },
    {
      title: "Pikachu",
      id: 3,
      stock: 10,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
      price: 1800,
      category: "electrico",
    },
    {
      title: "Arbok",
      id: 4,
      stock: 2,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",
      price: 150,
      category: "veneno",
    },
    {
      title: "Haunter",
      id: 5,
      stock: 6,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/93.svg",
      price: 700,
      category: "fantasma",
    },
    {
      title: "Gengar",
      id: 6,
      stock: 8,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg",
      price: 700,
      category: "fantasma"
    },
    {
      title: "Vileplume",
      id: 7,
      stock: 3,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/45.svg",
      price: 1250,
      category: "planta",
    },
    {
      title: "Venonat",
      id: 8,
      stock: 8,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/48.svg",
      price: 1700,
      category: "planta",
    },
    {
      title: "Arcanine",
      id: 9,
      stock: 10,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/59.svg",
      price: 3100,
      category: "fuego",
    },
    {
      title: "Primeape",
      id: 10,
      stock: 4,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/57.svg",
      price: 560,
      category: "lucha",
    },
  ];
  for(let item of productos){
    const collectionRef = collection(db, "products")
    const docCreated = await addDoc(collectionRef, item);
    console.log("Doc created witd id:", docCreated.id)
  }
}

async function _exportProductsWithBatch(){
  const productos = [
    {
      title: "Charmeleon",
      id: 1,
      stock: 10,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      price: 3000,
      category: "fuego",
    },
    {
      title: "Vulpix",
      id: 2,
      stock: 3,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg",
      price: 500,
      category: "fuego"
    },
    {
      title: "Pikachu",
      id: 3,
      stock: 10,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
      price: 1800,
      category: "electrico",
    },
    {
      title: "Arbok",
      id: 4,
      stock: 2,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",
      price: 150,
      category: "veneno",
    },
    {
      title: "Haunter",
      id: 5,
      stock: 6,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/93.svg",
      price: 700,
      category: "fantasma",
    },
    {
      title: "Gengar",
      id: 6,
      stock: 8,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg",
      price: 700,
      category: "fantasma"
    },
    {
      title: "Vileplume",
      id: 7,
      stock: 3,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/45.svg",
      price: 1250,
      category: "planta",
    },
    {
      title: "Venonat",
      id: 8,
      stock: 8,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/48.svg",
      price: 1700,
      category: "planta",
    },
    {
      title: "Arcanine",
      id: 9,
      stock: 10,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/59.svg",
      price: 3100,
      category: "fuego",
    },
    {
      title: "Primeape",
      id: 10,
      stock: 4,
      description: "Soy una descripcion",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/57.svg",
      price: 560,
      category: "lucha",
    },
  ];
  const batch = writeBatch(db);
  productos.forEach( producto => {
    const newId = producto.id
    delete producto.id;
    const newDoc = doc(db, "products", `1${newId}`)
    batch.set(newDoc, producto);
  })

  const data = await batch.commit()
  console.log("Listo!", data)
}


export { getData, getProductData, getCategoryData, createOrder, getOrder, _exportProduct, _exportProductsWithBatch, db };
