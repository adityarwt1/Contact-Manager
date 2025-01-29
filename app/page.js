"use client"
import Skeleton from "@/components/Skeleton";
import React, { useEffect, useState } from "react";

function Page() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState([]);
  const [editContactData, setEditContactData] = useState(null);

  const editContact = (contact) => {
    setEditContactData(contact);  /// handlng open the form
  };

  const handleEditChange = (e) => { /////////// handiling updatiion the form
    setEditContactData({
      ...editContactData,
      [e.target.name]: e.target.value
    });
  };

  const handleEditSubmit = async (id) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editContactData),
      });

      if (response.ok) {
        const updatedContact = await response.json();
        setContacts(contactsa.map(contact => contact._id === updatedContact._id ? updatedContact : contact));
        setEditContactData(null); // Close the form after saving
      } else {
        console.log("Error updating contact");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };



  useEffect(() => {
    document.title = "Contact Manager || Aditya";
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/contact");
      const data = await response.json();
      if (data.success) setContacts(data.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const addContact = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, number, email }),
      });
      const data = await response.json();
      if (data.success) {
        setContacts([...contacts, data.data]);
        setName("");
        setNumber("");
        setEmail("");
      }
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await fetch("/api/contact", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (<div className="w-full flex-col h-screen flex justify-center items-center bg-gray-100">
    <div className="w-1/3 h-fit bg-white shadow-2xl rounded-lg p-4">
      <div className="text-black text-2xl font-bold">Contact Manager</div>
  
      <form onSubmit={addContact} className="flex flex-col justify-center items-center">
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter name" required className="outline-gray-500 shadow-sm border w-1/3 text-black rounded-md p-2 mb-2 " />
        <input type="tel" name="number" value={number} onChange={(e) => setNumber(e.target.value.replace(/\D/g, "").slice(0, 10))} placeholder="1234567890" required className="outline-gray-500 shadow-sm w-1/3 text-black border rounded-md p-2 mb-2" />
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="abc@gmail.com" required className="outline-gray-500 shadow-sm w-1/3 text-black border rounded-md p-2 mb-2" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 duration-300  text-white p-2 rounded-lg w-1/3 shadow-md">Add Contact</button>
      </form>
  
      {!contacts.length ? <Skeleton /> : <div className="mt-4">
        <h3 className="text-xl font-bold text-black">Contacts List</h3>
        {contacts.map((contact) => (
          <div key={contact._id} className="border p-2 rounded-md mt-2 shadow-lg ">
            <p className="text-black"><strong className="text-black">Name:</strong> {contact.name}</p>
            <p className="text-black"><strong>Phone:</strong> {contact.number}</p>
            <p className="text-black"><strong>Email:</strong> {contact.email}</p>
            <button onClick={() => deleteContact(contact._id)} className="bg-red-500 text-white p-1 rounded-md">Delete</button>
            <button onClick={() => handleEditSubmit(contact._id)} className="bg-blue-500 text-white p-1 rounded-md ml-2">Edit</button>
          </div>
        ))}
      </div>}
    </div>
  </div>
  )}
      export default Page;