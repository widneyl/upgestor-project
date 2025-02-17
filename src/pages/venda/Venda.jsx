import Header from '../../componentes/header/Header';
import './Venda.css';
import HeaderBar from '../../componentes/HeaderBar/HeaderBar';
import SearchBar from '../../componentes/SearchBar/SearchBar';
import TabelaDeProdutos from '../../componentes/tabelaDeProdutos/TabelaDeProdutos';
import ServicoPrestado from '../../componentes/servicoPrestado/servicoPrestado';

export default function Inicio() {
  return (
    <>
      <section id="admin-section" >
        <Header />
        <div style={{width:'100%'}}>
          <HeaderBar title='Vendas' />
          <SearchBar />
          <TabelaDeProdutos />
          <ServicoPrestado/>
        </div>
      </section>
    </>
  );
}