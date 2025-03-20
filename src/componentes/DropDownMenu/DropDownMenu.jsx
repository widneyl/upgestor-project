import seta from "../../img/seta_para_baixo.svg";
import "./DropDownMenu.css";
import filter from "../../img/iconsVenda/filter.png"

/*
    recebe dois parametro um é o nome do menu o outro e um array com as elementos deste menu
    ex.: <DropDownMenu name="Categoria" options={[{name:"option1",exec: function(){}}, {name:"option2"}]} />
*/
export default function DropDownMenu({ nome, options }) {
  const list = options.map((opt, index) => {
    if (opt.exec) {
      return (
        <li
          className="item"
          onClick={opt.exec}
          type="button"
          key={index}
        >
          {opt.key}
        </li>
      );
    } else {
      return (
        <li className="item" type="button" key={index}> 
          {opt.key}
        </li>
      );
    }
  });

  return (
    <div className="relative inline-block d-flex">
      <div
        className="d-flex flex-row align-items-center gap-2"
        type="button"
        data-bs-toggle="dropdown"
      >
        <img src={filter} width={18} height={18} />
        <p className="mb-0">{nome}</p>
        <img src={seta} style={{ height: "15px", width: "15px" }} />
      </div>
      <ul className="dropdown-menu">{list}</ul>
    </div>
  );
}