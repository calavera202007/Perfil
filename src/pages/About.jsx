import { FiDownload } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";
import Tag from "../components/Tag";
import Reveal from "../components/Reveal";
import LogoBadge from "../components/LogoBadge";
import { profile, experience, education, skillGroups, languages, research, publications, certifications } from "../data/profile";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre mí"
        title={profile.fullName}
        description={profile.title}
      />

      <section className="section">
        <Reveal className="about-intro">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="print-contact">
            {profile.email} · {profile.phone} · {profile.location} · {profile.linkedin.replace("https://www.", "")}
          </p>
          <button type="button" className="btn-ghost no-print" onClick={() => window.print()}>
            <FiDownload /> Guardar hoja de vida en PDF
          </button>
        </Reveal>
      </section>

      <section className="section">
        <div className="row g-5">
          <div className="col-12 col-lg-7">
            <Reveal>
              <p className="page-header__eyebrow">Experiencia</p>
              <h2 className="section__title">Lo que he construido.</h2>
            </Reveal>
            <div className="timeline">
              {experience.map((job, i) => (
                <Reveal as="article" className="timeline__item" delay={i * 60} key={job.role + job.company}>
                  <div className="timeline__meta">
                    <LogoBadge label={job.logo} color={job.logoColor} />
                    <span className="timeline__period">{job.period}</span>
                    {job.current && <span className="timeline__badge">Actual</span>}
                  </div>
                  <div className="timeline__content">
                    <h3>{job.role}</h3>
                    <p className="timeline__company">
                      {job.company}
                      {job.location && <span className="timeline__location"> · {job.location}</span>}
                    </p>
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
          </div>

          <div className="col-12 col-lg-5">
            <Reveal>
              <p className="page-header__eyebrow">Educación</p>
              <h2 className="section__title">Dónde me formé.</h2>
            </Reveal>
            <div className="edu-list">
              {education.map((e, i) => (
                <Reveal className="edu-card" delay={i * 60} key={e.degree}>
                  <LogoBadge label={e.logo} color={e.logoColor} />
                  <div>
                    <span className="edu-card__period">{e.period}</span>
                    <h3>{e.degree}</h3>
                    <p>
                      {e.school}
                      {e.location && <span className="timeline__location"> · {e.location}</span>}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="lang-block">
              <p className="page-header__eyebrow">Idiomas</p>
              <div className="lang-row">
                {languages.map((l) => (
                  <div className="lang-pill" key={l.name}>
                    <span>{l.name}</span>
                    <span className="lang-pill__level">{l.level}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal className="page-header proficiency-head">
          <p className="page-header__eyebrow">Habilidades</p>
          <h2 className="section__title">Dominio técnico.</h2>
          <p className="page-header__desc">Las tecnologías con las que trabajo en producción.</p>
        </Reveal>
        <div className="row g-4">
          {skillGroups.map((g, i) => (
            <div className="col-12 col-md-6 col-xl-3" key={g.title}>
              <Reveal className="proficiency-card" delay={i * 90}>
                <h3 style={{ color: g.color }}>{g.title}</h3>
                <ul className="proficiency-list">
                  {g.skills.map((s) => (
                    <li key={s}>
                      <span className="proficiency-list__dot" style={{ background: g.color }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="page-header proficiency-head">
          <p className="page-header__eyebrow">Investigación</p>
          <h2 className="section__title">Ponencias y congresos.</h2>
          <p className="page-header__desc">Participación como ponente representando a semilleros y proyectos de investigación.</p>
        </Reveal>
        <div className="timeline">
          {research.map((r, i) => (
            <Reveal as="article" className="timeline__item" delay={i * 60} key={r.title}>
              <div className="timeline__meta">
                <span className="timeline__period">{r.date}</span>
                <span className="timeline__badge">{r.role}</span>
              </div>
              <div className="timeline__content">
                <h3>{r.title}</h3>
                <p className="timeline__company">{r.event}</p>
                <p className="timeline__desc">
                  {r.host}
                  {r.location && ` · ${r.location}`}
                  {r.hours && ` · ${r.hours}`}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {publications.length > 0 && (
          <div className="edu-list" style={{ marginTop: "1.5rem" }}>
            {publications.map((p) => (
              <div className="edu-card" key={p.title}>
                <div>
                  <span className="edu-card__period">
                    {p.status} · {p.date}
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.context}</p>
                  <p>{p.authors}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="section">
        <Reveal className="page-header proficiency-head">
          <p className="page-header__eyebrow">Certificaciones</p>
          <h2 className="section__title">Formación complementaria.</h2>
        </Reveal>
        <div className="edu-list">
          {certifications.map((c, i) => (
            <Reveal className="edu-card" delay={i * 60} key={c.title}>
              <LogoBadge label={c.logo} color={c.logoColor} />
              <div>
                <span className="edu-card__period">{c.date}</span>
                <h3>{c.title}</h3>
                <p>
                  {c.issuer}
                  {c.hours && ` · ${c.hours}`}
                </p>
                {c.detail && <p className="cert-detail">{c.detail}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Contact />
    </>
  );
}
