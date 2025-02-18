import DropDownMenu from "../DropDownMenu/DropDownMenu";
import Input from "../Input/Input";
import "./StyleServicoPrestado.css";

// Serviço Prestado: onde posso vender um serviço fora de produtos.
export default function ServicoPrestado() {
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
              <Input placeholder="Descriçao do serviço prestado" />
            </td>
            <td>
              <DropDownMenu nome="Categoria"
                options={[{ key: "Manutenção" }, { key: "Limpeza" }]}
              />
            </td>
            <td>
              <Input placeholder="R$ 29,90" />
            </td>
            <td>
              <button className="btn btn-success">Adicionar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
