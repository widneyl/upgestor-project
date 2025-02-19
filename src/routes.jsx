import { BrowserRouter, Route, Routes } from "react-router-dom";
import Venda from './pages/venda/Venda'
import Inicio from "./pages/inicio/Inicio";
import Gestao from './pages/gestao/Gestao'
import Estoque from "./pages/gestao/estoque/Estoque";
import LoginScreen from "./pages/login/LoginScreen";
import Financas from "./pages/gestao/financas/Financas";
import CadastroDeProdutos from "./pages/gestao/estoque/cadastroProdutos/CadastroDeProdutos";


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={<Inicio />}
                />
                <Route path="/venda"
                    element={<Venda />}
                />
                <Route path="/gestao"
                    element={<Gestao />}
                />
                <Route path="/estoque"
                    element={<Estoque />}
                />
                <Route path="/login"
                    element={<LoginScreen/>} 
                />
                <Route path="/financas"
                    element={<Financas/>} 
                />
            </Routes>
        </BrowserRouter>
    );
}