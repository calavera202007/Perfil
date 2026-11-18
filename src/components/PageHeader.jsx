export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="page-header">
      {eyebrow && <p className="page-header__eyebrow">{eyebrow}</p>}
      <h1 className="page-header__title">{title}</h1>
      {description && <p className="page-header__desc">{description}</p>}
    </div>
  );
}
