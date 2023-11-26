import React, { useState, useEffect } from "react";
import "../../styles/Contact.css";
import { ContactCard } from "../component/ContactCard.jsx";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://playground.4geeks.com/apis/fake/contact/agenda/luis-roldan")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []); 

  const handleDeleteContact = (contactId) => {
    fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
        } else {
          console.error("Error deleting contact:", response.status);
        }
      })
      .catch((error) => console.error("Error deleting contact:", error));
  };

  const handleDeleteAllContacts = () => {
    
    fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/luis-roldan`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
         
          setContacts([]);
        } else {
          console.error("Error deleting all contacts:", response.status);
        }
      })
      .catch((error) => console.error("Error deleting all contacts:", error));
  };

  return (
    <div className=" mt-5">
      <div className="ContactsContainer d-flex flex-row-reverse mx-2 mt-2">
        <Link to="/form">
          <button className="btn btn-primary AddContactButton">
            Add new contact
          </button>
        </Link>
      </div>
      <div className="ContactsList">
      {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} onDelete={handleDeleteContact} />
        ))}
      </div>
      <button className="btn btn-danger deleteButton" onClick={handleDeleteAllContacts}>
          Delete All Contacts
        </button>
    </div>
  );
};
