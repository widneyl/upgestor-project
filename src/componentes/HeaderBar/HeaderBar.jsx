import "./HeaderBar.css";
import userimg from "../../img/user.png";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

// barra de cabeçalho com titulo e botao para o usuario
export default function HeaderBar({ title }) {
  return (
    <div className="HeaderBar">
      <h1 style={{ fontSize: "30px" }}>{title}</h1>
      <div className="d-flex gap-3">
        <img src={userimg} alt="" />
        <DropDownMenu
          nome="Usuario"
          options={[
            { value: "Minha conta" },
            { value: "Configuraçoes" },
            { value: "Sair" },
          ]}
        />
      </div>
    </div>
  );
}
