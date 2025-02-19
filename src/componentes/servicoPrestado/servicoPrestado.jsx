import "./StyleServicoPrestado.css";

// Serviço Prestado: onde posso vender um serviço fora de produtos.
export default function ServicoPrestado() {
  return (
    <div className="servicoPrestado mt-5">

      <form>
        <div class="mb-3 d-flex align-items-end gap-3">
          <div class="w-25">
            <label class="form-label" style={{fontWeight: 'bold', color: '#545454'}}>Serviço prestado</label>
            <input type="text" class="form-control" placeholder="Descrição do serviço" />
          </div>
          <div>
            <label class="form-label" style={{fontWeight: 'bold', color: '#545454'}}>Valor</label>
            <input type="number" class="form-control" placeholder="R$" />
          </div>
          <div>
            <button type="submit" class="btn bg-success text-white align-self-end">Adicionar</button>
          </div>
        </div>
      </form>

    </div>
  );
}
