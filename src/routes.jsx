import { BrowserRouter, Route, Routes } from "react-router-dom";
import Venda from './pages/venda/Venda'


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={<Venda />}
                />
            </Routes>

            
        </BrowserRouter>
    );
}