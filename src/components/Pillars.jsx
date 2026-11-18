import { FiBarChart2, FiCpu, FiCode } from "react-icons/fi";
import Reveal from "./Reveal";
import { pillars } from "../data/profile";

const icons = {
  chart: FiBarChart2,
  cpu: FiCpu,
  code: FiCode,
};

export default function Pillars() {
  return (
    <section className="section pillars">
      <Reveal className="page-header pillars__head">
        <p className="page-header__eyebrow">Por qué trabajar conmigo</p>
        <h2 className="pillars__title">
          Tres pilares. <em>Una disciplina.</em>
        </h2>
      </Reveal>
      <div className="row g-4">
        {pillars.map((p, i) => {
          const Icon = icons[p.icon] || FiCode;
          return (
            <div className="col-12 col-md-4" key={p.title}>
              <Reveal className="pillar-card h-100" delay={i * 100}>
                <div className="pillar-card__icon">
                  <Icon />
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
