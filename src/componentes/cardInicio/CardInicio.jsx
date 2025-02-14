import { Link } from 'react-router-dom';
import './style.css';

export default function CardInicio({ titulo, descricao, urlImg, corCard, corRodape, irPara, show }) {
  return (
    <>
      <Link id='card-ini' style={{ backgroundColor: corCard, textDecoration: 'none' }} to={irPara}>
        <div className='d-flex justify-content-between align-items-center p-3' onClick={show}>
          <div>
            <span className='txt-titulo'>{titulo}</span>
          </div>
          <div>
            <img src={urlImg} width={80} alt="Carrinho de compra" />
          </div>
        </div>

        <div className='card-rodape text-center p-1' style={{ backgroundColor: corRodape }}>
          <span style={{ color: 'white', fontWeight: 300 }}>{descricao}</span>
        </div>
      </Link>
    </>
  );
}