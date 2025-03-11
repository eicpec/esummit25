import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { getCurrentUser, logout, updateUserDetails } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { IoSchoolSharp } from "react-icons/io5";
import { FaPhoneAlt, FaRegIdCard } from "react-icons/fa";
import Layout from "../layouts/Layout";

const passOptions = {
  none: null,
  silver: {
    type: "Silver Pass",
    cost: "₹5000",
    link: "silver-startup",
    color: "silver",
    inclusions: [
      "Stall at the Startup Expo",
      "Social Media Feature",
      "Logo on the Startup Expo banner",
    ],
  },
  golden: {
    type: "Golden Pass",
    cost: "₹10000",
    link: "golden-startup",
    color: "golden",
    inclusions: [
      "All Silver Pass benefits",
      "Gala Networking Dinner",
      "Newspaper Branding",
    ],
  },
  platinum: {
    type: "Platinum Pass",
    cost: "₹25000",
    link: "platinum-startup",
    color: "platinum",
    inclusions: [
      "All Golden Pass benefits",
      "Pitch at the Funding Conclave",
      "Main Flex Branding + LED Screen Display",
    ],
  },
};

const Profile = () => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState(
    [
      {
        id: "EVE01",
        name: "Startup Ignite",
        date: "11-05-2025"
      },
      {
        id: "EVE02",
        name: "Campus Expo",
        date: "12-05-2025"
      }
    ]
  );
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ college: "", phone: "", sid: "", pass: "none" });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const userDetails = await getCurrentUser();
          setFormData({
            college: userDetails?.college || "",
            phone: userDetails?.phone || "",
            sid: userDetails?.sid || "",
            pass: userDetails?.pass || "none",
          });
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetch(`/api/events?userId=${user.uid}`)
        .then((res) => res.json())
        .then((data) => setEvents(data))
        .catch((error) => console.error(error));
    }
  }, [user]);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSave = async () => {
    if (user) {
      try {
        await updateUserDetails(user.uid, formData);
        setUser({ ...user, ...formData });
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating user details:", error);
      }
    }
  };

  const userPass = passOptions[formData.pass];

  return (
    <Layout footer={false}>
      <div className="min-h-screen pt-24 bg-black text-white flex justify-center p-6">
        <div className="max-w-5xl h-fit w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="bg-[#282828] w-full p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-[#C2175B] text-3xl font-semibold">
                  {user?.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{user?.displayName || "User Name"}</h2>
                  <p className="text-gray-400 text-sm">{user?.email}</p>
                </div>
              </div>

              {isEditing ? (
                <div className="mt-4">
                  <input type="text" name="college" value={formData.college} onChange={handleChange} className="w-full bg-[#3A3A3A] p-2 rounded mt-2" placeholder="College" />
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#3A3A3A] p-2 rounded mt-2" placeholder="Phone" />
                  <input type="text" name="sid" value={formData.sid} onChange={handleChange} className="w-full bg-[#3A3A3A] p-2 rounded mt-2" placeholder="SID" />
                  <select name="pass" value={formData.pass} onChange={handleChange} className="w-full bg-[#3A3A3A] p-2 rounded mt-2">
                    <option value="none">No Pass</option>
                    <option value="silver">Silver Pass</option>
                    <option value="golden">Golden Pass</option>
                    <option value="platinum">Platinum Pass</option>
                  </select>
                  <button onClick={handleSave} className="mt-4 w-full bg-green-600 py-2 rounded hover:bg-green-700">Save</button>
                </div>
              ) : (
                <div className="mt-4">
                  <p className="text-gray-400 flex items-center"><IoSchoolSharp className="mr-2" /> {formData.college || "N/A"}</p>
                  <p className="text-gray-400 flex items-center"><FaPhoneAlt className="mr-2" /> {formData.phone || "N/A"}</p>
                  <p className="text-gray-400 flex items-center"><FaRegIdCard className="mr-2" /> {formData.sid || "N/A"}</p>
                </div>
              )}
            </div>
            {passOptions.silver && (
              <div className="mt-6 bg-[#282828] p-6 rounded-lg shadow-lg border-2 border-gray-600">
                <h3 className="text-lg font-bold text-{userPass.color}">{passOptions.silver.type}</h3>
                <p className="text-gray-400">Cost: {passOptions.silver.cost}</p>
                <ul className="mt-2 text-gray-300 list-disc pl-5">
                  {passOptions.silver.inclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-[#282828] border-gray-600 border-2 mt-4 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">My Events</h3>
              {events.length > 0 ? (
                events.map((event) => (
                  <div key={event.id} className="bg-[#3A3A3A] p-4 rounded mb-2">
                    <h4 className="text-lg font-semibold">{event.name}</h4>
                    <p className="text-gray-400 text-sm">{event.date}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No registered events.</p>
              )}
            </div>

      </div>
    </div>
      </div >
    </Layout >
  );
};

export default Profile;
