"use client";
import React from "react";
import Header from "./header";
import Footer from "./footer";

interface StaticLayoutProps {
  children: React.ReactNode;
}

const StaticLayout: React.FC<StaticLayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default StaticLayout;
