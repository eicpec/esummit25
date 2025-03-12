import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, updateDoc, query, getDocs, collection, where, serverTimestamp, addDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu9_za8XZZRizcFVS7fvTSMV7dgzDV0K4",
  authDomain: "sample-esummit.firebaseapp.com",
  projectId: "sample-esummit",
  storageBucket: "sample-esummit.firebasestorage.app",
  messagingSenderId: "385925468077",
  appId: "1:385925468077:web:2f06ffdc1a3e40b0f29b24",
  measurementId: "G-RR8J1C87YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

// Session duration in milliseconds (e.g., 1 hour)
const SESSION_DURATION = 3600000;

// Save user to Local Storage (Only Required Fields)
const saveUserToLocalStorage = (user) => {
  const userData = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || "",
    photoURL: user.photoURL || "",
    sessionExpiry: Date.now() + SESSION_DURATION
  };
  localStorage.setItem("user", JSON.stringify(userData));
};

// Get user from Local Storage
const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  if (user) {
    const userData = JSON.parse(user);
    if (Date.now() > userData.sessionExpiry) {
      localStorage.removeItem("user");
      return null;
    }
    return userData;
  }
  return null;
};

// Save user to Firestore (Only Required Fields)
const saveUserToFirestore = async (user) => {
  const userData = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || "",
    photoURL: user.photoURL || "",
    createdAt: new Date().toISOString()
  };

  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, userData, { merge: true });
};

// Sign in with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    saveUserToLocalStorage(user);
    await saveUserToFirestore(user);

    alert("Please complete your profile in order to proceed with event registration");

    return user;
  } catch (error) {
    console.error("Google Login Error:", error.message);
    throw error;
  }
};

// Register with Email & Password
export const registerWithEmail = async (email, name, password, collegeName, sid, phone) => {
  try {
    if (!email || !password || !name || !phone || !collegeName || !sid) {
      throw new Error("All fields are required.");
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("User created successfully:", user.uid);

    // Update the user's profile with the display name
    await updateProfile(user, { displayName: name });

    const userRef = doc(db, "users", user.uid);

    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: name,
      phone: phone,
      college: collegeName,
      sid: sid,
      createdAt: new Date().toISOString(),
    };

    console.log("User data to be saved:", userData);

    await setDoc(userRef, userData);

    console.log("User data successfully written to Firestore.");

    saveUserToLocalStorage(userData); // Save to local storage

    return user;
  } catch (error) {
    console.error("Registration Error:", error);
    if (error.code === 'auth/email-already-in-use') {
      throw new Error("Email already in use.");
    } else if (error.code === 'auth/weak-password') {
      throw new Error("Password too weak.");
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

// Login with Email & Password
export const loginWithEmail = async (email, password) => {
  try {
    console.log("trying backend");
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("user: ", user);

    saveUserToLocalStorage(user);
    await saveUserToFirestore(user);

    return user;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};

// Logout User
export const logout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Logout Error:", error.message);
    throw error;
  }
};

export const getCurrentUser = async () => {
  const user = auth.currentUser;
  if (user) {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      return { uid: user.uid, ...userSnap.data() };
    }
  }
  return null;
};

// Check if user is logged in
export const isLoggedIn = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    return false;
  }
  return true;
};

export const updateUserDetails = async (userId, userData) => {
  try {
    console.log(userId, userData);
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, userData);
    return true;
  } catch (error) {
    console.error("Error updating user details:", error);
    throw error;
  } 
};

export const createUserProfile = async (user) => {
  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, {
    email: user.email,
    displayName: user.displayName || "User",
    college: "",  // Empty fields to indicate missing info
    phone: "",
    sid: "",
  }, { merge: true });
};


export const getUserPassInfo = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("No user is logged in.");
    }

    // Query the passRegistrations collection for the logged-in user's email
    const passQuery = query(
      collection(db, "passRegistrations"),
      where("email", "==", user.email)
    );

    const passSnapshot = await getDocs(passQuery);

    if (!passSnapshot.empty) {
      // Assuming a user has only one pass entry
      return passSnapshot.docs[0].data();
    } else {
      return null; // No pass found
    }
  } catch (error) {
    console.error("Error fetching pass info:", error);
    throw error;
  }
};

// Register User for an Event
export const registerForEvent = async (eventName) => {
  try {
    const auth = getAuth();
    const db = getFirestore();

    if (!auth.currentUser) {
      throw new Error("User is not authenticated");
    }

    const userId = auth.currentUser.uid;
    const email = auth.currentUser.email;

    // Fetch user details from Firestore
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      throw new Error("User data not found.");
    }

    const userData = userSnap.data();

    // Check if required details are missing
    if (!userData.college || !userData.sid || !userData.phone) {
      alert("Please complete your profile with College Name, SID, and Phone Number before registering for events.");
      return;
    }

    console.log("Checking if user is already registered...");

    // Query Firestore to check if the user has already registered for the event
    const eventRef = collection(db, "eventRegistrations");
    const q = query(eventRef, where("userId", "==", userId), where("eventName", "==", eventName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.warn("User is already registered for this event.");
      alert("You have already registered for this event!");
      return;
    }

    // If the user is not already registered, proceed with registration
    await addDoc(eventRef, {
      userId: userId,
      eventName: eventName,
      timestamp: new Date(),
      email: email
    });

    console.log("Successfully registered for event:", eventName);
    alert("Registration successful!");

  } catch (error) {
    console.error("Error registering for event:", error.message);
    alert(error.message);
  }
};
