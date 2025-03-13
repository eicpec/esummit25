import React, { useState } from "react";
import { signInWithGoogle, registerWithEmail, loginWithEmail, logout } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [sid, setSid] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be 10 digits.");
      setLoading(false);
      return;
    }

    if (name.length < 3) {
      setError("Name must be at least 3 characters long.");
      setLoading(false);
      return;
    }

    console.log("Registering:", { email, name, password, collegeName, sid, phone });

    try {
      let loggedInUser;
      if (isLogin) {
        console.log("Logging in:", { email, password });
        loggedInUser = await loginWithEmail(email, password);
      } else {
        loggedInUser = await registerWithEmail(email, name, password, collegeName, sid, phone);
      }
      setUser(loggedInUser);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  const handleGoogleLogin = async () => {
    try {
      const loggedInUser = await signInWithGoogle();
      setUser(loggedInUser);
      navigate('/profile');
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <Layout header={true} footer={false} children={
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full mx-auto rounded-2xl p-8 shadow-lg opacity-90 bg-black md:max-w-lg lg:max-w-xl">
          <h2 className="font-bold text-center text-xl text-neutral-200">
            {isLogin ? "Login" : "Register"}
          </h2>

          {error &&
            <p className="text-red-500 bg-red-100 px-3 py-2 mt-3 rounded-lg text-center text-sm">{error}</p>
          }

          <form className="my-8" onSubmit={handleAuth}>
            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="name" className="text-sm font-medium text-white">Name</label>
                <input
                  id="name"
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jane Doe"
                  className="w-full mt-1 border-none bg-gray-50 dark:bg-gray-800 text-black dark:text-white shadow-md rounded-md px-3 py-2 text-sm"
                />
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="email" className="text-sm font-medium text-black dark:text-white">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. janedoe@gmail.com"
                className="w-full border-none bg-gray-50 dark:bg-gray-800 text-black dark:text-white shadow-md rounded-md px-3 py-2 mt-1 text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="text-sm font-medium text-black dark:text-white">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full mt-1 border-none bg-gray-50 dark:bg-gray-800 text-black dark:text-white shadow-md rounded-md px-3 py-2 text-sm"
              />
            </div>

            {!isLogin && (
              <>
                <div className="mb-4">
                  <label htmlFor="collegeName" className="text-sm font-medium text-black dark:text-white">College Name</label>
                  <input
                    id="collegeName"
                    type="text"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder="e.g. Punjab Engineering College"
                    className="w-full mt-1 border-none bg-gray-50 dark:bg-gray-800 text-black dark:text-white shadow-md rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="sid" className="text-sm font-medium text-black dark:text-white">SID</label>
                  <input
                    id="sid"
                    type="text"
                    value={sid}
                    onChange={(e) => setSid(e.target.value)}
                    placeholder="e.g. 23104071"
                    className="w-full mt-1 border-none bg-gray-50 dark:bg-gray-800 text-black dark:text-white shadow-md rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="phone" className="text-sm font-medium text-black dark:text-white">Phone</label>
                  <input
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9999999999"
                    className="w-full mt-1 border-none bg-gray-50 dark:bg-gray-800 text-black dark:text-white shadow-md rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow-md disabled:opacity-50"
            >
              {loading ? "Processing..." : isLogin ? "Login" : "Register"}
            </button>
          </form>

          <div className="flex flex-col gap-4">
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md shadow-md"
            >
              <img className="h-4 w-4" src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">Sign in with Google</span>
            </button>
          </div>

          {user && (
            <div className="text-center mt-4">
              <p className="text-neutral-700 dark:text-neutral-300">Logged in as: {user.email}</p>
              <button onClick={handleLogout} className="text-red-500 hover:underline">Logout</button>
            </div>
          )}

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-neutral-600 dark:text-neutral-400 text-sm text-center w-full mt-4 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            {isLogin ? "Don't have an account? Register here!" : "Already have an account? Login here!"}
          </button>
        </div>
      </div>
    } />
  );
};

export default Register;