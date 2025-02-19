import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../database/firebase/firebase";

export default function GraficoPizza() {
    const [categorias, setCategorias] = useState([]);
    const [quantidades, setQuantidades] = useState([]);

    // useEffect(() => {
    //     async function carregarDados() {
    //         try {
    //             const querySnapshot = await getDocs(collection(database, "produtos"));
    //             const dados = {};

    //             querySnapshot.forEach((doc) => {
    //                 console.log("carregando produtos do grafico")
    //                 const { categoria } = doc.data();

    //                 if (categoria) {
    //                     if (dados[categoria]) {
    //                         dados[categoria] += 1; // Apenas conta a quantidade de produtos
    //                     } else {
    //                         dados[categoria] = 1;
    //                     }
    //                 }
    //             });

    //             setCategorias(Object.keys(dados));
    //             setQuantidades(Object.values(dados));
    //         } catch (error) {
    //             console.error("Erro ao buscar dados:", error);
    //         }
    //     }

    //     carregarDados();
    // }, []);

    // Verifica se os dados foram carregados antes de renderizar
    if (quantidades.length === 0) {
        return <p>Carregando gráfico...</p>;
    }

    return (
        <div>
            <p>Quantidade de Produtos por Categoria</p>
            <Chart
                options={{ labels: categorias }}
                series={quantidades}
                type="pie"
                width={400}
            />
        </div>
    );
}
