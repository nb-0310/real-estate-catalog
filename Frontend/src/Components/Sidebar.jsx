import React from "react";
import "../Styles/sidebar.css";
import logo from "../Assets/logo.png";
import property from "../Assets/Sidebar/property.svg";
import assistance from "../Assets/Sidebar/assistance.svg";
import recievedInterest from "../Assets/Sidebar/recievedInterest.svg";
import sentInterest from "../Assets/Sidebar/sentInterest.svg";
import propertyViews from "../Assets/Sidebar/propertyViews.svg";
import tariffPlan from "../Assets/Sidebar/tariffPlan.svg";

const Sidebar = () => {
  const items = [
    {
      icon: property,
      name: "Property",
    },
    {
      icon: assistance,
      name: "Assistance",
    },
    {
      icon: recievedInterest,
      name: "Recieved Interest",
    },
    {
      icon: sentInterest,
      name: "Sent Interest",
    },
    {
      icon: propertyViews,
      name: "Property Views",
    },
    {
      icon: tariffPlan,
      name: "Tariff Plan",
    },
  ];

  return (
    <div className="sidebar">
      <div>
        {window.innerWidth > 768 ? <img src={logo} alt="logo" /> : <div>ED</div>}
      </div>

      <ul>
        {items.map((item) => (
          <li>
            <div>
              <img src={item.icon} alt="icon" />
            </div>

            <p
              style={{
                color: item.name === "Property" ? "#2289FF" : "inherit",
              }}
            >
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
