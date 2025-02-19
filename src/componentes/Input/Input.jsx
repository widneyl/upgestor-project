import "./Input.css";
import search from "../../img/iconsVenda/search.png"

export default function Input({ tipo, placeholder }) {
  return (
    <div className="search-container">
      <img src={search} className="search-icon" width={18} height={18} />
      <input className="search-input" type={tipo} placeholder={placeholder} />
    </div>


  )
}
