import React from "react";
import ContactContainer from "./contacts-container/Contacts-container";
import Map from "./map/map";
import "./contacts.css";

function Contacts() {
  return (
    <div className="content">
      <Map />
      <ContactContainer />
    </div>
  );
}

export default Contacts;
