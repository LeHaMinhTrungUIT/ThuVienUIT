import React from "react";
import Info from "./Contacts-info";
import Mail from "./Contacts-mail";

function ContactContainer() {
  return (
    <div className="content row">
      <div className="column">
        <Info />
      </div>
      <div className="column">
        <Mail />
      </div>
    </div>
  );
}

export default ContactContainer;
