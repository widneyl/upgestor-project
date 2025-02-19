import DropDownMenu from "../DropDownMenu/DropDownMenu";
import "./style.css";

// barra para pesquisar itens
export default function SearchBar() {
  return (
    <div className="d-flex flex-row gap-5 searchbar">
      <input
        className="input-bottom-line"
        type="text"
        placeholder="Pesquisar"
      />
      <DropDownMenu
        nome="Categoria"
        options={[
          { value: "option1" },
          { value: "option2" },
          { value: "option3" },
          { value: "option4" },
          { value: "option5" },
        ]}
      />
    </div>
  );
}
