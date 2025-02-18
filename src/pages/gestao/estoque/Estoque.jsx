import { useState } from 'react';
import Header from '../../../componentes/header/Header'
import HeaderBar from '../../../componentes/HeaderBar/HeaderBar'
import NavGestao from '../../../componentes/navGestao/NavGestao';

import './style.css';
import CadastroDeProdutos from './cadastroProdutos/CadastroDeProdutos';
import ProdutosDoEstoque from './produtos/ProdutosDoEstoque';

export default function Estoque() {

    const [itemClicado, setItemClicado] = useState(null);

    const handleItemClick = (produto) => {
        console.log("Item clicado:", produto);
        setItemClicado(produto);
    };

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
                            t2={"Cadastro de produtos"}
                            t3={"Balanço de estoque"}
                            onButtonClick={handleButtonClick}
                        />

                        {abaSelecionada === 'Produtos' && <ProdutosDoEstoque/>}
                        {abaSelecionada === 'Balanço de estoque' && <p>Balanço de estoque em construção...</p>}
                        {abaSelecionada === 'Cadastro de produtos' && <CadastroDeProdutos />}

                        {itemClicado && (
                            <div className="detalhes-item">
                                <h2>Detalhes do Item Clicado:</h2>
                                <p><strong>Nome:</strong> {itemClicado.nome || ""}</p>
                                <p><strong>Categoria:</strong> {itemClicado.categoria || ""}</p>
                                <p><strong>Preço:</strong> {itemClicado.preco || ""}</p>
                                <p><strong>Estoque:</strong> {itemClicado.estoque || ""}</p>
                            </div>
                        )}




                    </div>
                </div>
            </section>
        </>
    );
}