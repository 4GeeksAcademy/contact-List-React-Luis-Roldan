import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      fetchContacts: async () => {
        try {
          const response = await fetch(
            "https://playground.4geeks.com/apis/fake/contact/agenda/luis-roldan"
          );
          const data = await response.json();
          setStore({ contacts: data });
        } catch (error) {
          console.error("Error fetching contacts:", error);
        }
      },
      saveContact: async (contactData, contactId) => {
        const method = contactId ? "PUT" : "POST";
        const url = contactId
          ? `https://playground.4geeks.com/apis/fake/contact/${contactId}`
          : "https://playground.4geeks.com/apis/fake/contact/";

        try {
          const contactDataWithSlug = {
            ...contactData,
            agenda_slug: "luis-roldan",
          };
          const response = await fetch(url, {
            method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contactDataWithSlug),
          });
          const data = await response.json();

          if (contactId) {
            const updatedContacts = getStore().contacts.map((contact) =>
              contact.id === contactId ? data : contact
            );
            setStore({ contacts: updatedContacts });
          } else {
            setStore({ contacts: [...getStore().contacts, data] });
          }

          setStore({
            newContact: {
              full_name: "",
              email: "",
              agenda_slug: "luis-roldan",
              phone: "",
              address: "",
            },
          });
        } catch (error) {
          console.error("Error saving contact:", error);
        }
      },
      fetchContactDetails: async (contactId) => {
        try {
          const response = await fetch(
            `https://playground.4geeks.com/apis/fake/contact/${contactId}`
          );
          const data = await response.json();
          setStore({ newContact: data });
        } catch (error) {
          console.error("Error fetching contact details:", error);
        }
      },
      deleteContact: async (contactId) => {
        try {
          const response = await fetch(
            `https://playground.4geeks.com/apis/fake/contact/${contactId}`,
            {
              method: "DELETE",
            }
          );

          if (response.ok) {
            const updatedContacts = getStore().contacts.filter(
              (contact) => contact.id !== contactId
            );
            setStore({ contacts: updatedContacts });
          } else {
            console.error("Error deleting contact:", response.status);
          }
        } catch (error) {
          console.error("Error deleting contact:", error);
        }
      },
      deleteAllContacts: async () => {
        try {
          const response = await fetch(
            "https://playground.4geeks.com/apis/fake/contact/agenda/luis-roldan",
            {
              method: "DELETE",
            }
          );

          if (response.ok) {
            setStore({ contacts: [] });
          } else {
            console.error("Error deleting all contacts:", response.status);
          }
        } catch (error) {
          console.error("Error deleting all contacts:", error);
        }
      },

      fetchContactsByAgenda: async (agendaSlug) => {
        try {
          const response = await fetch(
            `https://playground.4geeks.com/apis/fake/contact/agenda/luis-roldan`
          );
          const data = await response.json();
          setStore({ contacts: data });
        } catch (error) {
          console.error("Error fetching contacts by agenda:", error);
        }
      },

      setStore: (updatedStore) => {
        const store = getStore();
        setStore({ ...store, ...updatedStore });
      },
    },
  };
};

export default getState;
