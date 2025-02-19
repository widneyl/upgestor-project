import React from 'react';
import "./style.css"

const vendas = [
    { qtdProdutos: 3, horario: '10:30', pagamento: 'Cartão', total: 'R$ 150,00' },
    { qtdProdutos: 1, horario: '11:45', pagamento: 'Dinheiro', total: 'R$ 50,00' },
    { qtdProdutos: 2, horario: '14:20', pagamento: 'Pix', total: 'R$ 80,00' },
    { qtdProdutos: 4, horario: '16:00', pagamento: 'Cartão', total: 'R$ 200,00' }
];

export default function VendasFinancas() {
    return (
        <div className="tabela-container">

            <p>Vendas realizadas</p>

            <table className="tabela-vendas">
                <thead>
                    <tr>
                        <th>Qtd. Produtos</th>
                        <th>Horário</th>
                        <th>Pagamento</th>
                        <th>Total da Venda</th>
                    </tr>
                </thead>
                <tbody>
                    {vendas.map((venda, index) => (
                        <tr key={index}>
                            <td>{venda.qtdProdutos}</td>
                            <td>{venda.horario}</td>
                            <td>{venda.pagamento}</td>
                            <td>{venda.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const style = document.createElement('style');
style.textContent = `
  .tabela-container {
    padding: 20px;
    overflow-x: auto;
  }
  .tabela-vendas {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }
  .tabela-vendas th, .tabela-vendas td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  .tabela-vendas th {
    background-color: #f4f4f9;
    font-weight: bold;
  }
  @media (max-width: 600px) {
    .tabela-vendas th, .tabela-vendas td {
      display: block;
      width: 100%;
    }
    .tabela-vendas tr {
      margin-bottom: 10px;
      border: 1px solid #ccc;
    }
  }
`;
