import React, { useState, useEffect } from "react";
import { db } from "../firebase.js";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import { toast } from "react-toastify";
import { eventData } from "../data/eventsData.js";

const RegistrationForm = () => {
  const { eventType } = useParams();
  const navigate = useNavigate();
  const storage = getStorage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    college: "",
    unstopid: "",
    screenshot: null,
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);

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

  const handleChange = async (e) => {
    if (e.target.name === "screenshot") {
      const file = e.target.files[0];
      setFormData({ ...formData, screenshot: file });

      if (file) {
        setUploading(true);
        const url = await uploadFile(file, "unstopScreenshots");
        setFormData((prev) => ({ ...prev, screenshot: url }));
        setUploading(false);
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const uploadFile = async (file, folder) => {
    if (!file || !currentUser) return null;

    // Extract user info
    const username = currentUser.displayName
      ? currentUser.displayName.replace(/\s+/g, "_")
      : "user";
    const randomNum = Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
    // const fileExtension = file.name.split(".").pop(); // Get file extension

    // Construct file name: username_eventname_randomnumber.extension
    const customFileName = `${username}_${eventType}_${randomNum}_${file.name}`;

    // Upload to Firebase Storage
    const storageRef = ref(storage, `${folder}/${customFileName}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple clicks
    setIsSubmitting(true); // Start loading

    if (!currentUser) {
      toast.error("You must be logged in to register.");
      navigate("/register");
      setIsSubmitting(false);
      return;
    }

    if (
      !formData.name ||
      !formData.phone ||
      !formData.college ||
      !formData.unstopid
    ) {
      toast.error("Please ensure all fields are filled.");
      navigate("/profile");
      setIsSubmitting(false);
      return;
    }
    if (!formData.screenshot) {
      toast.error("Please upload the Unstop registration screenshot.");
      setIsSubmitting(false);
      return;
    }

    try {
      const userQuery = query(
        collection(db, "eventRegistrations"),
        where("userId", "==", currentUser.uid),
        where("eventType", "==", eventType)
      );
      const querySnapshot = await getDocs(userQuery);

      if (!querySnapshot.empty) {
        toast.error("You have already registered for this event.");
        setIsSubmitting(false);
        return;
      }

      const unstopScreenshotUrl = await uploadFile(
        formData.screenshot,
        "unstopScreenshots"
      );

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

    setIsSubmitting(false); // Stop loading
  };

  return (
    <Layout>
      <div className="min-h-screen bg-transparent py-8 mt-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 rounded-2xl shadow-2xl p-8">
            <h2 className="text-4xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300">
              {eventData[eventType]?.EventName} Registration
            </h2>
            <p className="text-center mb-8 text-white">
              It is compulsory to register on Unstop before filling out this
              form.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  disabled
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  disabled
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  College Name
                </label>
                <input
                  type="text"
                  value={formData.college}
                  disabled
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Unstop ID
                </label>
                <input
                  type="text"
                  name="unstopid"
                  onChange={handleChange}
                  value={formData.unstopid}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-amber-500 focus:outline-none"
                  required
                />
              </div>

              {/* Unstop Screenshot Upload */}
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Unstop Registration Screenshot
                </label>
                <input
                  type="file"
                  name="screenshot"
                  onChange={handleChange}
                  required
                  accept="image/*"
                  className="w-full p-2 bg-gray-800 text-gray-300 rounded-lg"
                />
                {uploading && (
                  <p className="text-blue-400 text-sm mt-1">Uploading...</p>
                )}
              </div>

              <button
                type="submit"
                className={`w-full py-3 font-bold rounded-lg ${
                  isSubmitting ? "bg-gray-600 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105"
                } text-white`}
                disabled={isSubmitting || uploading}
              >
                {isSubmitting  ? "Registering..." : (uploading ? "Uploading":"Register Now")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegistrationForm;
