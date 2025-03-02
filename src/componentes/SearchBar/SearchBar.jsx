import DropDownMenu from "../DropDownMenu/DropDownMenu";
import Input from "../Inputs/SearchInput/Input";
import plus from "../../img/iconsVenda/plus.png"
import "./style.css";
import { Link } from "react-router-dom";

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

      <div className="ms-auto d-flex gap-1">
        <Link to={"/financas"} className="btn d-flex align-items-center justify-content-center m-0" style={{ color: 'white', backgroundColor: '#5086c1' }}>
          Vendas
        </Link>
        <Link to={"/estoque"} className="btn d-flex align-items-center justify-content-center m-0" style={{ color: 'white', backgroundColor: '#5086c1' }}>
          Novo produto
          <img src={plus} width={18} style={{ marginLeft: '5px' }} />
        </Link>
      </div>
    </div>

  );
}
