export interface CardProps {
  title: string;
  value: string | number;
  subtext?: string;
}

export default function Card({ title, value, subtext }: CardProps) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-value">{value}</p>
      {subtext && <p className="card-subtext">{subtext}</p>}
    </div>
  );
}
