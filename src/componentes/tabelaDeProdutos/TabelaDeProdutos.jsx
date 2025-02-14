import React, { useState } from 'react';
import './Style.css';

const produtos = [
    { id: 1, nome: 'Produto A', categoria: 'Categoria 1', preco: 'R$ 50,00', estoque: 20 },
    { id: 2, nome: 'Produto B', categoria: 'Categoria 2', preco: 'R$ 30,00', estoque: 15 },
    { id: 3, nome: 'Produto C', categoria: 'Categoria 3', preco: 'R$ 20,00', estoque: 10 },
    { id: 4, nome: 'Produto D', categoria: 'Categoria 1', preco: 'R$ 40,00', estoque: 25 },
    { id: 5, nome: 'Produto E', categoria: 'Categoria 2', preco: 'R$ 60,00', estoque: 18 },
    { id: 6, nome: 'Produto F', categoria: 'Categoria 3', preco: 'R$ 70,00', estoque: 30 },
    { id: 7, nome: 'Produto G', categoria: 'Categoria 1', preco: 'R$ 55,00', estoque: 22 },
    { id: 8, nome: 'Produto H', categoria: 'Categoria 2', preco: 'R$ 35,00', estoque: 12 },
    { id: 9, nome: 'Produto I', categoria: 'Categoria 3', preco: 'R$ 45,00', estoque: 10 },
    { id: 10, nome: 'Produto J', categoria: 'Categoria 1', preco: 'R$ 50,00', estoque: 5 },
    { id: 11, nome: 'Produto K', categoria: 'Categoria 2', preco: 'R$ 25,00', estoque: 20 },
    { id: 12, nome: 'Produto L', categoria: 'Categoria 3', preco: 'R$ 15,00', estoque: 8 },
    { id: 13, nome: 'Produto M', categoria: 'Categoria 1', preco: 'R$ 40,00', estoque: 30 },
    { id: 14, nome: 'Produto N', categoria: 'Categoria 2', preco: 'R$ 65,00', estoque: 18 },
    { id: 15, nome: 'Produto O', categoria: 'Categoria 3', preco: 'R$ 80,00', estoque: 25 },
    { id: 16, nome: 'Produto P', categoria: 'Categoria 1', preco: 'R$ 45,00', estoque: 12 },
    { id: 17, nome: 'Produto Q', categoria: 'Categoria 2', preco: 'R$ 55,00', estoque: 20 },
    { id: 18, nome: 'Produto R', categoria: 'Categoria 3', preco: 'R$ 50,00', estoque: 17 },
    { id: 19, nome: 'Produto S', categoria: 'Categoria 1', preco: 'R$ 30,00', estoque: 10 },
    { id: 20, nome: 'Produto T', categoria: 'Categoria 2', preco: 'R$ 20,00', estoque: 30 },
];

export default function TabelaDeProdutos() {
    const [selecionados, setSelecionados] = useState({});

    const handleRowClick = (id) => {
        setSelecionados((prevSelecionados) => ({
            ...prevSelecionados,
            [id]: !prevSelecionados[id], // Alterna o estado do checkbox
        }));
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
                            onClick={() => handleRowClick(produto.id)} // Chama a função ao clicar na linha
                            className={selecionados[produto.id] ? 'selecionado' : ''}
                        >
                            <td>{produto.nome}</td>
                            <td>{produto.categoria}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.estoque}</td>
                            <td className="checkbox">
                                <input type="checkbox" checked={selecionados[produto.id]} readOnly />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

