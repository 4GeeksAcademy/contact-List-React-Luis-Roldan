import React from "react";
import "../../styles/Contact.css";
import { ContactCard } from "../component/ContactCard.jsx";

export const Contact = () => {
  return (
    <div className=" mt-5">
      <div className="ContactsContainer d-flex flex-row-reverse mx-2 mt-2">
        <button className="btn btn-primary AddContactButton">
          Add New Contact
        </button>
      </div>
      <div className="ContactsList">
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
};
