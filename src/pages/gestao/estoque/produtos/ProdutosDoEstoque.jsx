import { useState } from 'react';
import TabelaGestao from '../../componentesGestao/TabelaGestao';



export default function ProdutosDoEstoque() {

    const [itemClicado, setItemClicado] = useState(null);

    const handleItemClick = (produto) => {
        console.log("Item clicado:", produto);
        setItemClicado(produto);
    };

    return (
        <>
            <section id="admin-section" className='d-flex'>
         
                <div id="section-content" className="p-2 d-flex w-100">
                    <div className='container-fluid area-cards d-flex flex-column gap-4'>
                        
                        {abaSelecionada === 'Produtos' && <TabelaGestao onItemClick={handleItemClick} />}
                        

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