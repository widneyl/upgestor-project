import Header from "../../componentes/header/Header";
import HeaderBar from "../../componentes/HeaderBar/HeaderBar";
import SearchBar from "../../componentes/SearchBar/SearchBar";
import TabelaDeProdutos from "../../componentes/tabelaDeProdutos/TabelaDeProdutos";
import ServicoPrestado from "../../componentes/servicoPrestado/servicoPrestado";
import Comanda from "./carrinho/Carrinho";
import "./style.css";
import { useState } from "react";

export default function Inicio() {
  const [itens, setItens] = useState([]);
  const [visivel, setVisivel] = useState(false);

  // Função para adicionar um item
  const handleAddItem = (newItem) => {
    setItens((prevItens) => {
      // Verifica se o item já está no carrinho
      const itemExistente = prevItens.find((item) => item.id === newItem.id);
      if (itemExistente) {
        // Se o item já existe, aumenta a quantidade no carrinho (se houver estoque)
        return prevItens.map((item) =>
          item.id === newItem.id && item.qtdCarrinho < item.estoque
            ? { ...item, qtdCarrinho: item.qtdCarrinho + 1 }
            : item
        );
      } else {
        // Se o item não existe, adiciona ao carrinho com quantidade 1
        const updatedItens = [...prevItens, { ...newItem, qtdCarrinho: 1 }];
        if (updatedItens.length > 0) {
          setVisivel(true);
        }
        return updatedItens;
      }
    });
  };

  // Função para remover um item
  const handleRemoveItem = (id) => {
    setItens((prevItens) => {
      const updatedItens = prevItens.filter((item) => item.id !== id);
      if (updatedItens.length < 1) {
        setVisivel(false);
      }
      return updatedItens;
    });
  };

  // Função para aumentar a quantidade no carrinho
  const handleIncreaseQtd = (id) => {
    setItens((prevItens) =>
      prevItens.map((item) =>
        item.id === id && item.qtdCarrinho < item.estoque
          ? { ...item, qtdCarrinho: item.qtdCarrinho + 1 }
          : item
      )
    );
  };

  // Função para diminuir a quantidade no carrinho
  const handleDecreaseQtd = (id) => {
    setItens((prevItens) =>
      prevItens.map((item) =>
        item.id === id && item.qtdCarrinho > 1
          ? { ...item, qtdCarrinho: item.qtdCarrinho - 1 }
          : item
      )
    );
  };

  return (
    <section id="admin-section" className="d-flex">
      <Header />
      <div className="d-flex flex-column w-100 p-3 gap-3">
        <HeaderBar title="Vendas" descricao="Boas vendas!" />
        <SearchBar />
        <div className="d-flex flex-row justify-content-between">
          <div>
            <TabelaDeProdutos
              onAddItem={handleAddItem}
              onRemoveItem={handleRemoveItem}
            />
            <ServicoPrestado onAddItem={handleAddItem} />
          </div>
          {visivel && (
            <Comanda
              itens={itens}
              onIncreaseQtd={handleIncreaseQtd}
              onDecreaseQtd={handleDecreaseQtd}
            />
          )}
        </div>
      </div>
    </section>
  );
}