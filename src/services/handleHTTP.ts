import axios from "axios";

export class HandleHTTPRequest {
  static async getAddress(cep: string) {
    const cepConfig = cep.replace(".", "").replace("-", "");

    console.log(cepConfig);

    const { data } = await axios.post(
      "https://backend-cep-buscador.onrender.com/api/v1/address",
      {
        cep: cepConfig,
      }
    );
    return data;
  }

  static async getCEP(UF: string, cidade: string, rua: string) {    

    const { data } = await axios.post(
      "https://backend-cep-buscador.onrender.com/api/v1/cep",
      {
        address: {
          state: UF,
          city: cidade,
          street: rua,
        },
      }
    );
    return data;
  }
}
