import axios from "axios";

export class HandleHTTPRequest {
  static async getAddress(cep: string) {
    const cepConfig = cep.replace(".", "").replace("-", "");

    try {
      const { data } = await axios.post(
        "https://backend-cep-buscador.onrender.com/api/v1/address",
        {
          cep: cepConfig,
        }
      );
      return data;
    } catch (err: any) {
      console.error(err.response.status);

      return [
        {
          message:
            "Something went wrong. Please, check the information and try again.",
        },
      ];
    }
  }

  static async getCEP(UF: string, cidade: string, rua: string) {
    try {
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
    } catch (err: any) {
      console.error(err.response.status);

      return [
        {
          message:
            "Something went wrong. Please, check the information and try again.",
        },
      ];
    }
  }
}
