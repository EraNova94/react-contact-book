import React from "react";

const AddContact = ({
  listArr,
  contactDelete,
  setSingleEditContact,
  setShow,
}) => {
  function changedContact(objContact) {
    setShow(true);
    setSingleEditContact(objContact);
    // console.log(objContact);
  }
  return (
    <>
      <div className="container">
        <div className="card__frame">
          {listArr.map(item => (
            <div className="card__list" key={item.id}>
              <div className="card__size">
                <h2>{item.name}</h2>
                <h3>{item.email}</h3>
                <h3>{item.number}</h3>
                <img src={item.img} alt="img" width={180} height={180} />
                <br />
                <span>
                  <button onClick={() => contactDelete(item.id)}>Delete</button>
                  <button onClick={() => changedContact(item)}>Edit</button>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddContact;
