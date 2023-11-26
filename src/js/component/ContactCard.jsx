import React from "react";
import profilePicture from "../../img/cool-profile-picture.jpg";

export const ContactCard = ({ contact, onDelete }) => {

  const handleDelete = () => {
    onDelete(contact.id);
  };


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
            <i class="fa-solid fa-location-dot"> {contact.address}</i>
            <i class="fa-solid fa-phone"> {contact.phone}</i>
            <i class="fa-solid fa-envelope"> {contact.email}</i>
          </span>
        </div>
        <div className="d-flex">
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
        <div className="d-flex">
          <i class="fa-solid fa-trash" onClick={handleDelete}></i>
        </div>
      </div>
    </div>
  );
};
