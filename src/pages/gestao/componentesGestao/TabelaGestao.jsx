import { useState, useEffect } from "react";
import ProdutosRepositorio from "../../../database/ProdutosRepositorio.js";

export default function TabelaGestao({ onItemClick }) {
    const [selecionado, setSelecionado] = useState(null);
    const [produtos, setProdutos] = useState([]);

    const db = ProdutosRepositorio();

    // Função para recuperar os produtos
    const recuperarProdutos = async () => {
        const produtosList = await db.recuperarProdutosLimitadosParaTabela();
        const produtosArray = Array.from(produtosList, ([id, data]) => ({ id, ...data }));
        setProdutos(produtosArray);
    };

    useEffect(() => {
        recuperarProdutos();
    }, []);

    const handleRowClick = (id) => {
        setSelecionado((prevSelecionado) => (prevSelecionado === id ? null : id));
        onItemClick(produtos.find(p => p.id === id));
    };

    return (
        <div className="table-container">
            <table className="table-produtos">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                        <th>Estoque Atual</th>
                        <th>Selecionar</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr
                            key={produto.id}
                            onClick={() => handleRowClick(produto.id)}
                            className={selecionado === produto.id ? "selecionado" : ""}
                        >
                            <td>{produto.nome}</td>
                            <td>{produto.categoria}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.quantidade}</td>
                            <td className="checkbox">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={selecionado === produto.id}
                                    readOnly
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
