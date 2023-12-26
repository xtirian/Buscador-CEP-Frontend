import { useState } from "react";
import "./App.scss";

import { FormSelector } from "./components/FormSelector/index";

import FormCep from "./components/formCEP/index";
import FormAddress from "./components/formAddress";
import Header from "./components/header";
import ResultCard from "./components/resultsContainer";
import Result from "./components/resultsContainer/result.interface";

function App() {
  const [formSelect, setFormSelect] = useState("");

  const changeForm = (form: string) => {
    setFormSelect(form);
    setShowResult(false)
  };

  const [searchResult, setSearchResult] = useState<Result[]>([]);

  const [showResult, setShowResult] = useState(false)

  const addResult = (info: Result[]) => {
    setSearchResult(info);
    setShowResult(true)
  };

  return (
    <>
      <Header />
      <main>
        <h2>Estou buscando:</h2>
        <FormSelector changeFormFunction={changeForm} />

        {formSelect === "CEP" && <FormCep getResults={addResult} />}

        {formSelect === "ADDRESS" && <FormAddress getResults={addResult} />}

        <ResultCard listOfResults={searchResult} ShowResults={showResult} />
      </main>
    </>
  );
}

export default App;
