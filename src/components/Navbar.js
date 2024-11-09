import React, { useState } from "react";
import MenuItem from "./MenuItem";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "Inicio", href: "#", subMenu: [] },
    { name: "Quienes Somos", href: "#", subMenu: ["Sobre Nosotros", "Lineas de Investigación", "Equipo de Trabajo"] },
    { name: "Líneas de Investigación", href: "#", subMenu: ["Línea de investigación clásica: Percepciones en Bogotá", "Línea Etnografía digital: Contenido en las redes sociales", "Línea de revisión de alcance: literatura científica"] },
    { name: "Mapas y Datos", href: "#", subMenu: ["Línea de investigación clásica: Percepciones en Bogotá", "Línea Etnografía digital: Contenido en las redes sociales", "Línea de revisión de alcance: literatura científica"] }
  ];

  return (
    <nav className="fixed w-full bg-blue-600 text-white p-4 t-0">
      <div className="relative container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-2xl font-bold">
          MyLogo
        </div>

        {/* Menu Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={` text-white transform ${
            isOpen ? " fixed md:top-0 top-10 right-0 h-full bg-blue-600 translate-x-0" : "hidden translate-x-full"
          } transition-transform duration-300 ease-in-out md:relative md:transform-none md:flex md:items-center w-64 md:w-auto`}
        >
          <ul className="flex flex-col space-y-6 p-4 md:flex-row md:space-y-0 md:space-x-6">
            {menuItems.map((post) => (
              <MenuItem key={post.name} post={post} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
