import React, { useState, useEffect } from "react";
import { db, storage } from "../firebase.js";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const { eventType } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    college: "",
    // screenshot: null,
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
        toast.error("You must be logged in to register for an event and Update your profile to continue.");
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // const handleChange = (e) => {
  //   if (e.target.name === "screenshot") {
  //     setFormData({ ...formData, screenshot: e.target.files[0] });
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      toast.error("You must be logged in to register for an event.");
      navigate("/register");
      return;
    }
    if (!formData.name || !formData.phone || !formData.college || !formData.unstopid) {
      toast.error("Please ensure your profile is complete with a valid name, phone number, and college.");
      navigate("/profile");
      return;
    }
    try {
      // let screenshotUrl = null;
      // if (formData.screenshot) {
      //   const storageRef = ref(storage, `screenshots/${formData.screenshot.name}`);
      //   await uploadBytes(storageRef, formData.screenshot);
      //   screenshotUrl = await getDownloadURL(storageRef);
      // }
      await addDoc(collection(db, "eventRegistrations"), {
        ...formData,
        // screenshot: screenshotUrl,
        eventType,
        unstopid: formData.unstopid,
        timestamp: new Date(),
        userId: currentUser.uid,
        userEmail: currentUser.email,
      });
      toast.success("Registration successful!");
      navigate("/events");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Registration failed. Please try again.");
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
                <label className="block text-gray-300 text-sm font-semibold mb-2">Full Name</label>
                <input type="text" name="name" value={formData.name} disabled className="w-full px-4 py-3 rounded-lg bg-gray-800 text-amber-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Phone Number</label>
                <input type="text" name="phone" value={formData.phone} disabled className="w-full px-4 py-3 rounded-lg bg-gray-800 text-amber-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">College Name</label>
                <input type="text" name="college" value={formData.college} disabled className="w-full px-4 py-3 rounded-lg bg-gray-800 text-amber-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Unstop ID</label>
                <input type="text" name="unstopid" onChange={(e) => setFormData({ ...formData, unstopid: e.target.value })} value={formData.unstopid} className="w-full px-4 py-3 rounded-lg bg-gray-800 text-amber-500 focus:outline-none" />
              </div>
              {/* <div>
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
              </div> */}
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
