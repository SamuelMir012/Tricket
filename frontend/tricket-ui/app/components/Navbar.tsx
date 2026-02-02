import { Link } from "react-router";

export function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <Link to="/" className="hover:underline">
          Tickets
        </Link>
        <Link to="/create" className="hover:underline">
          Create Ticket
        </Link>
      </nav>
    </div>
  );
}

