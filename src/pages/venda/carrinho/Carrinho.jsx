import trashIcon from "../../../img/trash.png";
import plusIcon from "../../../img/rect1.svg";
import minhIcon from "../../../img/rect2.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Comanda({ itens = [] }) {
  const [localItens, setLocalItens] = useState(itens);

  useEffect(() => {
    if (Array.isArray(itens)) {
      setLocalItens([...itens]); // Garante que estamos copiando os dados corretamente
    }
  }, [itens]);

  const handleAddItem = (index) => {
    setLocalItens(localItens.map((item, i) =>
      i === index ? { ...item, qtd: item.qtd + 1 } : item
    ));
  };

  const handleRemoveItem = (index) => {
    setLocalItens((prevItens) =>
      prevItens.map((item, i) =>
        i === index && item.qtd > 1 ? { ...item, qtd: item.qtd - 1 } : item
      )
    );
  };

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
                  onClick={() => handleRemoveItem(index)}
                />
                <p className="mb-0">{i.qtd}</p>
                <img
                  src={plusIcon}
                  height={15}
                  width={15}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleAddItem(index)}
                />
              </td>
              <td>R$ {i.qtd * i.preco}</td>
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
