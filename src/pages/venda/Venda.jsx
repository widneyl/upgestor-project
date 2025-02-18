import Header from "../../componentes/header/Header";
import HeaderBar from "../../componentes/HeaderBar/HeaderBar";
import SearchBar from "../../componentes/SearchBar/SearchBar";
import Table from "../../componentes/tabelaDeProdutos/TabelaDeProdutos";
import Servico from "../../componentes/servicoPrestado/servicoPrestado";
import "./style.css";

export default function Inicio() {

  const [selecionados, setSelecionados] = useState([]);
  useEffect(() => {
    console.log("Itens selecionados:", selecionados);
  }, [selecionados]);


  return (
    <section id="admin-section" className="d-flex">
      <Header />
      <div className="d-flex flex-column w-100 p-3 gap-3">
        <HeaderBar title="Vendas" />
        <SearchBar />
        <Table />
        <Servico />
      </div>
    </section>
  );
}