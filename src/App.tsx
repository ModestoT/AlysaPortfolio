import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div style={{ height: "91%", overflow: "auto" }}>
        <div className="main-content">
          <div className="card">
            <img src="./headshot try 2.png" />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Alysa Punjwani</span>
                <span>Learning & Development Professional</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Phone:</span>
                <span>832-692-7400</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Email:</span>
                <span>alysa.punjwani17@gmail.com</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Address:</span>
                <span>Chicago, IL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
