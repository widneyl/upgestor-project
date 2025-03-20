import trashIcon from "../../../img/trash.png";
import plusIcon from "../../../img/rect1.svg";
import minhIcon from "../../../img/rect2.svg";
import { Link } from "react-router-dom";

export default function Carrinho({ itens, onIncreaseQtd, onDecreaseQtd }) {
  return (
    <div className="w-25 d-flex flex-column justify-content-between">
      <table className="table" style={{ borderStyle: "none" }}>
        <tbody>
          {itens.map((i, index) => (
            <tr key={index}>
              <td>{i.nome}</td>
              <td className="d-flex align-items-center gap-3">
                <img
                  src={minhIcon}
                  height={15}
                  width={15}
                  style={{ cursor: "pointer" }}
                  onClick={() => onDecreaseQtd(i.id)}
                />
                <p className="mb-0">{i.qtdCarrinho}</p>
                <img
                  src={plusIcon}
                  height={15}
                  width={15}
                  style={{ cursor: "pointer" }}
                  onClick={() => onIncreaseQtd(i.id)}
                />
              </td>
              <td>R$ {i.qtdCarrinho * i.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex flex-row justify-content-between">
        <img src={trashIcon} height="32" />{" "}
        <Link className="btn bg-success text-white" to="/pay">
          Ir para o pagamento
        </Link>
      </div>
    </div>
  );
}
