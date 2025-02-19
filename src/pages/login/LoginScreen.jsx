import logo from "../../img/loja.png";

export default function LoginScreen() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-4 vh-100">
      <img src={logo} style={{ width: "250px" }} />
      <span>
        <h1>UpGestor</h1>
      </span>
      <input className="input-bottom-line" type="text" placeholder="Email" />
      <input className="input-bottom-line" type="password" placeholder="Senha" />
      <button className="btn btn-success btn-lg">Iniciar</button>
    </div>
  );
}
