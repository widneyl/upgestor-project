import './style.css';
import loja from '../../img/loja.png'

export default function Header() {
  return (
    <>
      <nav id="nav-sec" className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div id="nav-options" className="container-fluid">
         

          <li id="logo-item" className="nav-item d-flex flex-row align-items-center justify-content-start">
            <img className="nav-link text-center rounded-4" src={loja} alt="" width={60} />
            <a className="nav-link text-center" href="">Upbusiness</a>
          </li>

          <div className="collapse navbar-collapse" id="navbarNav" style={{width: '100%'}}>
            <ul className="navbar-nav flex-column" id="principal-ul">

              <li className="nav-item">
                <p>
                  Início
                </p>
              </li>

              <li className="nav-item">
                <p>
                  Venda
                </p>
              </li>

              <li className="nav-item">
                <p>
                  Gestão
                </p>
              </li>              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}