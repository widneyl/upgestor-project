import './HeaderBar.css';
import userimg from '../../img/user.png';
import seta from '../../img/seta_para_baixo.svg';

// barra de cabeçalho com titulo e botao para o usuario
export default function HeaderBar({ title }) {
    return <div className='row-flex HeaderBar'>
        <h1 style={{fontSize: '30px'}}>{title}</h1>
        <div className='row-flex'>
            <img src={userimg} alt="" />
            <p>Usuario</p>
            <img src={seta} className="seta"/>
        </div>
    </div>
}