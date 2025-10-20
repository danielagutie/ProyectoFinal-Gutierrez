// importar.js

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";
import fs from "fs";

// 🔸 Leemos el archivo desde la carpeta data
const data = JSON.parse(fs.readFileSync("./src/data/productos.json", "utf8"));

// 🔸 Configuración de Firebase (reemplazá con la tuya)
const firebaseConfig = {
  apiKey: "AIzaSyDYHYZ2wXs1o0S85IwZcQbD9lPjoWEtHYA",
  authDomain: "pampanova-de1cd.firebaseapp.com",
  projectId: "pampanova-de1cd",
  storageBucket: "pampanova-de1cd.firebasestorage.app",
  messagingSenderId: "195081035187",
  appId: "1:195081035187:web:a4c77c51c476041674ffc6"
};

// 🔸 Inicializamos Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function importar() {
  try {
    for (const key in data) {
      await setDoc(doc(collection(db, "products"), key), data[key]);
      console.log(`✅ Documento "${key}" importado`);
    }
    console.log("🎉 Importación completada con éxito");
  } catch (error) {
    console.error("❌ Error al importar:", error);
  }
}

importar();
