import { BrowserRouter } from "react-router-dom";
import { Routercom } from "./Common/Router/Routercom";
import CommonDashboard from "./Common/Dashboard/Dashboard";
import "./Style.css";
import Navbar from "./Common/Navbar/Navbar";
import CommonPara from "./Common/Para/Para";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <div>
            <CommonDashboard />
            <div className="Dash-Container">
              <CommonPara className="Title" label="ERP System With React" />
            </div>
          </div>
          <div  className="router-container">
            <Routercom />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
