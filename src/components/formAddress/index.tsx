import '../forms-styles.scss'
import { HandleHTTPRequest } from '../../services/handleHTTP';

interface data {
  getResults: Function;
}

const FormAddress = ({ getResults }: data) => {

  const passResults = async (UF: string, cidade: string, rua: string) => {

    const result = await HandleHTTPRequest.getCEP(UF,cidade,rua);

    getResults(result);

    return;
  };



  return (
    <form className="GetForm " onSubmit={async (e) => {
      e.preventDefault();

      const UF = e.target[0].value;
      const cidade = e.target[1].value;
      const rua = e.target[2].value;

      passResults(UF, cidade, rua);
      
    }}
    >
              <label>
                <input
                  type="text"
                  placeholder=""
                  maxLength={2}
                  onChange={(e) => {
                    let currentValue = e.currentTarget.value.toUpperCase();

                    e.currentTarget.value = currentValue;
                  }}
                  required
                />
                <span>UF</span>
              </label>

              <label>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    let currentValue = e.currentTarget.value.toUpperCase();

                    e.currentTarget.value = currentValue;
                  }}
                  required
                />
                <span>Cidade</span>
              </label>

              <label>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    let currentValue = e.currentTarget.value.toUpperCase();

                    e.currentTarget.value = currentValue;
                  }}
                  required
                />
                <span>Rua</span>
              </label>

              <button type="submit">Pesquisar</button>
            </form>
  )
}

export default FormAddress