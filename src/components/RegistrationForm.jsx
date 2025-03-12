import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";

const RegistrationForm = () => {
  const { eventType } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    college: "",
    teamMembers: "",
    teamLeader: "",
    contact: "",
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "registrations"), { ...formData, eventType });
      alert("Registration successful!");
      navigate("/events");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Registration failed!");
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-transparent">
        <form onSubmit={handleSubmit} className="registration-form p-6 bg-white bg-opacity-80 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Register for {eventType}</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full p-2 mb-4 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="block w-full p-2 mb-4 border rounded"
          />
          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={formData.college}
            onChange={handleChange}
            required
            className="block w-full p-2 mb-4 border rounded"
          />
          {eventType !== "Founding Conclave" && eventType !== "Startup Expo" && eventType !== "Expert Session" && (
            <>
              <input
                type="number"
                name="teamMembers"
                placeholder="Total Team Members"
                value={formData.teamMembers}
                onChange={handleChange}
                required
                className="block w-full p-2 mb-4 border rounded"
              />
              <input
                type="text"
                name="teamLeader"
                placeholder="Team Leader"
                value={formData.teamLeader}
                onChange={handleChange}
                required
                className="block w-full p-2 mb-4 border rounded"
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Detail"
                value={formData.contact}
                onChange={handleChange}
                required
                className="block w-full p-2 mb-4 border rounded"
              />
            </>
          )}
          <button type="submit" className="block w-full p-2 bg-blue-500 text-white rounded">Register</button>
        </form>
      </div>
    </Layout>
  );
};

export default RegistrationForm;
