import { useState } from "react";
import "./App.scss";
import { FaMapLocationDot } from "react-icons/fa6";

import { FormSelector } from "./components/FormSelector/index";

import FormCep from "./components/formCEP/index";
import FormAddress from "./components/formAddress";

function App() {
  const [formSelect, setFormSelect] = useState("");

  const changeForm = (form: string) => {
    setFormSelect(form);
  };

  return (
    <>
      <aside>
        <header>
          <FaMapLocationDot className="logo" />
          <div>
            <h1>Buscador de CEP</h1>
          </div>
        </header>
      </aside>

      <main>
        <h2>Estou buscando:</h2>
        <FormSelector changeFormFunction={changeForm} />

        {formSelect === "CEP" && <FormCep />}

        {formSelect === "ADDRESS" && <FormAddress />}

        <section className="results"></section>
      </main>
    </>
  );
}

export default App;
