import React, { useState, useEffect } from "react";
import InpList from "./Components/InpList/InpList";
import Navbar from "./Components/Navbar/Navbar";
import AddContact from "./Components/AddContact/AddContact";
import EditContacts from "./Components/EditContacts/EditContacts";

const App = () => {
  const [listArr, setListArr] = useState([]);
  const [show, setShow] = useState(false);
  const [singleEditContact, setSingleEditContact] = useState({});

  function addContacts(objContact) {
    let newListArr = [...listArr];
    newListArr.push(objContact);
    setListArr(newListArr);
  }
  function contactDelete(id) {
    let newContactArr = listArr.filter(item => {
      return item.id !== id;
    });
    setListArr(newContactArr);
  }

  function saveEditedContact(editedContactObj) {
    console.log(editedContactObj);
    let newEditedContact = listArr.map(item => {
      console.log(item);
      if (item.id === editedContactObj.id) {
        return editedContactObj;
      } else {
        return item;
      }
    });
    setListArr(newEditedContact);
    console.log(newEditedContact);
  }

  useEffect(() => {
    if (localStorage.getItem("list") === null) {
      localStorage.setItem("list", JSON.stringify([]));
    } else {
      let data = localStorage.getItem("list");
      // console.log(data);
      setListArr(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(listArr));
  }, [listArr]);

  return (
    <div>
      <Navbar />
      <InpList addContacts={addContacts} />
      <AddContact
        listArr={listArr}
        contactDelete={contactDelete}
        setSingleEditContact={setSingleEditContact}
        setShow={setShow}
      />
      <EditContacts
        saveEditedContact={saveEditedContact}
        singleEditContact={singleEditContact}
        setShow={setShow}
        show={show}
      />
    </div>
  );
};

export default App;
