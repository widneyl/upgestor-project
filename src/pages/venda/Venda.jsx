import Header from "../../componentes/header/Header";
import HeaderBar from "../../componentes/HeaderBar/HeaderBar";
import SearchBar from "../../componentes/SearchBar/SearchBar";
import Table from "../../componentes/tabelaDeProdutos/TabelaDeProdutos";
import Servico from "../../componentes/servicoPrestado/servicoPrestado";
import Comanda from "./carrinho/Carrinho";
import "./style.css";
import { useState } from "react";

export default function Inicio() {
  const [itens, setItens] = useState([]);
  const [visivel, setVisivel] = useState(false);

  const handleAddItem = (newItem) => {
    setItens((prevItens) => {
      const updatedItens = [...prevItens];
      updatedItens.push(newItem);
      setVisivel(updatedItens.length > 0);
      return updatedItens;
    });
  };

  return (
    <section id="admin-section" className="d-flex">
      <Header />
      <div className="d-flex flex-column w-100 p-3 gap-3">
        <HeaderBar title="Vendas" descricao="Boas vendas!" />
        <SearchBar />
        <div className="d-flex flex-row justify-content-between">
          <div>
            <Table selectedItens={handleAddItem} />
            <Servico selectedItens={handleAddItem} />
          </div>
          {visivel && <Comanda itens={itens} />}
        </div>
      </div>
    </section>
  );
}
