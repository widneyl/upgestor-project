// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // Função para inicializar o app Firebase
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase com as credenciais do seu projeto
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDtnflWusq0GXgB2-K_48KWN9esizaX8mg",
  authDomain: "upgestor-tech-santos.firebaseapp.com",
  projectId: "upgestor-tech-santos",
  storageBucket: "upgestor-tech-santos.firebasestorage.app",
  messagingSenderId: "249050535942",
  appId: "1:249050535942:web:c79e7a2ef8df93c5d24b87",
  measurementId: "G-7TCK3CBF80"
});

// Initialize Firebase
export const database = getFirestore(firebaseConfig);
export const auth = getAuth(firebaseConfig);