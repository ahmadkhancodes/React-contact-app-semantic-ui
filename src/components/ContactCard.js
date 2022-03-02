import React from "react";
import ahmad from "../images/ahmad.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={ahmad} alt="Ahmad" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon" style={{ color: "red" }}
      onClick={()=> props.clickHandler(id)}></i>
    </div>
  );
};
export default ContactCard;
