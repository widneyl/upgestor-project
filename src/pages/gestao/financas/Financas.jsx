import { useState } from "react";
import Header from "../../../componentes/header/Header"
import HeaderBar from "../../../componentes/HeaderBar/HeaderBar"
import NavGestao from "../../../componentes/navGestao/NavGestao"
import VendasFinancas from "./vendas/VendasFInancas";

export default function Financas() {

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
                        <HeaderBar title={"Finanças"} />

                        <NavGestao
                            t1={"Vendas"}
                            t2={"Realatórios"}
                            t3={"Balanço de vendas"}
                            onButtonClick={handleButtonClick}
                        />

                        {abaSelecionada === 'Vendas' && <VendasFinancas/>}
                        {abaSelecionada === 'Realatórios' && <p>Realatórios...</p>}
                        {abaSelecionada === 'Balanço de vendas' && <p>Balanço de vendas...</p>}






                    </div>
                </div>
            </section>
        </>

    )
}