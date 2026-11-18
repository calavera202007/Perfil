import { Link } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi";
import Reveal from "./Reveal";
import profilePhoto from "../assets/profile.jpeg";
import { profile } from "../data/profile";

export default function AboutTeaser() {
  return (
    <section className="section">
      <Reveal className="about-teaser row align-items-center g-4">
        <div className="col-12 col-md-4 col-lg-3 about-teaser__photo-col">
          <img src={profilePhoto} alt={profile.fullName} className="about-teaser__photo" />
        </div>
        <div className="col-12 col-md-8 col-lg-9">
          <p className="page-header__eyebrow">Sobre mí</p>
          <h2 className="about-teaser__name">{profile.name}.</h2>
          <p className="about-teaser__role">{profile.title}</p>
          <p className="about-teaser__bio">{profile.about[0]}</p>
          <Link to="/about" className="section__link">
            Leer más <FiArrowDown />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
