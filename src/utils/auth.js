import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseConfig"; 

const auth = getAuth(app);

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User Registered:", userCredential.user);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
