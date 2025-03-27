import { useState } from "react";
import "./StyleServicoPrestado.css";

export default function ServicoPrestado({ onAddItem }) {
  const [servico, setServico] = useState({ nome: "", preco: 0 });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setServico({ ...servico, [name]: value });
  };

  const handleSubmit = () => {
    // Adiciona o serviço ao estado compartilhado
    onAddItem({
      nome: servico.nome,
      qtd: 1,
      preco: servico.preco,
    });
  };

  return (
    <div className="servicoPrestado mt-5">
      <div className="mb-3 d-flex align-items-end gap-3">
        <div className="w-50">
          <label
            className="form-label"
            style={{ fontWeight: "bold", color: "#545454" }}
          >
            Serviço prestado
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Descrição do serviço"
            name="nome"
            value={servico.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="form-label"
            style={{ fontWeight: "bold", color: "#545454" }}
          >
            Valor
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="R$"
            name="preco"
            value={servico.preco}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="btn bg-success text-white align-self-end"
            onClick={handleSubmit}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
