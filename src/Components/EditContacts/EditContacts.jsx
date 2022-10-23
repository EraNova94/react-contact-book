import React, { useState } from "react";

const EditContacts = ({
  saveEditedContact,
  singleEditContact,
  show,
  setShow,
}) => {
  // console.log(singleEditContact);
  const [changeContactName, setChangeContactName] = useState(
    singleEditContact.name
  );
  // console.log(changeContactName);
  //
  const [changeContactEmail, setChangeContactEmail] = useState(
    singleEditContact.email
  );
  const [changeContactNumber, setChangeContactNumber] = useState(
    singleEditContact.number
  );
  const [changeContactImg, setChangeContactImg] = useState(
    singleEditContact.img
  );
  // console.log(changeContactName);
  function saveContacts() {
    if (
      !changeContactName.trim() ||
      !changeContactEmail.trim() ||
      !changeContactNumber.trim() ||
      !changeContactImg.trim()
    ) {
      alert("Fill in the form");
      return;
    }
    let editObj = {
      name: changeContactName,
      email: changeContactEmail,
      number: changeContactNumber,
      img: changeContactImg,
      id: singleEditContact.id,
    };
    saveEditedContact(editObj);
    setShow(false);
    // console.log(editObj);
  }
  return (
    <>
      {show ? (
        <div className="modal__main">
          <div className="modal__main-2">
            <div className="inp__list">
              <input
                className="input"
                type="text"
                placeholder="Name"
                value={changeContactName}
                onChange={e => setChangeContactName(e.target.value)}
              />
              <input
                className="input"
                type="text"
                placeholder="Email"
                value={changeContactEmail}
                onChange={e => setChangeContactEmail(e.target.value)}
              />
              <input
                className="input"
                type="number"
                placeholder="Phone number"
                value={changeContactNumber}
                onChange={e => setChangeContactNumber(e.target.value)}
              />
              <input
                className="input"
                type="url"
                placeholder="URL image"
                value={changeContactImg}
                onChange={e => setChangeContactImg(e.target.value)}
              />
              <button onClick={() => setShow(false)}>Close</button>
              <button onClick={saveContacts}>Save changes</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditContacts;
