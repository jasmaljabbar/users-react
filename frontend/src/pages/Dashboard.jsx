import React from "react";
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth)

  // Assuming userInfo is an object with a 'first_name' property
  // const userInfo = { first_name: "John" }; // Example userInfo

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-gray-200 rounded-md p-8 max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome, {userInfo.first_name}
        </h1>
        {/* Additional content can be added here */}
      </div>
    </div>
  );
};

export default Dashboard;
