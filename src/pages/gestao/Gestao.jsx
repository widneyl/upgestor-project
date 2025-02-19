import CardInicio from "../../componentes/cardInicio/CardInicio";
import Header from "../../componentes/header/Header";
import HeaderBar from "../../componentes/HeaderBar/HeaderBar";
import Chart from "../../componentes/graficos/FinancasGraficos/Chart";

import img1 from "../../img/carrinho-verde.png";
import img2 from "../../img/carrinho-azul.png";
import img3 from "../../img/carrinho-amarelo.png";

import "./style.css";
import { useState } from "react";
import QuantidadePorCategoria from "../../componentes/graficos/FinancasGraficos/QuantidadePorCategoria";

export default function Inicio() {
  const [exibicaoPadrao, setExibicaoPadrao] = useState(true);

  return (
    <>
      <section id="admin-section" className="d-flex">
        <Header />

        <div id="section-content" className="p-2 d-flex w-100">
          <div className="container-fluid area-cards">
            <HeaderBar title={"Gestão"} />

            <div className="lista-card d-flex gap-5 p-3">
              <CardInicio
                titulo={"Finanças"}
                descricao={"Veja como vão suas finanças"}
                urlImg={img1}
                corCard={"#00a65a"}
                corRodape={"#038d4e"}
                irPara={"/financas"} // exemplo de navegação
              />
              <CardInicio
                titulo={"Estoque"}
                descricao={"Veja a situação atual do seu estoque"}
                urlImg={img2}
                corCard={"#005aa6"}
                corRodape={"#00447d"}
                irPara={"/estoque"} // exemplo de navegação
              />
              <CardInicio
                titulo={"Exemplo"}
                descricao={"exemplo"}
                urlImg={img3}
                corCard={"#a2a205"}
                corRodape={"#848400"}
                // irPara={"/ajustes"} // exemplo de navegação
              />
            </div>

            {exibicaoPadrao ? (
              <div className="lista-graf p-3 gap-5">
                <Chart />
                <Chart />
                <QuantidadePorCategoria />
              </div>
            ) : (
              <p>Ola</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
