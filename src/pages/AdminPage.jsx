import React, { useEffect, useState } from 'react';
import { getDocs, query, collection, where, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../utils/firebaseConfig';
import { FaTrash } from 'react-icons/fa';
import Layout from '../layouts/Layout';

const AdminPage = () => {
    const [passes, setPasses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchPasses = async () => {
        try {
            const user = auth.currentUser;
            if (!user) {
                throw new Error("No user is logged in.");
            }

            const passQuery = query(
                collection(db, "passRegistrations")
            );

            const passSnapshot = await getDocs(passQuery);

            if (!passSnapshot.empty) {
                const passData = passSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPasses(passData);
            } else {
                setPasses([]);
            }
        } catch (error) {
            console.error("Error fetching pass info:", error);
        }
    };

    const handleAction = async (passId, status) => {
        try {
            const passRef = doc(db, "passRegistrations", passId);
            await updateDoc(passRef, { status });
            fetchPasses();
        } catch (error) {
            console.error('Error updating pass:', error);
        }
    };

    const handleDelete = async (passId) => {
        const confirmDelete = window.confirm("This action cannot be reversed. Do you want to proceed?");
        if (confirmDelete) {
            const password = prompt("Enter admin password to proceed:");
            if (password === import.meta.env.VITE_DELETE_PASSWORD) {
                try {
                    const passRef = doc(db, "passRegistrations", passId);
                    await deleteDoc(passRef);
                    fetchPasses();
                } catch (error) {
                    console.error('Error deleting pass:', error);
                }
            } else {
                alert("Incorrect password. Deletion cancelled.");
            }
        }
    };

    useEffect(() => {
        fetchPasses();
    }, []);

    const filterPasses = (status) => {
        return passes.filter(pass =>
            pass.status === status &&
            (pass.email.toLowerCase().includes(searchTerm.toLowerCase()) || pass.id.includes(searchTerm))
        );
    };

    const renderTable = (status) => (
        <table className="w-full border-collapse text-sm mb-8">
            <thead>
                <tr className="bg-[#222]">
                    <th className="py-3 px-6 text-left">Pass ID</th>
                    <th className="py-3 px-6 text-left">User</th>
                    <th className="py-3 px-6 text-left">Pass Type</th>
                    <th className="py-3 px-6 text-left">Txn ID</th>
                    <th className="py-3 px-6 text-left">Screenshot</th>
                    <th className="py-3 px-6 text-left">Status</th>
                    {status !== "verified" && <th className="py-3 px-6 text-center">Actions</th>}
                </tr>
            </thead>
            <tbody>
                {filterPasses(status).map((pass) => (
                    <tr key={pass.id} className="border-b border-gray-700">
                        <td className="py-3 px-6">{pass.id}</td>
                        <td className="py-3 px-6">{pass.email}</td>
                        <td className="py-3 px-6">{pass.passName}</td>
                        <td className="py-3 px-6">{pass.txnId}</td>
                        <td className="py-3 px-6">
                            <a href={pass.screenshot} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View Screenshot</a>
                        </td>
                        <td className="py-3 px-6">
                            <span className={`px-2 py-1 rounded-lg ${pass.status === 'verified' ? 'bg-green-500' : pass.status === 'rejected' ? 'bg-red-500' : 'bg-yellow-500'}`}>
                                {pass.status}
                            </span>
                        </td>
                        {status !== "verified" &&
                            <td className="py-3 px-6 text-center">
                                {<button
                                    onClick={() => handleAction(pass.id, 'verified')}
                                    className="bg-green-500 cursor-pointer active:scale-95 text-white px-4 py-1 rounded-lg mr-4 hover:bg-green-600"
                                >
                                    Accept
                                </button>}
                                {status !== "rejected" && <button
                                    onClick={() => handleAction(pass.id, 'rejected')}
                                    className="bg-red-500 cursor-pointer active:scale-95 text-white px-4 py-1 rounded-lg hover:bg-red-600"
                                >
                                    Reject
                                </button>}
                                {status !== "pending" && <button
                                    onClick={() => handleDelete(pass.id)}
                                    className="text-white ml-4"
                                >
                                    <FaTrash />
                                </button>}
                            </td>}
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <Layout children={
            <div className="min-h-screen pt-24 bg-[#111] text-white p-8">
                <h1 className="text-3xl font-semibold mb-6">🎟️ Admin Panel - Passes Management</h1>
                <input
                    type="text"
                    placeholder="Search by email or pass ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full mb-6 p-2 bg-[#232323] border border-white text-white rounded-lg"
                />
                <h2 className="text-2xl mb-4">Pending Passes</h2>
                {renderTable("pending")}
                <h2 className="text-2xl mb-4">Verified Passes</h2>
                {renderTable("verified")}
                <h2 className="text-2xl mb-4">Rejected Passes</h2>
                {renderTable("rejected")}
            </div>
        } />
    );
};

export default AdminPage;
