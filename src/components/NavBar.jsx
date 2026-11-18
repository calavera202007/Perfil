import { NavLink } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { profile } from "../data/profile";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Sobre mí" },
  { to: "/projects", label: "Proyectos" },
  { to: "/blog", label: "Blog" },
];

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <NavLink to="/" className="site-nav__brand" onClick={() => setOpen(false)}>
          <span className="site-nav__brand-mark" aria-hidden="true">—</span>
          {profile.name}
        </NavLink>

        <button
          className="site-nav__toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`site-nav__links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => "site-nav__link" + (isActive ? " is-active" : "")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
}
