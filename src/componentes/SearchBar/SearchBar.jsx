import DropDownMenu from "../DropDownMenu/DropDownMenu";
import Input from "../Input/Input";
import "./style.css";

// barra para pesquisar itens
export default function SearchBar() {
  return (
    <div className="d-flex flex-row gap-5 searchbar">
      <Input tipo="text" placeholder="Pesquisar" />
      <DropDownMenu
        nome="Categoria"
        options={[
          { key: "option1" },
          { key: "option2" },
          { key: "option3" },
          { key: "option4" },
          { key: "option5" },
        ]}
      />
    </div>
  );
}
