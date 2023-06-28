import AuthLayout from "@/layouts/auth";
import AuthWrapper from "@/views/Auth";
import React from "react";

const page = () => {
  return (
    <AuthLayout>
      <AuthWrapper />
    </AuthLayout>
  );
};

export default page;
