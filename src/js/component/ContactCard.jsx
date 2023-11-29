import React from "react";
import profilePicture from "../../img/cool-profile-picture.jpg";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact, onDelete }) => {

  const handleDelete = () => {
    onDelete(contact.id);
  };

  const editUrl = `/edit/${contact.id}`;

  return (
    <div>
      <div className="ContactCardContainer d-flex gap-5">
        <div className="imgContainer d-flex">
          <img
            src={profilePicture}
            alt="ProfileImage"
            className="ProfileImage d-flex"
          />
        </div>
        <div>
          <h4>{contact.full_name}</h4>
          <span className="d-flex flex-column gap-2">
            <i className="fa-solid fa-location-dot"> {contact.address}</i>
            <i className="fa-solid fa-phone"> {contact.phone}</i>
            <i className="fa-solid fa-envelope"> {contact.email}</i>
          </span>
        </div>
        {editUrl && (
        <Link to={`/edit/${contact.id}`}>
          <div className="d-flex">
          <i className="fa-solid fa-pen-to-square" id="edit"></i>
          </div>
        </Link>
           )}
        <div className="d-flex">
          <i className="fa-solid fa-trash" onClick={handleDelete}></i>
        </div>
      </div>
    </div>
  );
};
