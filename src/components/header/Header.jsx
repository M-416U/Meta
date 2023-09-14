import { links } from "./Links";
import "./header.css";
export default function Header() {
  return (
    <nav>
      <div className="logo">
        <img src="/images/logo.png" alt="Meat Logo" />
        <h3 className="meta">Meta</h3>
      </div>
      <ul className="nav-links">
        {links.map((link, index) => (
          <li key={index} className={index === 0 ? "active" : ""}>
            {link}
          </li>
        ))}
      </ul>
      <img src="/images/search.png" alt="search Icon" className="w-30" />
    </nav>
  );
}
