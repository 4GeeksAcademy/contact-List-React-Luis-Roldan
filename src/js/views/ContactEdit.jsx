import React, { useState, useEffect, useContext } from "react";
import "../../styles/AddContact.css";
import { Context } from "../store/appContext";
import { useParams, Link } from 'react-router-dom';

const ContactEdit = () => {
  const { store, actions } = useContext(Context);
  const { contactId } = useParams();

  const { newContact } = store;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    actions.setStore({ newContact: { ...newContact, [name]: value } });
  };

  const handleSave = () => {
    // Lógica para guardar el contacto
    actions.saveContact(newContact, contactId);
  };

  useEffect(() => {
    // Lógica para cargar los detalles del contacto
    actions.fetchContactDetails(contactId);
  }, [contactId, actions]);

  return (
    <div className="mt-5">
      <h1 className="text-center">{contactId ? 'Update Contact' : 'Add a New Contact'}</h1>
      <div className="FormContainer">
        {/* Resto del código permanece igual */}
        <div className="InputAddress">
          <div className="container">
            <span>
              <strong>Address</strong>{" "}
            </span>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="addressInput"
                placeholder="av. hackers 999"
                name="address"
                value={newContact.address}
                onChange={handleInputChange}
              />
              <label htmlFor="addressInput">Enter address</label>
            </div>
          </div>
        </div>
        <button className="btn btn-primary SaveButton" onClick={handleSave}>
          Save
        </button>
        <Link to="/" className="link-opacity-100">
          or get back to contacts
        </Link>
      </div>
    </div>
  );
};

export default ContactEdit;
