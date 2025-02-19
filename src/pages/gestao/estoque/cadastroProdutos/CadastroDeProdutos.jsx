import { useState } from 'react';
// import { collection, addDoc } from 'firebase/firestore';
// import db from '../firebase';  // Ajuste o caminho conforme sua estrutura de pastas
import './style.css';
import ProdutosRepositorio from '../../../../database/ProdutosRepositorio';

export default function CadastroDeProdutos() {

    const db = ProdutosRepositorio();

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [dataCadastro, setDataCadastro] = useState('');
    const [categoria, setCategoria] = useState('');
    const [quantidade, setquantidade] = useState('');
    const [erros, setErros] = useState({});
    const [carregando, setCarregando] = useState(false);

    const formatarNome = (valor) => {
        return valor.replace(/\b\w/g, (letra) => letra.toUpperCase());
    };

    const validarFormulario = () => {
        const novosErros = {};

        if (!nome) novosErros.nome = 'Nome do produto é obrigatório.';
        if (!preco || isNaN(preco) || Number(preco) <= 0) novosErros.preco = 'Preço deve ser um número positivo.';
        if (!dataCadastro) novosErros.dataCadastro = 'Data de cadastro é obrigatória.';
        if (!categoria) novosErros.categoria = 'Categoria é obrigatória.';
        if (!quantidade || isNaN(quantidade) || Number(quantidade) < 0) novosErros.quantidade = 'A quandidade deve ser um número positivo.';

        setErros(novosErros);

        return Object.keys(novosErros).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validarFormulario()) {
            setCarregando(true);

            const produto = {
                nome,
                preco: Number(preco),
                categoria,
                quantidade: Number(quantidade)
            };

            try {

                console.log('Chamando o metodo de cadastro!');
                db.cadastrarProduto(produto)
                console.log('Produto cadastrado com sucesso!');
                alert('Produto cadastrado com sucesso!');

              
                setNome('');
                setPreco('');
                setDataCadastro('');
                setCategoria('');
                setquantidade('');
            } catch (error) {
                console.error('Erro ao cadastrar produto: ', error);
                alert('Erro ao cadastrar produto. Tente novamente.');
            }

            setCarregando(false);
        }
    };

    return (
        <>
            <section id="admin-section" className='d-flex'>
                <div>
                    <form className='d-flex gap-5' onSubmit={handleSubmit}>
                        <div>
                            <div className="mb-3">
                                <label htmlFor="nome" className="form-label">Nome do produto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    value={nome}
                                    onChange={(e) => setNome(formatarNome(e.target.value))}
                                />
                                {erros.nome && <div className="text-danger">{erros.nome}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="preco" className="form-label">Preço R$</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="preco"
                                    value={preco}
                                    onChange={(e) => setPreco(e.target.value)}
                                />
                                {erros.preco && <div className="text-danger">{erros.preco}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dataCadastro" className="form-label">Data de cadastro</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dataCadastro"
                                    value={dataCadastro}
                                    onChange={(e) => setDataCadastro(e.target.value)}
                                />
                                {erros.dataCadastro && <div className="text-danger">{erros.dataCadastro}</div>}
                            </div>
                            <button type="submit" className="btn bg-success" style={{color: 'white'}} disabled={carregando}>
                                {carregando ? 'Cadastrando...' : 'Cadastrar'}
                            </button>
                        </div>

                        <div>
                            <div className="mb-3">
                                <label htmlFor="categoria" className="form-label">Categoria</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="categoria"
                                    value={categoria}
                                    onChange={(e) => setCategoria(formatarNome(e.target.value))}
                                />
                                {erros.categoria && <div className="text-danger">{erros.categoria}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="quantidade" className="form-label">Quantidade atual</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="quantidade"
                                    value={quantidade}
                                    onChange={(e) => setquantidade(e.target.value)}
                                />
                                {erros.quantidade && <div className="text-danger">{erros.quantidade}</div>}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
