import { FiMail, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";
import Reveal from "./Reveal";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section className="section no-print" id="contacto">
      <Reveal className="contact-card">
        <p className="page-header__eyebrow">Contacto</p>
        <h2 className="section__title">¿Hablamos?</h2>
        <p className="contact-card__text">
          Estoy abierto a oportunidades en análisis de datos, Business Intelligence y
          desarrollo de software. Escríbeme y te respondo pronto.
        </p>
        <div className="contact-card__actions">
          <a href={`mailto:${profile.email}`} className="btn-accent">
            <FiMail /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="btn-ghost">
            <FiPhone /> {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
            <FiLinkedin /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
            <FiGithub /> GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
