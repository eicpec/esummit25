import React, { useEffect, useState } from "react";
import { auth, getUserPassInfo, isLoggedIn } from "../utils/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { getCurrentUser, logout, updateUserDetails } from "../utils/firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { IoSchoolSharp } from "react-icons/io5";
import { FaPhoneAlt, FaRegIdCard } from "react-icons/fa";
import Layout from "../layouts/Layout";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"; // Ensure Firestore is imported

const passData = {
  "Free": {
    type: "Free",
    student: true,
    cost: "₹0",
    link: "free",
    color: "silver",
    inclusions: [
      "Access to Networking Arena",
      "Visit Startup Expo",
      "Certain Panel Discussions",
    ],
    exclusions: [
      "Participation in Competitions",
      "Intern Fair",
      "Speaker Sessions",
      "Startup Expo Stall",
    ]
  },
  "Student": {
    type: "Student",
    student: true,
    cost: "₹199",
    link: "student",
    color: "blue",
    inclusions: [
      "Access to Networking Arena",
      "Visit Startup Expo",
      "All Panel Discussions",
      "Intern Fair",
      "All Speaker Sessions",
      "Participation in Competitions",
    ],
    exclusions: [
      "Startup Expo Stall",
      "Funding Conclave",
    ],
  },
  "Premium": {
    type: "Premium",
    student: true,
    cost: "₹999",
    link: "premium",
    color: "gold",
    inclusions: [
      "Access to Networking Arena",
      "Visit Startup Expo",
      "All Panel Discussions",
      "Intern Fair",
      "All Speaker Sessions",
      "Participation in Competitions",
      "Set up Stall in Startup Expo",
    ],
    exclusions: [
      "Funding Conclave",
    ],
  },
  "Business": {
    type: "Business",
    student: false,
    cost: "₹1999",
    link: "business",
    color: "platinum",
    inclusions: [
      "Access to Networking Arena",
      "Visit Startup Expo",
      "All Panel Discussions",
      "Intern Fair",
      "All Speaker Sessions",
      "Participation in Competitions",
      "Set up Stall in Startup Expo",
      "Participation in Funding Conclave (If shortlisted)",
    ],
    exclusions: [],
  },
  "Silver Startup": {
    type: "Silver Pass",
    student: false,
    cost: "₹5000",
    link: "silver-startup",
    color: "silver",
    inclusions: [
      "Stall at the Startup Expo",
      "Social Media Feature",
      "Logo on the Startup Expo banner",
    ],
    exclusions: [
      "Gala Networking Dinner",
      "Newspaper Branding",
      "Pitch at the Funding Conclave",
      "Main Flex Branding + LED Screen Display",
    ],
  },
  "Gold Startup": {
    type: "Gold Startup",
    student: false,
    cost: "₹4999",
    link: "gold-startup",
    color: "gold",
    inclusions: [
      "Access to Speaker Sessions",
      "Startup Expo",
      "Intern Fair (If shortlisted)",
      "Funding Conclave",
      "Premium Networking Lounge",
    ],
    exclusions: [
      "Accommodation",
    ],
  },
  "Platinum Startup": {
    type: "Platinum Startup",
    student: false,
    cost: "₹7999",
    link: "platinum-startup",
    color: "platinum",
    inclusions: [
      "All Access Pass",
      "Accommodation for 3 Days",
      "Premium Networking Lounge",
      "Startup Expo Stall",
      "Intern Fair & Funding Conclave",
    ],
    exclusions: [],
  }
};

const Profile = () => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ college: "", phone: "", sid: "", pass: "none" });
  const [passInfo, setPassInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      if (user) {
        try {
          const eventsRef = collection(db, "eventRegistrations");
          const q = query(eventsRef, where("userId", "==", user.uid));
          const querySnapshot = await getDocs(q);

          const userEvents = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log(userEvents);
          setEvents(userEvents);
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      }
    };

    fetchEvents();
  }, [user]);

  const fetchPassInfo = async () => {
    try {
      const pass = await getUserPassInfo();
      console.log(pass);
      setPassInfo(pass);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        fetchPassInfo();
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

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/register");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Layout visible={user ? true : false} footer={false}>
      <div className="min-h-screen pt-24 bg-black text-white flex justify-center p-6">
        <div className="max-w-5xl h-fit w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {/* User Info */}
            <div className="bg-[#282828] w-full p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-[#C2175B] text-3xl font-semibold">
                  {user?.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{user?.displayName || "User Name"}</h2>
                  <p className="text-gray-400 text-sm">{user?.email}</p>
                  <p className="mt-1 rounded-lg text-xs bg-gray-700 w-fit px-3 py-1">Participant</p>
                </div>
              </div>

              {isEditing ? (
                <div className="mt-4">
                  <input type="text" name="college" value={formData.college} onChange={handleChange} className="w-full bg-[#3A3A3A] p-2 rounded mt-2" placeholder="College" />
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#3A3A3A] p-2 rounded mt-2" placeholder="Phone" />
                  <input type="text" name="sid" value={formData.sid} onChange={handleChange} className="w-full bg-[#3A3A3A] p-2 rounded mt-2" placeholder="Roll number" />
                  <button onClick={handleSave} className="mt-4 w-full cursor-pointer active:scale-95 bg-green-600 py-2 rounded hover:bg-green-700">Save</button>
                </div>
              ) : (
                <div className="mt-4">
                  <p className="text-gray-400 flex items-center"><IoSchoolSharp className="mr-2" /> {formData.college || "Your college"}</p>
                  <p className="text-gray-400 flex items-center"><FaPhoneAlt className="mr-2" /> {formData.phone || "Your phone number"}</p>
                  <p className="text-gray-400 flex items-center"><FaRegIdCard className="mr-2" /> {formData.sid || "Your roll number"}</p>
                  <button onClick={handleEditToggle} className="mt-4 w-full cursor-pointer text-green-400 bg-[#37493c] py-2 rounded-lg active:scale-95">Edit</button>
                </div>
              )}

              <button onClick={handleLogout} className="mt-4 w-full cursor-pointer text-red-400 bg-[#3A3A3A] py-2 rounded-lg active:scale-95">Logout</button>
            </div>

            {/* Pass Information */}
            <div className="mt-6 bg-[#282828] p-6 rounded-lg shadow-lg border-2 border-gray-600 flex flex-col">
              {passInfo?.status === "pending" ? (
                <p className="text-yellow-400 font-semibold">
                  Your pass ({passInfo?.passName}) is under approval.
                </p>
              ) : passInfo?.status === "verified" ? (
                <>
                  <h3 className="text-lg font-bold capitalize text-green-400">
                    Congrats! You bought the {passInfo.passName} Pass.
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Do not forget to enjoy the perks included in your pass:
                  </p>
                  <ul className="mt-3 text-gray-300 text-sm list-disc list-inside">
                    {passData[passInfo.passName]?.inclusions?.map((perk, index) => (
                      <li key={index}>{perk}</li>
                    ))}
                  </ul>

                  {passData[passInfo.passName]?.exclusions?.length !== 0 && 
                  <p className="mt-2 text-sm text-gray-400">
                    Please note, the following perks are NOT included in {passInfo.passName} Pass:
                  </p>}

                  <ul className="mt-3 text-gray-300 text-sm list-disc list-inside">
                    {passData[passInfo.passName]?.exclusions?.map((perk, index) => (
                      <li key={index}>{perk}</li>
                    ))}
                  </ul>
                  <Link to={"/contact"} className="mt-2 text-sm text-blue-400 hover:underline">
                    Click here to contact in case of any discrepancies!
                  </Link>
                </>
              ) : (
                <>
                  <p>No Pass Available!</p>
                  <Link to="/passes" className="text-blue-400 hover:underline">
                    Click here to buy a pass
                  </Link>
                </>
              )}
            </div>
          </div>

          <div>
            {/* Events Registered */}
            <div className="bg-[#282828] border-gray-600 border-2 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">My Events</h3>
              {events.length > 0 ? (
                events.map((event) => (
                  <div key={event.id} className="bg-[#3A3A3A] p-4 rounded mb-2">
                    <h4 className="text-lg font-semibold">{event.eventName}</h4>
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
