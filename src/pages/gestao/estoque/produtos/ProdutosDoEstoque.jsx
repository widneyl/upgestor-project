import { useState } from 'react';
import TabelaGestao from '../../componentesGestao/TabelaGestao';
import "./style.css"
import ProdutosRepositorio from '../../../../database/ProdutosRepositorio';

export default function ProdutosDoEstoque() {

    const db = ProdutosRepositorio();

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
        console.log("Entrou na função")

        const produtoAtualizado = {
            "nome": produtoEditado.nome,
            "preco": produtoEditado.preco,
            "categoria": produtoEditado.categoria,
            "quantidade": produtoEditado.quantidade
        }
        // console.log("Produto salvo:", produtoEditado);
        try {
            console.log("Chamando a função de editar");
            db.atualizarProduto(produtoEditado.id, produtoAtualizado)
        }catch{
            console.log("Tentou atualizar no firebase mas não conseguiu")
        }
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
                                                name="quantidade"
                                                value={produtoEditado?.quantidade || ""}
                                                onChange={handleInputChange}
                                            />
                                        </p>
                                    </div>
                                </div>

                                <div className='d-flex gap-3'>
                                    <button className="btn bg-success" style={{ color: 'white' }} onClick={handleSave}>Salvar alterações</button>
                                    <button className="btn bg-danger" style={{ color: 'white' }} onClick={handleSave}>Apagar produto</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
