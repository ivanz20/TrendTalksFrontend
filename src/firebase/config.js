// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage,ref,uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'

const firebaseConfig = {
    apiKey: "AIzaSyC7T3KdfTQ-jRHafC-u0CMtRfdSZwHNfgA",
    authDomain: "archivos-poi.firebaseapp.com",
    databaseURL: "https://archivos-poi-default-rtdb.firebaseio.com",
    projectId: "archivos-poi",
    storageBucket: "archivos-poi.appspot.com",
    messagingSenderId: "56109750421",
    appId: "1:56109750421:web:60d65df59955e3dd51639c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file){
    const storageref = ref(storage,"/post-img/" + v4())
    await uploadBytes(storageref,file)
    const url = await getDownloadURL(storageref)
    return url
}

export async function uploadFileVideo(file){
  const storageref = ref(storage,"/short-video/" + v4())
  await uploadBytes(storageref,file)
  const url = await getDownloadURL(storageref)
  return url
}