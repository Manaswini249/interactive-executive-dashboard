export default function KPI({ title, value, color }) {
  return (
    <div
      className="card text-center shadow"
      style={{
        backgroundColor: color,
        color: "white"
      }}
    >
      <div className="card-body">
        <h5>{title}</h5>
        <h2>{value}</h2>
      </div>
    </div>
  );
}
