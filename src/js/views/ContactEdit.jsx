import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

export const ContactEdit = () => {
  const { store, actions } = useContext(Context);
  const { contactId } = useParams();
  if (!contactId) {
    return <div>Error: Contact ID not provided</div>;
  }

  const [localContact, setLocalContact] = useState(store.newContact);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLocalContact({ ...localContact, [name]: value });
  };

  const handleSave = () => {
    actions.saveContact(localContact, contactId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await actions.fetchContactDetails(contactId);
        setLocalContact(response);
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };

    fetchData();
  }, [contactId]);

  return (
    <div className="mt-5">
      <h1 className="text-center">
        {contactId ? "Update Contact" : "Add a New Contact"}
      </h1>
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
                value={localContact?.full_name || ""}
                onChange={handleInputChange}
              />
              <label htmlFor="fullNameInput">Edit Full Name</label>
            </div>
          </div>
        </div>

        <div className="InputEmail">
          <div className="container">
            <span>
              <strong>Email</strong>{" "}
            </span>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="EmailInput"
                placeholder="name@example.com"
                name="email"
                value={localContact?.email || ""}
                onChange={handleInputChange}
              />
              <label htmlFor="emailInput">Edit Email</label>
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
                id="PhoneInput"
                placeholder="999999999"
                name="phone"
                value={localContact?.phone || ""}
                onChange={handleInputChange}
              />
              <label htmlFor="phoneInput">Edit Phone</label>
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
                id="addressInput"
                placeholder="av. hackers 999"
                name="address"
                value={localContact?.address || ""}
                onChange={handleInputChange}
              />
              <label htmlFor="addressInput">Edit address</label>
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
