import seta from "../../img/seta_para_baixo.svg";
import "./DropDownMenu.css";

/*
    recebe dois parametro um é o nome do menu o outro e um array com as elementos desse menu
    ex.: <DropDownMenu name="Categoria" options={[{name:"option1",exec: function(){}}, {name:"option2"}]} />
*/
export default function DropDownMenu({ nome, options }) {
  const list = options.map((opt) => {
    if (opt.exec) {
      return (
        <li onClick={opt.exec} type="button">
          {opt.key}
        </li>
      );
    } else {
      return <li type="button">{opt.key}</li>;
    }
  });
  return (
    <div className="relative inline-block d-flex">
      <div
        className="d-flex flex-row align-items-center gap-2"
        type="button"
        data-bs-toggle="dropdown"
      >
        <p class="mb-0">{nome}</p>
        <img src={seta} className="seta" />
      </div>
      <ul className="dropdown-menu">{list}</ul>
    </div>
  );
}
