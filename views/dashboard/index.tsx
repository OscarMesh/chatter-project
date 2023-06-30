"use client";
import React from "react";
import EmptyState from "./components/EmptyState";
import { useSession } from "next-auth/react";

const DashboardWrapper = () => {
  const session = useSession();
  console.log(session);
  const user = session?.data?.user;
  return (
    <div className=" lg:block overflow-auto items-center ">
      <EmptyState
        title={`Welcome ${user?.name}!`}
        text="Proceed to feed to see your posts or create a new post to get started."
      />
    </div>
  );
};

export default DashboardWrapper;
