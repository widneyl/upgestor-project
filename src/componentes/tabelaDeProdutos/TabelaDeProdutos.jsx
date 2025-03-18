import React, { useState, useEffect } from "react";
import ProdutosRepositorio from "../../database/ProdutosRepositorio";
import "./style.css";

import boxConjunto from "../../img/iconsVenda/box-conjunto.png";
import box from "../../img/iconsVenda/box.png";
import money from "../../img/iconsVenda/money.png";
import categoria from "../../img/iconsVenda/categoria.png";
import star from "../../img/iconsVenda/star.png";

export default function TabelaDeProdutos({ onItemClick, selectedItens }) {
  const [selecionados, setSelecionados] = useState([]);
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: "Produto A",
      categoria: "Categoria 1",
      preco: "R$ 50,00",
      estoque: 20,
    },
    {
      id: 2,
      nome: "Produto B",
      categoria: "Categoria 2",
      preco: "R$ 30,00",
      estoque: 15,
    },
    {
      id: 3,
      nome: "Produto C",
      categoria: "Categoria 3",
      preco: "R$ 20,00",
      estoque: 10,
    },
    {
      id: 4,
      nome: "Produto D",
      categoria: "Categoria 1",
      preco: "R$ 40,00",
      estoque: 25,
    },
    {
      id: 5,
      nome: "Produto E",
      categoria: "Categoria 2",
      preco: "R$ 60,00",
      estoque: 18,
    },
    {
      id: 6,
      nome: "Produto F",
      categoria: "Categoria 3",
      preco: "R$ 70,00",
      estoque: 30,
    },
    {
      id: 7,
      nome: "Produto G",
      categoria: "Categoria 1",
      preco: "R$ 55,00",
      estoque: 22,
    },
    {
      id: 8,
      nome: "Produto H",
      categoria: "Categoria 2",
      preco: "R$ 35,00",
      estoque: 12,
    },
    {
      id: 9,
      nome: "Produto I",
      categoria: "Categoria 3",
      preco: "R$ 45,00",
      estoque: 10,
    },
    {
      id: 10,
      nome: "Produto J",
      categoria: "Categoria 1",
      preco: "R$ 50,00",
      estoque: 5,
    },
    {
      id: 11,
      nome: "Produto K",
      categoria: "Categoria 2",
      preco: "R$ 25,00",
      estoque: 20,
    },
    {
      id: 12,
      nome: "Produto L",
      categoria: "Categoria 3",
      preco: "R$ 15,00",
      estoque: 8,
    },
    {
      id: 13,
      nome: "Produto M",
      categoria: "Categoria 1",
      preco: "R$ 40,00",
      estoque: 30,
    },
    {
      id: 14,
      nome: "Produto N",
      categoria: "Categoria 2",
      preco: "R$ 65,00",
      estoque: 18,
    },
    {
      id: 15,
      nome: "Produto O",
      categoria: "Categoria 3",
      preco: "R$ 80,00",
      estoque: 25,
    },
    {
      id: 16,
      nome: "Produto P",
      categoria: "Categoria 1",
      preco: "R$ 45,00",
      estoque: 12,
    },
    {
      id: 17,
      nome: "Produto Q",
      categoria: "Categoria 2",
      preco: "R$ 55,00",
      estoque: 20,
    },
    {
      id: 18,
      nome: "Produto R",
      categoria: "Categoria 3",
      preco: "R$ 50,00",
      estoque: 17,
    },
    {
      id: 19,
      nome: "Produto S",
      categoria: "Categoria 1",
      preco: "R$ 30,00",
      estoque: 10,
    },
    {
      id: 20,
      nome: "Produto T",
      categoria: "Categoria 2",
      preco: "R$ 20,00",
      estoque: 30,
    },
  ]);

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

  const handleRowClick = (id) => {
    const produtoSelecionado = produtos.find((produto) => produto.id === id);

    setSelecionados((prevSelecionados) => {
      let novosSelecionados;

      if (prevSelecionados.some((item) => item.id === id)) {
        // Remove da lista se já estiver selecionado
        novosSelecionados = prevSelecionados.filter((item) => item.id !== id);
      } else {
        // Adiciona à lista se não estiver selecionado
        novosSelecionados = [...prevSelecionados, produtoSelecionado];
      }

      // Atualiza os itens no componente pai (Inicio) de forma assíncrona
      setTimeout(() => {
        selectedItens({
          nome: produtoSelecionado.nome,
          qtd: 1,
          preco: 5,
        });
      }, 0);

      return novosSelecionados;
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
              Estoque Atual
            </th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr
              key={produto.id}
              onClick={() => {
                handleRowClick(produto.id);
              }}
              // className={selecionados[produto.id] ? "selecionado" : ""}
            >
              <td className="checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  // checked={selecionados[produto.id]}
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
