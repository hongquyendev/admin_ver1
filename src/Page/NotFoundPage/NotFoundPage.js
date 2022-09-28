import React from "react";
import "./notFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="body">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <a href="#">Report</a>
          <a href="#">Homepage</a>
        </div>
      </div>
    </div>
  );
}
