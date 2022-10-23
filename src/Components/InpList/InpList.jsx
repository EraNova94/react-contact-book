import React, { useState } from "react";
import "./InpList.css";
const InpList = ({ addContacts }) => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactImg, setContactImg] = useState("");

  function listFunc() {
    if (
      !contactName.trim() ||
      !contactEmail.trim() ||
      !contactNumber.trim() ||
      !contactImg.trim()
    ) {
      alert("Fill in the form");
      return;
    }
    let newList = {
      name: contactName,
      email: contactEmail,
      number: contactNumber,
      img: contactImg,
      id: Date.now(),
    };
    addContacts(newList);
    setContactName("");
    setContactEmail("");
    setContactNumber("");
    setContactImg("");
  }
  return (
    <div className="inp__main">
      <div className="container">
        <div className="inp__list">
          <input
            className="input"
            type="text"
            placeholder="Name"
            value={contactName}
            onChange={e => setContactName(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Email"
            value={contactEmail}
            onChange={e => setContactEmail(e.target.value)}
          />
          <input
            className="input"
            type="number"
            placeholder="Phone number"
            value={contactNumber}
            onChange={e => setContactNumber(e.target.value)}
          />
          <input
            className="input"
            type="url"
            placeholder="URL image"
            value={contactImg}
            onChange={e => setContactImg(e.target.value)}
          />
          <button className="add-btn" onClick={listFunc}>
            Add Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default InpList;
