import { useState } from "react";

const API_URL = "http://localhost:5243/api/Tickets";

export default function CreateTicket() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  const submitTicket = async () => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        status: "Open",
        priority,
      }),
    });

    setTitle("");
    setDescription("");
    alert("Ticket created!");
  };

  return (
    <div className="max-w-md">
      <h1 className="text-xl font-bold mb-4">Create Ticket</h1>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="border p-2 w-full mb-4 bg-auto"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option className="text-green-500">Low</option>
        <option className="text-yellow-500">Medium</option>
        <option className="text-red-500">High</option>
      </select>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={submitTicket}
      >
        Create
      </button>
    </div>
  );
}
