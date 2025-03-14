import React, { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { collection, addDoc, doc, getDoc, query, where, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import { toast } from "react-toastify";
import { eventData } from "../data/eventsData.js";

const RegistrationForm = () => {
  const { eventType } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    college: "",
    unstopid: ""
  });
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setFormData((prev) => ({
            ...prev,
            name: userData.displayName || "",
            phone: userData.phone || "",
            college: userData.college || "",
          }));
        }
      } else {
        toast.error("You must be logged in to register for an event.");
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      toast.error("You must be logged in to register for an event.");
      navigate("/register");
      return;
    }

    if (!formData.name || !formData.phone || !formData.college || !formData.unstopid) {
      toast.error("Please fill all fields before registering.");
      return;
    }

    try {
      // 🔥 Check if the user is already registered
      const registrationRef = collection(db, "eventRegistrations");
      const q = query(registrationRef, 
        where("userId", "==", currentUser.uid), 
        where("eventType", "==", eventType)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        toast.error("You have already registered for this event.");
        return;
      }

      // ✅ If not registered, proceed with registration
      await addDoc(collection(db, "eventRegistrations"), {
        ...formData,
        eventType,
        timestamp: new Date(),
        userId: currentUser.uid,
        userEmail: currentUser.email,
      });

      toast.success("Registration successful!");
      navigate("/events");

    } catch (error) {
      console.error("Error registering: ", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-transparent py-8 mt-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 rounded-2xl shadow-2xl p-8">
            <h2 className="text-4xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300">
              {eventData[eventType]?.EventName} Registration
            </h2>
            <p className="text-center mb-8 text-white">It is compulsory to register on Unstop before filling out this form.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Full Name</label>
                <input type="text" value={formData.name} disabled className="w-full px-4 py-3 rounded-lg bg-gray-800 text-amber-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Phone Number</label>
                <input type="text" value={formData.phone} disabled className="w-full px-4 py-3 rounded-lg bg-gray-800 text-amber-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">College Name</label>
                <input type="text" value={formData.college} disabled className="w-full px-4 py-3 rounded-lg bg-gray-800 text-amber-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Unstop ID</label>
                <input type="text" onChange={(e) => setFormData({ ...formData, unstopid: e.target.value })} value={formData.unstopid} className="w-full px-4 py-3 rounded-lg bg-gray-800 text-amber-500 focus:outline-none" />
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegistrationForm;
