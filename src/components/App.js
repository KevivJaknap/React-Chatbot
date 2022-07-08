// Dependencies
import React from "react";
import Box from "./box";

// Styles
import "../tailwind.output.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-500">
      <h2 className="text-center text-4xl font-bold text-blue-900">
        Learning React
      </h2>
      <Box />
    </div>
  );
};

export default App;
