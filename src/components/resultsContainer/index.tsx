import "./style.scss";
import Result from "./result.interface";

interface ListResults {
  listOfResults: Result[];
  ShowResults: boolean;
}

const ResultCard = ({ listOfResults, ShowResults }: ListResults) => {
  const RenderResult = () => {
    if (listOfResults[0].erro === true) {
      return (
        <div className="error_container">
          <h3>Alguma coisa deu errada</h3>
          <p>Você fez algo que eu não fui capaz de prever</p>
          <p>Ou que eu não quis resolver de antemão</p>
          <p>Por isso, tome aqui este <span>meme</span> como prêmio de consolação</p>
          <img src="/meme.png" alt="meme" />
        </div>
      );
    } else {
      return listOfResults.map((result, index) => (
        <div key={index} className="address_container">
          <p>
            <span>CEP: </span> {result.cep}
          </p>
          <p>
            <span>Logradouro: </span> {result.logradouro}
          </p>
          <p>
            <span>Bairro: </span> {result.bairro}
          </p>
          <p>
            <span>Localidade: </span> {result.localidade}
          </p>
          <p>
            <span>UF: </span> {result.uf}
          </p>
          <p>
            <span>DDD: </span> {result.ddd}
          </p>
        </div>
      ));
    }
  };

  return (
    <section className="results">
      {ShowResults && (
        <div className="number_results">
          <p>{listOfResults.length} resultado(s) encontrado(s)</p>
        </div>
      )}
      {ShowResults && RenderResult()}
    </section>
  );
};

export default ResultCard;
