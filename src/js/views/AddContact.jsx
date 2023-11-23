import React, { useState, useEffect, useContext } from "react";
import "../../styles/AddContact.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <h1 className="text-center">Add a New Contact</h1>
      <div className="FormContainer">
        <div className="InputName">
          <div class="container">
            <span>
              <strong>Full Name</strong>{" "}
            </span>
            <div class="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Full Name</label>
            </div>
          </div>
        </div>
        <div className="InputEmail">
          <div class="container">
            <span>
              <strong>Enter Email</strong>{" "}
            </span>
            <div class="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Enter email</label>
            </div>
          </div>
        </div>
        <div className="InputPhone">
          <div class="container">
            <span>
              <strong>Phone</strong>{" "}
            </span>
            <div class="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Enter phone</label>
            </div>
          </div>
        </div>
        <div className="InputAddress">
          <div class="container">
            <span>
              <strong>Address</strong>{" "}
            </span>
            <div class="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Enter address</label>
            </div>
          </div>
        </div>
        <button className="btn btn-primary SaveButton">Save</button>
        <Link to="/" className="link-opacity-100">
          or get back to contacts
        </Link>
      </div>
    </div>
  );
};
