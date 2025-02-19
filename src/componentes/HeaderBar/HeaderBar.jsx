import "./HeaderBar.css";
import userimg from "../../img/user.png";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

// barra de cabeçalho com titulo e botao para o usuario
export default function HeaderBar({ title, descricao }) {
  return (
    <div className="HeaderBar">
      <h1 style={{ fontSize: "30px", fontWeight: 'bold', color: '#545454' }}>{title}<span style={{fontSize: '16px', marginLeft: 5, fontWeight: "lighter"}}>{descricao}</span></h1>
      <div className="d-flex gap-3">
        <img src={userimg} alt="" />
        <DropDownMenu
          nome="Usuario"
          options={[
            { key: "Minha conta" },
            { key: "Configuraçoes" },
            { key: "Sair" },
          ]}
        />
      </div>
    </div>
  );
}