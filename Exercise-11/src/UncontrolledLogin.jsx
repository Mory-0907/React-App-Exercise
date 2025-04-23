import React from "react";

const UncontrolledLogin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const checkbox = form.elements.checkbox.checked;

    const data = {
      username,
      password,
      checkbox,
    };

    console.log("Dati dal submit (DOM):", data);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome utente: </label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" name="password" />
      </div>
      <div>
        <label>
          <input type="checkbox" name="checkbox" /> Ricorda
        </label>
      </div>
      <div>
        <button type="reset">RESET</button>
        <button type="submit"> ACCEDI</button>
      </div>
    </form>
  );
};

export default UncontrolledLogin;
