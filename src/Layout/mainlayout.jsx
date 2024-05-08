import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard/Dashboard";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}
