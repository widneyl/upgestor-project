import React, { useState, useEffect } from "react";
import ProdutosRepositorio from "../../database/ProdutosRepositorio";
import "./style.css";

import boxConjunto from "../../img/iconsVenda/box-conjunto.png";
import box from "../../img/iconsVenda/box.png";
import money from "../../img/iconsVenda/money.png";
import categoria from "../../img/iconsVenda/categoria.png";
import star from "../../img/iconsVenda/star.png";

export default function TabelaDeProdutos({ onAddItem, onRemoveItem }) {
  const [selecionados, setSelecionados] = useState([]);
  //firebase offline
  const produtos = [
    {
      id: 1,
      nome: "Produto A",
      categoria: "Categoria 1",
      preco: 50,
      estoque: 20,
    },
    {
      id: 2,
      nome: "Produto B",
      categoria: "Categoria 2",
      preco: 30,
      estoque: 15,
    },
    {
      id: 3,
      nome: "Produto C",
      categoria: "Categoria 3",
      preco: 20,
      estoque: 10,
    },
    {
      id: 4,
      nome: "Produto D",
      categoria: "Categoria 1",
      preco: 40,
      estoque: 25,
    },
    {
      id: 5,
      nome: "Produto E",
      categoria: "Categoria 2",
      preco: 60,
      estoque: 18,
    },
    {
      id: 6,
      nome: "Produto F",
      categoria: "Categoria 3",
      preco: 70,
      estoque: 30,
    },
    {
      id: 7,
      nome: "Produto G",
      categoria: "Categoria 1",
      preco: 55,
      estoque: 22,
    },
    {
      id: 8,
      nome: "Produto H",
      categoria: "Categoria 2",
      preco: 35,
      estoque: 12,
    },
  ];

  const db = ProdutosRepositorio();

  // Função para recuperar os produtos
  // const recuperarProdutos = async () => {
  //   const produtosList = await db.recuperarProdutosLimitadosParaTabela();
  //   const produtosArray = Array.from(produtosList, ([id, data]) => ({
  //     id,
  //     ...data,
  //   }));
  //   setProdutos(produtosArray);
  // };

  // useEffect(recuperarProdutos, []);
  const handleClick = (produto) => {
    setSelecionados((prevSelecionados) => {
      if (prevSelecionados.some((item) => item.id === produto.id)) {
        // Remove da lista se já estiver selecionado
        onRemoveItem(produto.id);
        return prevSelecionados.filter((item) => item.id !== produto.id);
      } else {
        // Adiciona à lista se não estiver selecionado
        onAddItem(produto);
        return [...prevSelecionados, produto];
      }
    });
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
              Produto
            </th>
            <th>
              <img src={categoria} width={20} />
              Categoria
            </th>
            <th>
              <img src={money} width={20} />
              Preço
            </th>
            <th>
              <img src={boxConjunto} width={20} />
              Estoque
            </th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr
              key={produto.id}
              onClick={() => handleClick(produto)}
              className={
                selecionados.some((item) => item.id === produto.id)
                  ? "selecionado"
                  : ""
              }
            >
              <td className="checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={selecionados.some((item) => item.id === produto.id)}
                  readOnly
                />
              </td>
              <td>{produto.nome}</td>
              <td>{produto.categoria}</td>
              <td>R$ {produto.preco}</td>
              <td>{produto.estoque} unidades</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}