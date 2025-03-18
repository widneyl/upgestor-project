import "./Input.css";

export default function Input({ tipo, placeholder }) {
  return (
    <input className="bottom-line" type={tipo} placeholder={placeholder} />
  );
}
