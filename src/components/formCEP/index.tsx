import "../forms-styles.scss";
import { HandleHTTPRequest } from "../../services/handleHTTP";

interface data {
  getResults: Function;
}

const FormCep = ({ getResults }: data) => {
  const cepFormPattern = (value: string) => {
    if (value.length === 8) {
      const valueArr = value.split("");

      valueArr.splice(2, 0, ".");
      valueArr.splice(6, 0, "-");

      valueArr.join("");

      return valueArr.join("");
    }

    return "";
  };

  const passResults = async (cep: string) => {
    const result = await HandleHTTPRequest.getAddress(cep);

    getResults([result]);

    return;
  };

  return (
    <form
      className="GetForm CepForm"
      onSubmit={async (e) => {
        e.preventDefault();

        const cep = e.target[0].value;

        passResults(cep);
      }}
    >
      <label>
        <input
          type="text"
          inputMode="numeric"
          placeholder=""
          maxLength={8}
          minLength={8}
          onChange={(e) => {
            let currentValue = cepFormPattern(e.currentTarget.value);

            if (currentValue.length >= 5) {
              e.currentTarget.value = cepFormPattern(e.currentTarget.value);
            }
          }}
          required
        />
        <span>Insira o CEP</span>
      </label>

      <button type="submit">Pesquisar</button>
    </form>
  );
};

export default FormCep;
