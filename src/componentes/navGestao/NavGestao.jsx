import { useState } from 'react';
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
                <button className="text-header" onClick={() => onButtonClick(t1)}>{t1}</button>
                <button className="text-header" onClick={() => onButtonClick(t2)}>{t2}</button>
                <button className="text-header" onClick={() => onButtonClick(t3)}>{t3}</button>
            </div>


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
