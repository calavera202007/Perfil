import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__name">{profile.fullName}</p>
          <p className="site-footer__role">{profile.title}</p>
        </div>
        <div className="site-footer__links">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
          <a href={`tel:${profile.phone}`} aria-label="Teléfono">
            <FiPhone />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        </div>
      </div>
      <p className="site-footer__copy">
        © {new Date().getFullYear()} {profile.name}. Construido con React &amp; Bootstrap.
      </p>
    </footer>
  );
}
