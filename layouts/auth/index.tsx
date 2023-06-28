"use client";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="flex h-screen max-h-screen">
      <div
        className="hidden bg-[url('/assets/images/auth.jpg')] bg-cover bg-center w-[45%] h-full  bg-opacity-50 bg-blend-multiply bg-black md:flex flex-col justify-center items-center space-y-6
    px-6"
      >
        <h3 className="text-4xl font-bold text-white">CHATTER</h3>
        <p className="text-xl text-white">
          Unleash the Power of Words, Connect with Like-minded Readers and
          Writers
        </p>
      </div>
      <div
      className="
      flex-1
      "
      >{children}</div>
    </main>
  );
};

export default AuthLayout;
