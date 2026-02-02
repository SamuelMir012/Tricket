
import { Link } from "react-router";
import { useEffect, useState } from "react";

type Ticket = {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
};

const API_URL = "http://localhost:5243/api/Tickets"; // put your backend port here

export default function Home() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎫 Tricket</h1>

      {tickets.map((ticket) => (
        <Link
          to={`/tickets/${ticket.id}`}
          className="block border rounded p-4 mb-3 shadow hover:bg-gray-100"
        >
          <h2 className="font-semibold">{ticket.title}</h2>
          <p>{ticket.description}</p>
          <p className="text-sm">Status: {ticket.status}</p>
          <p className="text-sm">Priority: {ticket.priority}</p>
        </Link>
      ))}
    </div>
  );
}
