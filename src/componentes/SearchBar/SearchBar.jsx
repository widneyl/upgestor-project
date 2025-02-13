import seta from '../../img/seta_para_baixo.svg';
import './SearchBar.css';

// barra para pesquisar itens
export default function SearchBar() {
    return <div className='SearchBar'>
        <input type="text" placeholder="Pesquisar"/>
        <div className="categoria">
            <p>Categoria</p>
            <img src={seta} className="seta"/>
        </div>
    </div>
}