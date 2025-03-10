import React, { useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { IconBrandGithub, IconBrandGoogle} from "@tabler/icons-react";

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full mx-auto rounded-2xl p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to {isLogin ? "Login" : "Register"}
        </h2>

        <form className="my-8">
          {!isLogin && (
            <div className="flex flex-col md:flex-row gap-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstName">First name</Label>
                <AceternityInput id="firstName" placeholder="Tyler" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastName">Last name</Label>
                <AceternityInput id="lastName" placeholder="Durden" type="text" />
              </LabelInputContainer>
            </div>
          )}

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <AceternityInput
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-8">
            <Label htmlFor="password">Password</Label>
            <AceternityInput
              id="password"
              placeholder="••••••••"
              type="password"
            />
          </LabelInputContainer>

          <AceternityButton>
            {isLogin ? "Login →" : "Register →"}
          </AceternityButton>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col gap-4">
            <AceternityButton>
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Google
              </span>
            </AceternityButton>
          </div>
        </form>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-neutral-600 dark:text-neutral-400 text-sm text-center w-full mt-4 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
        >
          {isLogin
            ? "Don't have an account? Register here →"
            : "Already have an account? Login here →"}
        </button>
      </div>
    </div>
  );
};

// Aceternity Input Component
const AceternityInput = ({ id, placeholder, type }) => {
  const maxRadius = 100; // max circle radius
  const mouseX = useMotionValue(0); // x position
  const mouseY = useMotionValue(0); // y position
  const radiusMV = useMotionValue(0); // radius value
  const springRadius = useSpring(radiusMV, { stiffness: 300, damping: 20 }); // animate radius

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left); // update x
    mouseY.set(clientY - top); // update y
  };

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(${springRadius}px circle at ${mouseX}px ${mouseY}px, var(--blue-500), transparent 80%)
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => radiusMV.set(maxRadius)} // set max radius
      onMouseLeave={() => radiusMV.set(0)} // reset radius
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
      />
    </motion.div>
  );
};

// Aceternity Button Component
const AceternityButton = ({ children }) => {
  return (
    <button
      className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
      type="submit"
    >
      {children}
      <BottomGradient />
    </button>
  );
};

// Bottom Gradient Component
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

// Label Input Container
const LabelInputContainer = ({ children, className }) => {
  return <div className={`flex flex-col space-y-2 w-full ${className}`}>{children}</div>;
};

// Label Component
const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  );
};

export default Register;
