import React from "react";

// components
import ErrorBoundary from "./components/ErrorBoundary";
import Buggy from "./components/Buggy";

const App = () => {
  return (
    <div className="p-4">
      <ErrorBoundary>
        <Buggy shouldCrash={true} />
      </ErrorBoundary>
    </div>
  );
};

export default App;
