import { useState } from 'react';
import TabelaGestao from '../../componentesGestao/TabelaGestao';
import "./style.css"

export default function ProdutosDoEstoque() {
    const [itemClicado, setItemClicado] = useState(null);
    const [produtoEditado, setProdutoEditado] = useState(null);

    const handleItemClick = (produto) => {
        console.log("Item clicado:", produto);
        setItemClicado(produto);
        setProdutoEditado(produto); // Preenche os campos para edição
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProdutoEditado(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        console.log("Produto salvo:", produtoEditado);
        // Aqui você pode fazer a atualização do produto no backend ou estado global
        setItemClicado(produtoEditado);
    };

    return (
        <>
            <section id="admin-section" className='d-flex'>

                <div id="section-content" className="p-2 d-flex w-100">
                    <div className='container-fluid area-cards d-flex flex-column gap-4'>
                        <TabelaGestao onItemClick={handleItemClick} />

                        {itemClicado && (
                            <div className="text-start">
                                <p>Produto selecionado:</p>
                                <div className="row align-items-start">
                                    <div className="col" id="campo">
                                        <p>Nome:
                                            <input
                                                type="text"
                                                name="nome"
                                                value={produtoEditado?.nome || ""}
                                                onChange={handleInputChange}
                                            />
                                        </p>
                                    </div>
                                    <div className="col" id="campo">
                                        <p>Preço:
                                            <input
                                                type="number"
                                                name="preco"
                                                value={produtoEditado?.preco || ""}
                                                onChange={handleInputChange}
                                            />
                                        </p>
                                    </div>
                                    <div className="col" id="campo">
                                        <p>Estoque:
                                            <input
                                                type="number"
                                                name="estoque"
                                                value={produtoEditado?.quantidade || ""}
                                                onChange={handleInputChange}
                                            />
                                        </p>
                                    </div>
                                </div>

                                <button id='buttonTable' onClick={handleSave}>Salvar alterações</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
