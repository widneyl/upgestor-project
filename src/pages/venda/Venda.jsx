import Header from '../../componentes/header/Header';
import HeaderBar from '../../componentes/HeaderBar/HeaderBar';
import SearchBar from '../../componentes/SearchBar/SearchBar';

export default function Inicio() {
  return (
    <>
      <section id="admin-section" className="d-flex flex-row">
        <Header />
        <div className="w-100 p-3">
          <HeaderBar title='Vendas' />
          <SearchBar />
        </div>
      </section>
    </>
  );
}