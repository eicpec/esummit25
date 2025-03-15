import Layout from '../layouts/Layout';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminLogin = ({ setIsAuthenticated }) => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const correctPassword = import.meta.env.VITE_PASSWORD;
        if (password === correctPassword) {
            const expiryTime = Date.now() + 60 * 60 * 1000; // 1 hour validity
            localStorage.setItem('isAdminAuthenticated', true);
            localStorage.setItem('authExpiryTime', expiryTime);
            setIsAuthenticated(true);
            navigate('/eicadmin');
            toast.success("Admin Login Successful!")
        } else {
            toast.error('Incorrect Password');
        }
    };

    return (
        <Layout children={
            <div className="flex items-center justify-center h-screen bg-[#111]">
                <div className="bg-[#1e1e1e] p-8 rounded-2xl shadow-lg w-96 text-center">
                    <h2 className="text-white text-2xl font-semibold mb-6">🔒 Admin Access</h2>
                    <form>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            className="w-full mb-4 p-3 bg-[#333] text-white rounded-lg outline-none placeholder-gray-400"
                        />
                        <button onClick={handleSubmit} type="submit" className="w-full cursor-pointer active:scale-95 bg-[#007bff] text-white py-2 rounded-lg hover:bg-[#0056b3] transition duration-300">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        } />
    );
};

export default AdminLogin;
