import { Link } from "react-router-dom";

import trashIcon from "../../../img/trash.png";
import plusIcon from "../../../img/rect1.svg";
import minhIcon from "../../../img/rect2.svg";

export default function Comanda({ itens }) {
  return (
    <div className="w-25 d-flex flex-column justify-content-between">
      <table className="table" style={{ borderStyle: "none" }}>
        <tbody>
          {itens.map((i, index) => (
            <tr key={index}>
              <td>{i.nome}</td>
              <td className="d-flex align-items-center gap-3">
                <img
                  src={plusIcon}
                  height={15}
                  width={15}
                  style={{ cursor: "pointer" }}
                />
                <p className="mb-0">{i.qtd}</p>
                <img
                  src={minhIcon}
                  height={15}
                  width={15}
                  style={{ cursor: "pointer" }}
                />
              </td>
              <td>{i.qtd * i.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <div></div>
        <div className="d-flex flex-row justify-content-between">
          <img src={trashIcon} height="32" />{" "}
          <Link className="btn bg-success text-white" to="/pay">
            Ir para o pagamento
          </Link>
        </div>
      </div>
    </div>
  );
}
