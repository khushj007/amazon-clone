import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAr-fe-6hjNK2nq6XzHbkov8t5BouFMkLM",
    authDomain: "clone-3de82.firebaseapp.com",
    projectId: "clone-3de82",
    storageBucket: "clone-3de82.appspot.com",
    messagingSenderId: "307845566612",
    appId: "1:307845566612:web:f8f9b17cfb92f692d52481",
    measurementId: "G-DLZ3GWY4QP"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export{auth};
