import { doc, updateDoc, arrayUnion, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Buy Pass
export const buyPass = async (userId, passId) => {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        await updateDoc(userRef, {
            passes: arrayUnion(passId),
        });
    } else {
        await setDoc(userRef, { passes: [passId], registeredEvents: [] });
    }

    console.log(`Pass ${passId} purchased successfully.`);
};

// Register for Event
export const registerForEvent = async (userId, eventId) => {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
        throw new Error("User not found");
    }

    const userData = userSnap.data();
    const eventRef = doc(db, "events", eventId);
    const eventSnap = await getDoc(eventRef);

    if (!eventSnap.exists()) {
        throw new Error("Event not found");
    }

    const eventData = eventSnap.data();
    const requiredPass = eventData.requiredPass;

    if (!userData.passes.includes(requiredPass)) {
        throw new Error("You must buy the required pass to register for this event.");
    }

    // Add event to registered list
    await updateDoc(userRef, {
        registeredEvents: arrayUnion(eventId),
    });

    console.log(`Registered for ${eventId} successfully.`);
};