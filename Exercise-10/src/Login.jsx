import { useState } from "react";

function Login({onLogin}) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  function handleLogin(event) {
    event.preventDefault();
    onLogin(formData)
  }
  function change(event) {
    setFormData(event.target.value);
  }
  const isDisabled = formData.username === "" || formData.password === "";

  const handleReset = () => {
    setFormData({
      username: "",
      password: "",
      remember: false,
    });
  };
  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        name="username"
        placeholder="Inserisci il tuo nome"
        value={formData.username}
        onChange={change}
      />
      <input
        type="password"
        name="password"
        placeholder="Inserisci la tua password"
        value={formData.password}
        onChange={change}
      />
      <input
        type="checkbox"
        name="remember"
        checked={formData.remember}
        placeholder="Casella di controllo"
        onChange={change}
      />
      <button type="submit" disabled={isDisabled} >
        Login
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default Login;
