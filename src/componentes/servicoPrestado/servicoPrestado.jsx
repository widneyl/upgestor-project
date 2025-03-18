import { useState } from "react";
import "./StyleServicoPrestado.css";

export default function ServicoPrestado({ selectedItens }) {
  const [servico, setServico] = useState({
    nome: "",
    preco: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setServico({ ...servico, [name]: value });
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
            onClick={() => {
              if (servico.nome && servico.preco > 0) {
                selectedItens({
                  nome: servico.nome,
                  preco: servico.preco,
                  qtd: 1,
                });
              } else {
                alert("Por favor, preencha o nome e o valor do serviço.");
              }
            }}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
