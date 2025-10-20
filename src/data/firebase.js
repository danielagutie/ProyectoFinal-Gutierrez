import { initializeApp } from "firebase/app";
import { getFirestore, query, where, collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYHYZ2wXs1o0S85IwZcQbD9lPjoWEtHYA",
  authDomain: "pampanova-de1cd.firebaseapp.com",
  projectId: "pampanova-de1cd",
  storageBucket: "pampanova-de1cd.firebasestorage.app",
  messagingSenderId: "195081035187",
  appId: "1:195081035187:web:a4c77c51c476041674ffc6"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProducts() {
  const productsRef = collection(db, 'products')
  const productsSnapshot = await getDocs(productsRef)

  const dataProducts = productsSnapshot.docs.map(item => {
    return { id: item.id, ...item.data() }
  })

  return dataProducts
}

//-----------------------------------------------------------------------------
//Funciones para productos
//-----------------------------------------------------------------------------

export async function getProductById(id) {
  const docRef = doc(db, 'products', id)
  const docSnapshot = await getDoc(docRef)
  const docData = docSnapshot.data()
  docData.id = docSnapshot.id

  return docData
}

export async function getProductsByCategory(idCategory) {
  const productsRef = collection(db, 'products')

  const q = query(productsRef, where('categoria', '==', idCategory))

  const productsSnapshot = await getDocs(q)

  const dataProducts = productsSnapshot.docs.map(item => {
    return { id: item.id, ...item.data() }
  })

  return dataProducts
}

export async function createOrder(orderData) {
  const newDoc = await addDoc(collection(db, 'orders'), orderData)
  return newDoc
}

export default app