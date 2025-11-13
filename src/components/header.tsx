import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#111111] shadow-lg">
      <nav className="mx-auto max-w-screen-xl px-4 py-4 flex items-center justify-between">
        
        {/* 🔹 Logo */}
        <Link to="/" className="text-white text-xl font-semibold">
          Unlimited Worlds 2025
        </Link>

        {/* 🔹 Botón menú móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl lg:hidden focus:outline-none"
        >
          {open ? "✖" : "☰"}
        </button>

        {/* 🔹 Links desktop */}
        <ul className="hidden lg:flex space-x-10 text-white font-medium">
          <li>
            <Link
              to="/home"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              Inicio
            </Link>
          </li>

          <li>
            <Link
              to="/calendar"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              Calendario
            </Link>
          </li>
        </ul>
      </nav>

      {/* 🔹 Menú móvil desplegable */}
      {open && (
        <div className="lg:hidden px-4 pb-4 animate-fadeIn">
          <ul className="flex flex-col gap-4 text-white font-medium">
            <li>
              <Link
                to="/home"
                onClick={() => setOpen(false)}
                className="block bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                to="/calendar"
                onClick={() => setOpen(false)}
                className="block bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10"
              >
                Calendario
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
