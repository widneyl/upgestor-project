import { useState } from 'react';
// import { collection, addDoc } from 'firebase/firestore';
// import db from '../firebase';  // Ajuste o caminho conforme sua estrutura de pastas
import './style.css';

export default function CadastroDeProdutos() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [dataCadastro, setDataCadastro] = useState('');
    const [categoria, setCategoria] = useState('');
    const [estoque, setEstoque] = useState('');
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
        if (!estoque || isNaN(estoque) || Number(estoque) < 0) novosErros.estoque = 'Estoque deve ser um número positivo.';

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
                dataCadastro,
                categoria,
                estoque: Number(estoque)
            };

            try {
                await addDoc(collection(db, 'produtos'), produto);
                alert('Produto cadastrado com sucesso!');

              
                setNome('');
                setPreco('');
                setDataCadastro('');
                setCategoria('');
                setEstoque('');
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
                            <button type="submit" className="btn btn-primary" disabled={carregando}>
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
                                <label htmlFor="estoque" className="form-label">Estoque atual</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="estoque"
                                    value={estoque}
                                    onChange={(e) => setEstoque(e.target.value)}
                                />
                                {erros.estoque && <div className="text-danger">{erros.estoque}</div>}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
