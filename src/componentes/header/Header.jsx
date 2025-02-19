import './style.css';
import loja from '../../img/loja.png'
import home from "../../img/header/home.png"
import cifrao from "../../img/header/cifrao.png"
import categoria from "../../img/header/category.png"
import ajuda from "../../img/header/ajuda.png"
import sobre from "../../img/header/sobre.png"
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav id="nav-sec" className="navbar navbar-expand-lg navbar-dark sticky-top pt-4">
        <div id="nav-options" className="container-fluid">


          <li id="logo-item" className=" d-flex align-items-center">
            <img className="rounded-4" src={loja} alt="Logo da Upbusiness" width={60} />
            <div className='d-flex align-self-start'>
              <a className="nav-link text-center ms-3" style={{ fontSize: '18px' }} href="#">Upbusiness</a>
            </div>
          </li>


          <div className="collapse navbar-collapse" id="navbarNav" style={{ width: '100%' }}>
            <ul className="navbar-nav flex-column gap-4" id="principal-ul">

              <li className="nav-item">
                <Link className='link d-flex align-items-center' to={"/"} style={{ display: 'block', width: '100%' }}>
                  <img src={home} width={20} style={{ marginRight: '8px' }} />
                  Início
                </Link>
              </li>


              <li className="nav-item">
                <Link className='link d-flex align-items-center' to={"/venda"} style={{ display: 'block', width: '100%' }}>
                  <img src={cifrao} width={20} style={{ marginRight: '8px' }} />
                  Venda
                </Link>
              </li>

              <li className="nav-item">
                <Link className='link d-flex align-items-center' to={"/gestao"} style={{ display: 'block', width: '100%' }}>
                  <img src={categoria} width={20} style={{ marginRight: '8px' }} />
                  Gestão
                </Link>
              </li>

              <li className="nav-item">
                <Link className='link d-flex align-items-center' to={"/gestao"} style={{ display: 'block', width: '100%' }}>
                  <img src={ajuda} width={20} style={{ marginRight: '8px' }} />
                  Ajuda
                </Link>
              </li>

              <li className="nav-item">
                <Link className='link d-flex align-items-center' to={"/gestao"} style={{ display: 'block', width: '100%' }}>
                  <img src={sobre} width={20} style={{ marginRight: '8px' }} />
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}