// import { useState } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import "./StyleServicoPrestado.css";

// Serviço Prestado: onde posso vender um serviço fora de produtos.
export default function ServicoPrestado() {
  // const [listaServicos, setListaServico] = useState([]);
  return (
    <div className="servicoPrestado">
      <table className="table">
        <thead>
          <tr>
            <td>Serviço Prestado</td>
            <td>Categoria</td>
            <td>Preço</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input className="input-bottom-line"  placeholder="Descriçao do serviço prestado" />
            </td>
            <td>
              <DropDownMenu
                nome="Categoria"
                options={[{ value: "Manutenção" }, { value: "Limpeza" }]}
              />
            </td>
            <td>
              <input className="input-bottom-line" placeholder="R$ 29,90" />
            </td>
            <td>
              <button className="btn btn-success" onClick={() => {}}>
                Adicionar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
