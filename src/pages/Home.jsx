import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import NetworkBackground from "../components/NetworkBackground";
import Tag from "../components/Tag";
import Reveal from "../components/Reveal";
import LogoBadge from "../components/LogoBadge";
import AboutTeaser from "../components/AboutTeaser";
import Pillars from "../components/Pillars";
import Contact from "../components/Contact";
import { profile, experience } from "../data/profile";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__grid row align-items-center g-4">
          <div className="hero__text col-12 col-lg-7">
            <p className="hero__eyebrow hero-in hero-in--1">{profile.currentRole}</p>
            <h1 className="hero__title hero-in hero-in--2">
              Datos y software,
              <br />
              construidos para <em>decidir mejor.</em>
            </h1>
            <p className="hero__subtitle hero-in hero-in--3">
              SQL, Power BI y Python. Automatización de procesos, pipelines ETL
              y aplicaciones web. Actualmente en Falabella (Bogotá); vivo en{" "}
              {profile.location}.
            </p>
            <div className="hero__tags hero-in hero-in--4">
              {profile.heroTags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="hero__actions hero-in hero-in--5">
              <Link to="/projects" className="btn-accent">
                Ver proyectos <FiArrowUpRight />
              </Link>
              <Link to="/about" className="btn-ghost">
                Sobre mí
              </Link>
            </div>
          </div>
          <div className="hero__visual col-12 col-lg-5 hero-in hero-in--2">
            <NetworkBackground />
          </div>
        </div>
      </section>

      <AboutTeaser />

      <Pillars />

      <section className="section">
        <Reveal className="section__head">
          <h2 className="section__title">Experiencia reciente</h2>
          <Link to="/about" className="section__link">
            Ver todo <FiArrowUpRight />
          </Link>
        </Reveal>
        <div className="timeline">
          {experience.slice(0, 3).map((job, i) => (
            <Reveal as="article" className="timeline__item" delay={i * 90} key={job.role + job.company}>
              <div className="timeline__meta">
                <LogoBadge label={job.logo} color={job.logoColor} />
                <span className="timeline__period">{job.period}</span>
                {job.current && <span className="timeline__badge">Actual</span>}
              </div>
              <div className="timeline__content">
                <h3>{job.role}</h3>
                <p className="timeline__company">{job.company}</p>
                <p className="timeline__desc">{job.description}</p>
                <div className="timeline__tags">
                  {job.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Contact />
    </>
  );
}
