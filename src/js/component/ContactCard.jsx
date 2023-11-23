import React from "react";
import profilePicture from "../../img/cool-profile-picture.jpg";

export const ContactCard = () => {
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
          <h4>Wunderbar Das Beste</h4>
          <span className="d-flex flex-column gap-2">
            <i class="fa-solid fa-location-dot"> Av. Hackers 123</i>
            <i class="fa-solid fa-phone"> (999) 555 6644</i>
            <i class="fa-solid fa-envelope"> MisteryAccount@gmail.com</i>
          </span>
        </div>
        <div className="d-flex">
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
        <div className="d-flex">
          <i class="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  );
};
