import './style.css';
import loja from '../../img/loja.png'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav id="nav-sec" className="navbar navbar-expand-lg navbar-dark sticky-top pt-4">
        <div id="nav-options" className="container-fluid">


          <li id="logo-item" className="nav-item d-flex align-items-center">
            <img className="rounded-4" src={loja} alt="Logo da Upbusiness" width={60} />
            <div className='d-flex align-self-start'>
              <a className="nav-link text-center ms-3" style={{fontSize: '18px'}} href="#">Upbusiness</a>
            </div>
          </li>


          <div className="collapse navbar-collapse" id="navbarNav" style={{ width: '100%' }}>
            <ul className="navbar-nav flex-column" id="principal-ul">

              <li className="nav-item">
                <Link className='link' to={"/"}>
                  Início
                </Link>
              </li>

              <li className="nav-item">
                <Link className='link' to={"/venda"}>
                  Venda
                </Link>
              </li>

              <li className="nav-item">
                <Link className='link' to={"/gestao"} >
                  Gestão
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}