import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db, storage, getUserPassInfo } from "../utils/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { passData } from "../data/passData";
import Layout from "../layouts/Layout";
import { toast } from "react-toastify";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { bankDetails } from "../data/bankDetails"

const PassForm = () => {
    const { passName } = useParams();
    const passDetails = passData.find(pass => pass.link === passName);

    const [formData, setFormData] = useState({ txnId: "", screenshot: "" });
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [passInfo, setPassInfo] = useState(null);
    const [popup, setPopUp] = useState(false);
    const [loadingtext, setLoadingText] = useState("Loading...");

    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                fetchPassInfo();
            }
        });
        return () => unsubscribe();
    }, []);

    const fetchPassInfo = async () => {
        try {
            const passData = await getUserPassInfo();
            setPassInfo(passData);
        } catch (error) {
            console.error("Error fetching pass info:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, txnId: e.target.value });
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file || !user) return;

        setLoading(true);
        setLoadingText("Uploading Proof...")
        const storageRef = ref(storage, `unstopScreenshots/${user.uid}_${file.name}`);

        try {
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            setFormData(prev => ({ ...prev, screenshot: downloadURL }));
            toast.success("Screenshot uploaded successfully!");
        } catch (error) {
            console.error("Error uploading screenshot:", error);
            toast.error("Upload failed. Please try again.");
        }
        setLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setLoadingText("Submitting...");

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

        if (!formData.screenshot) {
            toast.error("Please upload a payment screenshot!");
            setLoading(false);
            return;
        }

        if (passInfo) {
            toast.error(`You have already bought a ${passInfo?.passName} Pass.`);
            setLoading(false);
            return;
        }

        try {
            await addDoc(collection(db, "passRegistrations"), {
                name: user.displayName,
                email: user.email,
                txnId: formData.txnId,
                passLink: passDetails.link,
                screenshot: formData.screenshot,
                passName: passDetails.type,
                status: "pending",
                createdAt: new Date(),
                userId: user.uid,
            });

            toast.success("Form submitted! Await admin approval.");
            setFormData({ txnId: "", screenshot: "" });
            navigate("/profile");
        } catch (error) {
            console.error("Error submitting form: ", error);
            toast.error("Submission failed! Try again.");
            navigate("/passes");
        }
        setLoading(false);
    };

    return (
        <Layout>
            <div className="flex flex-col md:flex-row py-24 min-h-screen bg-gray-900 text-white p-8 gap-8">
                <div className="md:w-1/2 bg-gray-800 p-6 rounded-lg">
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

                <div className="md:w-1/2 bg-gray-200 text-black p-6 rounded-lg">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" value={user?.displayName || ""} className="w-full p-2 border rounded-lg bg-gray-100" readOnly />
                        <input type="email" value={user?.email || ""} className="w-full p-2 border rounded-lg bg-gray-100" readOnly />
                        <input type="text" placeholder="Enter Transaction ID" value={formData.txnId} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                        <input type="file" accept="image/*" onChange={handleFileUpload} className="w-full p-2 border rounded-lg" required />
                        <div className="flex flex-col">
                            <div onClick={() => setPopUp(!popup)} className="flex items-center gap-2 justify-center">
                                {!popup ? "Show" : "Hide"} Bank Details {!popup ? <IoMdArrowDropdown size={20} /> : <IoMdArrowDropup size={20} />}
                            </div>
                            {popup ?
                                <div className="bg-white px-2 py-1 rounded-xl mt-3">
                                    <p><b>Account Number :</b> {bankDetails.accountNumber}</p>
                                    <p><b>GSTIN :</b> {bankDetails.gst}</p>
                                    <p><b>IFSC Code :</b> {bankDetails.ifscCode}</p>
                                    <p><b>Code of Bank :</b> {bankDetails.codeOfBank}</p>
                                    <p><b>Branch Code :</b> {bankDetails.branchCode}</p>
                                    <p><b>Acount Holder Name :</b> {bankDetails.accountName}</p>
                                </div>
                                :
                                ""
                            }
                        </div>
                        <button type="submit" className="w-full cursor-pointer active:scale-95 bg-green-600 text-white p-2 rounded-lg" disabled={loading}>
                            {loading ? loadingtext : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default PassForm;
