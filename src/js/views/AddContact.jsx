import React, { useState, useEffect, useContext } from "react";
import "../../styles/AddContact.css";
import { Context } from "../store/appContext";
import { useParams, Link } from 'react-router-dom';

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    full_name: '',
    email: '',
    agenda_slug: 'luis-roldan',
    phone: '',
    address: '',
  });

  const { contact_id } = useParams();

  useEffect(() => {
    if (contact_id) {
      // If updating, fetch the existing contact details based on contact_id
      fetch(`https://playground.4geeks.com/apis/fake/contact/${contact_id}`)
        .then(response => response.json())
        .then(data => {
          setNewContact(data);
        })
        .catch(error => {
          console.error('Error fetching contact details:', error);
        });
    }
  }, [contact_id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const method = contact_id ? 'PUT' : 'POST';
    const url = contact_id
      ? `https://playground.4geeks.com/apis/fake/contact/${contact_id}`
      : 'https://playground.4geeks.com/apis/fake/contact/';

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    })
      .then(response => response.json())
      .then(data => {
        // Update the contact list with the new/updated contact
        if (contact_id) {
          const updatedContacts = contacts.map(contact =>
            contact.id === contact_id ? data : contact
          );
          setContacts(updatedContacts);
        } else {
          // If adding a new contact, append it to the existing list
          setContacts([...contacts, data]);
        }

        // Reset the form
        setNewContact({
          full_name: '',
          email: '',
          agenda_slug: 'luis-roldan',
          phone: '',
          address: '',
        });
      })
      .catch(error => {
        console.error('Error saving contact:', error);
      });
  };

  return (
    <div className="mt-5">
      <h1 className="text-center">{contact_id ? 'Update Contact' : 'Add a New Contact'}</h1>
      <div className="FormContainer">
        <div className="InputName">
          <div className="container">
            <span>
              <strong>Full Name</strong>{" "}
            </span>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="fullNameInput"
                placeholder="Dave Bradley"
                name="full_name"
                value={newContact.full_name}
                onChange={handleInputChange}
              />
              <label htmlFor="fullNameInput">Full Name</label>
            </div>
          </div>
        </div>
        <div className="InputEmail">
          <div className="container">
            <span>
              <strong>Enter Email</strong>{" "}
            </span>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
                name="email"
                value={newContact.email}
                onChange={handleInputChange}
              />
              <label htmlFor="emailInput">Enter email</label>
            </div>
          </div>
        </div>
        <div className="InputPhone">
          <div className="container">
            <span>
              <strong>Phone</strong>{" "}
            </span>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="phoneInput"
                placeholder="999999999"
                name="phone"
                value={newContact.phone}
                onChange={handleInputChange}
              />
              <label htmlFor="emailInput">Enter phone</label>
            </div>
          </div>
        </div>
        <div className="InputAddress">
          <div className="container">
            <span>
              <strong>Address</strong>{" "}
            </span>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="adressInput"
                placeholder="av. hackers 999"
                name="address"
                value={newContact.address}
                onChange={handleInputChange}
              />
              <label htmlFor="addressInput">Enter address</label>
            </div>
          </div>
        </div>
        <button className="btn btn-primary SaveButton" onClick={handleSave}>Save</button>
        <Link to="/" className="link-opacity-100">
          or get back to contacts
        </Link>
      </div>
    </div>
  );
};
