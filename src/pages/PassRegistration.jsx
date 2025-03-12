import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db, getUserPassInfo } from "../utils/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { passData } from "../data/passData";
import Layout from "../layouts/Layout";
import { toast } from "react-toastify";

const PassForm = () => {
    const { passName } = useParams();
    const passDetails = passData.find(pass => pass.link === passName);
    const [formData, setFormData] = useState({ txnId: "" });
    const [loading, setLoading] = useState(false);
    const auth = getAuth();
    const user = auth.currentUser;
    const [passInfo, setPassInfo] = useState("");
    const navigate = useNavigate();

    const fetchPassInfo = async () => {
        try {
            const passin = await getUserPassInfo();
            console.log(passin);
            setPassInfo(passin);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!user) {
            return;
        };
        fetchPassInfo();
        setFormData((prev) => ({
            ...prev,
            name: user.displayName || "",
            email: user.email || ""
        }));
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, txnId: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!user) {
            toast.error("You must be logged in to submit the form!");
            setLoading(false);
            return;
        }

        if (!formData.txnId.trim()) {
            toast.error("Please enter your Transaction ID!");
            setLoading(false);
            return;
        }

        if (passInfo) {
            toast.error("You have already bought a " + passInfo?.passName + " Pass.");
            setLoading(false);
            return;
        }

        try {
            await addDoc(collection(db, "passRegistrations"), {
                name: formData.name,
                email: formData.email,
                txnId: formData.txnId,
                passName: passDetails.type,
                status: "pending",
                createdAt: new Date(),
                userId: user.uid,  // Ensuring the user is authenticated
            });

            toast.success("Form submitted! Await admin approval.");
            setFormData({ txnId: "" });
            navigate("/profile");
        } catch (error) {
            console.error("Error submitting form: ", error);
            toast.error("Submission failed! Try again.");
            navigate("/passes");
        }
        setLoading(false);
    };


    return (
        <Layout children={<div className="flex py-24 min-h-screen bg-gray-900 text-white p-8">
            <div className="w-1/2 bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-200">{passDetails.type}</h2>
                <p className="text-lg font-semibold text-green-400">{passDetails.cost}</p>
                <h3 className="mt-4 text-lg font-semibold text-green-300">✅ Inclusions:</h3>
                <ul className="mt-2 space-y-1">
                    {passDetails.inclusions.map((item, index) => (
                        <li key={index} className="text-sm">✔ {item}</li>
                    ))}
                </ul>
                <h3 className="mt-4 text-lg font-semibold text-red-400">❌ Exclusions:</h3>
                <ul className="mt-2 space-y-1">
                    {passDetails.exclusions.map((item, index) => (
                        <li key={index} className="text-sm">✖ {item}</li>
                    ))}
                </ul>
            </div>

            <div className="w-1/2 bg-gray-200 text-black p-6 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" value={formData?.name || ""} className="w-full p-2 border rounded-lg bg-gray-100" readOnly />
                    <input type="email" value={formData?.email || ""} className="w-full p-2 border rounded-lg bg-gray-100" readOnly />
                    <input type="text" placeholder="Enter Transaction ID" value={formData.txnId} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                    <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-lg" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
                    <p className="mt-4">Note:</p>
                    <p>1. Name and E-mail are filled automatically and CANNOT be editable.</p>
                    <p>2. This action is irreversible. Once submitted, verification request will be sent to the admin and the pass will be alloted within 12-24 hours.</p>
            </div>
        </div>}
        />
    );
};

export default PassForm;
