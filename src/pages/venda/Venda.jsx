import Header from "../../componentes/header/Header";
import HeaderBar from "../../componentes/HeaderBar/HeaderBar";
import SearchBar from "../../componentes/SearchBar/SearchBar";
import Table from "../../componentes/tabelaDeProdutos/TabelaDeProdutos";
import Servico from "../../componentes/servicoPrestado/servicoPrestado";
import Comanda from "./carrinho/Carrinho";
import "./style.css";

export default function Inicio() {
  return (
    <section id="admin-section" className="d-flex">
      <Header />
      <div className="d-flex flex-column w-100 p-3 gap-3">
        <HeaderBar title="Vendas" descricao="Boas vendas!" />
        <SearchBar />
        <div className="d-flex flex-row justify-content-between">
          <div>
            <Table />
            <Servico />
          </div>
          <Comanda
            itens={[
              {
                nome: "produto1",
                preco: 32.86,
                qtd: 3,
              },
              {
                nome: "produto2",
                preco: 3.6,
                qtd: 1,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}