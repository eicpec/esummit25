import React, { useState, useEffect } from "react";
import { db, storage } from "../firebase.js"; // Import Firestore and Storage
import { collection, addDoc } from "firebase/firestore"; // Firestore functions
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Storage functions
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Firebase Auth
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";

const RegistrationForm = () => {
  const { eventType } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    sid: "",
    college: "",
    screenshot: null,
  });
  const [currentUser, setCurrentUser] = useState(null); // Track logged-in user

  // Fetch the currently logged-in user
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user); // Set the logged-in user
      } else {
        setCurrentUser(null); // No user is logged in
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "screenshot") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("You must be logged in to register for an event.");
      return;
    }

    try {
      let screenshotUrl = null;

      // Upload the screenshot file to Firebase Storage
      if (formData.screenshot) {
        const storageRef = ref(storage, `screenshots/${formData.screenshot.name}`);
        await uploadBytes(storageRef, formData.screenshot);
        screenshotUrl = await getDownloadURL(storageRef);
      }

      // Add the registration data to Firestore
      await addDoc(collection(db, "registrations"), {
        ...formData,
        screenshot: screenshotUrl, // Save the download URL
        eventType,
        timestamp: new Date(),
        userId: currentUser.uid, // Add the user's UID
        userEmail: currentUser.email, // Add the user's email
      });

      alert("Registration successful!");
      navigate("/events");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-transparent py-8 mt-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 rounded-2xl shadow-2xl p-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300">
              {eventType} Event Registration
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Student ID (SID)
                </label>
                <input
                  type="text"
                  name="sid"
                  value={formData.sid}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your student ID"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  College Name
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your college name"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Unstop Registration Screenshot
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full h-32 border-4 border-dashed border-gray-600 hover:border-blue-500 rounded-lg cursor-pointer transition-all">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="pt-1 text-sm text-gray-400">
                        {formData.screenshot
                          ? formData.screenshot.name
                          : "Upload screenshot (PNG/JPG)"}
                      </p>
                    </div>
                    <input
                      type="file"
                      name="screenshot"
                      onChange={handleChange}
                      required
                      accept="image/*"
                      className="opacity-0"
                    />
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all transform hover:scale-105"
              >
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