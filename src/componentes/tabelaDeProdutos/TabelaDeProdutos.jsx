import React, { useState, useEffect } from "react";
import ProdutosRepositorio from "../../database/ProdutosRepositorio";
import "./style.css";

import boxConjunto from "../../img/iconsVenda/box-conjunto.png"
import box from "../../img/iconsVenda/box.png"
import money from "../../img/iconsVenda/money.png"
import categoria from "../../img/iconsVenda/categoria.png"
import star from "../../img/iconsVenda/star.png"

export default function TabelaDeProdutos({ onItemClick }) {

  const [selecionados, setSelecionados] = useState({});
  const [produtos, setProdutos] = useState([]);

  const db = ProdutosRepositorio();

  // Função para recuperar os produtos
  const recuperarProdutos = async () => {
    const produtosList = await db.recuperarProdutosLimitadosParaTabela();
    const produtosArray = Array.from(produtosList, ([id, data]) => ({ id, ...data }));
    setProdutos(produtosArray);
  };

  useEffect(() => {
    recuperarProdutos();
  }, []);


  const handleRowClick = (id) => {
    setSelecionados((prevSelecionados) => ({
      ...prevSelecionados,
      [id]: !prevSelecionados[id],
    }));
    onItemClick(produtos.find(p => p.id === id));

  };

  return (
    <div className="table-container">
      <table className="table-produtos">
        <thead>
          <tr>
            <th>
              <img src={star} width={20} />
            </th>
            <th>
              <img src={box} width={20} />
              Produto</th>
            <th>
              <img src={categoria} width={20} />
              Categoria</th>
            <th>
              <img src={money} width={20} />
              Preço
            </th>
            <th>
              <img src={boxConjunto} width={20} />
              Estoque Atual
            </th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr
              key={produto.id}
              onClick={() => handleRowClick(produto.id)}
              className={selecionados[produto.id] ? "selecionado" : ""}
            >
              <td className="checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={selecionados[produto.id]}
                  readOnly
                />
              </td>
              <td>{produto.nome}</td>
              <td>{produto.categoria}</td>
              <td>R${produto.preco}</td>
              <td>{produto.quantidade} unidades</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
