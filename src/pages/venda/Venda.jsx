import Header from "../../componentes/header/Header";
import HeaderBar from "../../componentes/HeaderBar/HeaderBar";
import SearchBar from "../../componentes/SearchBar/SearchBar";
import Table from "../../componentes/tabelaDeProdutos/TabelaDeProdutos";
import "./style.css";

export default function Inicio() {
  return (
    <section id="admin-section" className="d-flex">
      <Header />
      <div className="w-100 p-3">
        <HeaderBar title="Vendas" />
        <SearchBar />
        <Table/>
      </div>
    </section>
  );
}