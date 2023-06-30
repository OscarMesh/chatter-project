"use client";
import React, { useEffect } from "react";
import DashboardHeader from "./header";
import DesktopSidebar from "./sidebar/DesktopSidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// import Header from "./header"

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status !== "authenticated") {
      router.push("/signin");
    }
  }, [session?.status, router]);

  return (
    <main className="flex h-screen max-h-screen">
      <div className="w-[250px] fixed h-full top-0 left-0 bottom-0 bg-white border-r border-gray-300">
        <DesktopSidebar />
      </div>
      <div className="w-[calc(100%-250px)]  ml-auto h-full relative">
        <div className="fixed w-[calc(100%-250px)] border-b z-40 bg-white ">
          <DashboardHeader />
        </div>
        <div className="absolute top-[70px] w-full p-6 z-0">
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
