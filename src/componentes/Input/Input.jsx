import "./Input.css";

export default function Input({tipo,placeholder}) {
  return <input className="search-input" type={tipo} placeholder={placeholder} />;
}
