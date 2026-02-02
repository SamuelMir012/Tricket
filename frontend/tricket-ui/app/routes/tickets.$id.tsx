import { useEffect, useState } from "react";
import { useParams } from "react-router";

type Ticket = {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
};

const API_URL = "http://localhost:5243/api/Tickets";

export default function TicketDetail() {
  const { id } = useParams();
  const [ticket, setTicket] = useState<Ticket | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => setTicket(data));
  }, [id]);

  const updateStatus = async (newStatus: string) => {
    if (!ticket) return;

    await fetch(`${API_URL}/${id}`, {
      method: "PUT", // (your backend uses PUT; later we can add PATCH)
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...ticket,
        status: newStatus,
      }),
    });

    setTicket({ ...ticket, status: newStatus });
  };

  if (!ticket) return <p>Loading...</p>;

  return (
    <div className="max-w-md">
      <h1 className="text-xl font-bold mb-2">{ticket.title}</h1>
      <p className="mb-2">{ticket.description}</p>
      <p className="mb-4">Priority: {ticket.priority}</p>

      <p className="mb-2">Status: {ticket.status}</p>

      <div className="flex gap-2">
        <button
          className="bg-yellow-500 text-white px-3 py-1 rounded"
          onClick={() => updateStatus("InProgress")}
        >
          In Progress
        </button>

        <button
          className="bg-green-600 text-white px-3 py-1 rounded"
          onClick={() => updateStatus("Resolved")}
        >
          Resolved
        </button>
      </div>
    </div>
  );
}
