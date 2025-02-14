import CardInicio from '../../componentes/cardInicio/CardInicio';
import Header from '../../componentes/header/Header';
import HeaderBar from '../../componentes/HeaderBar/HeaderBar'

import img1 from '../../img/carrinho-verde.png';
import img2 from '../../img/carrinho-azul.png';
import img3 from '../../img/carrinho-amarelo.png';

import './style.css';
import CardGrafico from '../../componentes/cardGrafico/CardGrafico';

export default function Inicio() {
  return (
    <>
      <section id="admin-section" className='d-flex'>

        <Header />

        <div id="section-content" className="p-2 d-flex w-100">


          <div className='container-fluid area-cards'>

            <HeaderBar title={"Inicio"} />

            <div className='lista-card d-flex gap-5 p-3'>
              <CardInicio
                titulo={"Venda"}
                descricao={"Iniciar uma nova venda"}
                urlImg={img1}
                corCard={"#00a65a"}
                corRodape={"#038d4e"}
                irPara={"/venda"} // exemplo de navegação
              />
              <CardInicio
                titulo={"Gestão"}
                descricao={"Ir para gestão"}
                urlImg={img2}
                corCard={"#005aa6"}
                corRodape={"#00447d"}
                irPara={"/gestao"} // exemplo de navegação
              />
              <CardInicio
                titulo={"Ajustes"}
                descricao={"Ir para ajustes"}
                urlImg={img3}
                corCard={"#a2a205"}
                corRodape={"#848400"}
                irPara={"/ajustes"} // exemplo de navegação
              />
            </div>

            <div className='lista-graf d-flex p-3 gap-5 '>
              <CardGrafico />
              <CardGrafico />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}