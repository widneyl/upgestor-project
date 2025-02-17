import './StyleServicoPrestado.css';
import seta from '../../img/seta_para_baixo.svg';



// Serviço Prestado: onde posso vender um serviço fora de produtos.
export default function servicoPrestado() {
   
    return (
        <div className='servicoPrestado'>
        <div>
          <label>Serviço Prestado</label>
          <input type='text' />
        </div>
        <div>
          <label>Categoria</label>
          <select>
                <option selected>Selecione uma categoria</option>
                <option>Manutenção</option>
                <option>Limpeza</option>
            </select>
        </div>
        <div>
          <label>Preço</label>
          <input type='text' />
        </div>
        <div>
        <button class="btn btn-success">Adicionar</button>
        </div>
      </div>
    );
}