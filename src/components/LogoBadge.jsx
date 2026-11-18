export default function LogoBadge({ label, color }) {
  return (
    <div className="logo-badge" style={{ "--logo-color": color }}>
      {label}
    </div>
  );
}
