import { useState } from 'react';
import Header from '../../../componentes/header/Header'
import HeaderBar from '../../../componentes/HeaderBar/HeaderBar'
import NavGestao from '../../../componentes/navGestao/NavGestao';
import TabelaDeProdutos from '../../../componentes/tabelaDeProdutos/TabelaDeProdutos';

import './style.css';

export default function Estoque() {
    const [abaSelecionada, setAbaSelecionada] = useState('');

    const handleButtonClick = (buttonName) => {
        setAbaSelecionada(buttonName);
    };

    return (
        <>
            <section id="admin-section" className='d-flex'>
                <Header />
                <div id="section-content" className="p-2 d-flex w-100">
                    <div className='container-fluid area-cards d-flex flex-column gap-4'>
                        <HeaderBar title={"Estoque"} />

                        <NavGestao
                            t1={"Produtos"}
                            t2={"Balanço de estoque"}
                            onButtonClick={handleButtonClick}
                        />

                        {abaSelecionada === 'Produtos' && <TabelaDeProdutos />}
                        {abaSelecionada === 'Balanço de estoque' && <p>Balanço de estoque em construção...</p>}
                    </div>
                </div>
            </section>
        </>
    );
}
