import { useState } from 'react';
import box from "../../img/box.png"
import add from "../../img/add.png"
import graphic from "../../img/graphic.png"
import './style.css';

export default function NavGestao({ t1, t2, t3, t4, t5, filtros, onButtonClick }) {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <nav className="nav-container">
            <div className="menu-hamburguer" onClick={toggleMenu}>
                <span className="linha"></span>
                <span className="linha"></span>
                <span className="linha"></span>
            </div>

            <div className={`menu-itens ${menuAberto ? 'aberto' : ''}`}>

                <button id="text-header" className="bg-secondary" onClick={() => onButtonClick(t1)}>
                    <img src={box} width={18} style={{ marginRight: 8 }} />
                    {t1}
                </button>
                <button id="text-header" className="bg-secondary" onClick={() => onButtonClick(t2)}>
                    <img src={add} width={18} style={{ marginRight: 8 }} />
                    {t2}
                </button>
                <button id="text-header" className="bg-secondary" onClick={() => onButtonClick(t3)}>
                    <img src={graphic} width={18} style={{ marginRight: 8 }} />
                    {t3}
                </button>
            </div>
            <hr style={{ padding: 0, margin: 0 }} />


            {filtros && (
                <div className="row">
                    <div className="row-inner-compact">
                        <div className="sub-row-compact">
                            <p className="text">Vendas</p>
                            <select className="select"
                                onChange={(e) => localStorage.setItem('periodo', e.target.value)}
                            >
                                <option value={"DIA"}>Dia</option>
                                <option value={"SEMANA"}>Semana</option>
                                <option value={"MES"}>Mês</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
