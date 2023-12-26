import { useEffect, useState } from "react";
import "./App.scss";

import { FormSelector } from "./components/FormSelector/index";

import FormCep from "./components/formCEP/index";
import FormAddress from "./components/formAddress";
import Header from "./components/header";

interface Result {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}

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

  const RenderResult = () => {

    console.log(searchResult)

    return searchResult.map((result,index) => (
      <div key={index} className="address_container">
      <p><span>CEP: </span> {result.cep}</p>     
      <p><span>Logradouro: </span> {result.logradouro}</p>
      <p><span>Bairro: </span> {result.bairro}</p>
      <p><span>Localidade: </span> {result.localidade}</p>
      <p><span>UF: </span> {result.uf}</p>
      <p><span>DDD: </span> {result.ddd}</p>      
    </div>
    ) )
  }

  useEffect(() => {
    console.log(searchResult)  
    
  }, [searchResult])
  

  return (
    <>
      <Header />
      <main>
        <h2>Estou buscando:</h2>
        <FormSelector changeFormFunction={changeForm} />

        {formSelect === "CEP" && <FormCep getResults={addResult} />}

        {formSelect === "ADDRESS" && <FormAddress getResults={addResult} />}

        <section className="results">
          {showResult && <div className="number_results">
            <p>{searchResult.length} resultados encontrados</p>
            </div>}
          {showResult && RenderResult()}
        </section>
      </main>
    </>
  );
}

export default App;
