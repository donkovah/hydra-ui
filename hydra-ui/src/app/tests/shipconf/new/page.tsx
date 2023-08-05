"use client";

import React from "react";
import TestForm, { TestType } from "@/partials/TestForm";

const HomePage: React.FC = () => {
  return (
    <TestForm type={TestType.SHIPCONF} />
  );
};
export default HomePage;
