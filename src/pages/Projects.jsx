import { FiFolder } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import Tag from "../components/Tag";
import Reveal from "../components/Reveal";
import { projects, profile } from "../data/profile";

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Proyectos"
        title="Cosas que he construido"
        description="Una selección de proyectos de mi experiencia profesional y académica, desde dashboards corporativos hasta investigación aplicada."
      />

      <section className="section">
        <div className="row g-4">
          {projects.map((p, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={p.title}>
              <Reveal as="article" className="project-card h-100" delay={i * 80}>
                <div className={`project-thumb project-thumb--${p.gradient}`}>
                  <div className="project-badges">
                    <span className="project-badge">{p.category}</span>
                    {p.featured && <span className="project-badge project-badge--featured">Destacado</span>}
                  </div>
                  <FiFolder className="project-thumb__icon" />
                </div>
                <div className="project-card__body">
                  <h3>{p.title}</h3>
                  <p className="project-card__context">{p.context}</p>
                  <p className="project-card__desc">{p.description}</p>
                  <div className="project-card__tags">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="projects-more">
          <p>
            Más código y experimentos en{" "}
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/calavera202007
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
