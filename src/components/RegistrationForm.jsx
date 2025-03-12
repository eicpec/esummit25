import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
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
      await addDoc(collection(db, "registrations"), formData);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Registration failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="college"
        placeholder="College"
        value={formData.college}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="teamMembers"
        placeholder="Total Team Members"
        value={formData.teamMembers}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="teamLeader"
        placeholder="Team Leader"
        value={formData.teamLeader}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="contact"
        placeholder="Contact Detail"
        value={formData.contact}
        onChange={handleChange}
        required
      />
      {/* Add more input fields as needed */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
