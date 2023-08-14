import "../Styles/sidebar.css";
import assistance from "../Assets/Sidebar/assistance.svg";
import property from "../Assets/Sidebar/property.svg";
import propertyViews from "../Assets/Sidebar/propertyViews.svg";
import sentInterest from "../Assets/Sidebar/sentInterest.svg";
import recievedInterest from "../Assets/Sidebar/recievedInterest.svg";
import tariffPlan from "../Assets/Sidebar/tariffPlan.svg";

export const Sidebar = () => {
  return (
    <div className="main-sidebar">
      <div className="logo-side">
        <h1>Logo</h1>
      </div>
      <div className="logo-icon">
        <div className="side-flex" id="prop-icon">
          <img src={property} alt="property" />
          <p>Property</p>
        </div>
        <div className="side-flex">
          <img src={assistance} alt="property" />
          <p>Assistance</p>
        </div>
        <div className="side-flex">
          <img src={recievedInterest} alt="property" />
          <p>Recieved Interest</p>
        </div>
        <div className="side-flex-img">
          <img src={sentInterest} alt="property" />
          <p>Sent Interest</p>
        </div>
        <div className="side-flex">
          <img src={propertyViews} alt="property" />
          <p>Property Views</p>
        </div>
        <div className="side-flex">
          <img src={tariffPlan} alt="property" />
          <p>Traffic Plan</p>
        </div>
      </div>
    </div>
  );
};
