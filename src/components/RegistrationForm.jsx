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
    unstopid: "",
    screenshot: null,
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

  const handleChange = (e) => {
    if (e.target.name === "screenshot") {
      setFormData({ ...formData, screenshot: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const uploadFile = async (file, folder) => {
    if (!file) return null;
    const storageRef = ref(storage, `${folder}/${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      toast.error("You must be logged in to register.");
      navigate("/register");
      return;
    }

    if (!formData.name || !formData.phone || !formData.college || !formData.unstopid) {
      toast.error("Please ensure all fields are filled.");
      navigate("/profile");
      return;
    }
    if (!formData.screenshot) {
      toast.error("Please upload the Unstop registration screenshot.");
      return;
    }

    try {
      const unstopScreenshotUrl = await uploadFile(formData.screenshot, "unstopScreenshots");

      await addDoc(collection(db, "eventRegistrations"), {
        ...formData,
        eventType,
        screenshot: unstopScreenshotUrl,
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
                <input type="text" name="unstopid" onChange={handleChange} value={formData.unstopid} className="w-full px-4 py-3 rounded-lg bg-gray-800 text-amber-500 focus:outline-none" />
              </div>

              {/* Unstop Screenshot Upload */}
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Unstop Registration Screenshot</label>
                <input type="file" name="screenshot" onChange={handleChange} required accept="image/*" className="w-full p-2 bg-gray-800 text-gray-300 rounded-lg" />
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
