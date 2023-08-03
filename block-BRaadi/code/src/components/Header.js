import React from "react";
import ErrorBoundary from "../ErrorBoundary";

function Header() {
  return (
    <ErrorBoundary>
    <header>
      <div className="header-content">
        <h1>ERROR BOUNDARY</h1>
        <p>Make sure to test error boundary in production build!</p>
      </div>
    </header>
    </ErrorBoundary>
  );
}

export default Header;
