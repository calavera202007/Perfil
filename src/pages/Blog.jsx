import { FiEdit3, FiMail } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import Tag from "../components/Tag";
import Reveal from "../components/Reveal";
import { profile } from "../data/profile";

const upcomingTopics = [
  "Power BI & modelado de datos",
  "SQL / PL-SQL en Oracle",
  "Automatización con Python",
  "ETL y calidad de datos",
];

export default function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notas sobre datos y desarrollo"
        description="Todavía no hay artículos publicados, pero aquí compartiré aprendizajes sobre análisis de datos, BI y desarrollo de software."
      />

      <section className="section">
        <Reveal className="blog-empty">
          <div className="blog-empty__icon">
            <FiEdit3 />
          </div>
          <h2>Próximamente</h2>
          <p>
            Estoy preparando los primeros artículos. Mientras tanto, estos son
            algunos temas que planeo escribir:
          </p>
          <div className="blog-empty__tags">
            {upcomingTopics.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <a href={`mailto:${profile.email}`} className="btn-ghost">
            <FiMail /> Avísame cuando publiques
          </a>
        </Reveal>
      </section>
    </>
  );
}
