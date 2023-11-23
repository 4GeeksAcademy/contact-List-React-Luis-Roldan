import React from "react";
import "../../styles/Contact.css";
import { ContactCard } from "../component/ContactCard.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

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
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
};
