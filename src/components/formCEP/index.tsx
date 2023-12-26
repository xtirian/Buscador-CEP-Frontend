import React from "react";
import "../forms-styles.scss";

const FormCep = () => {
  
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

  return (
    <form action="" className="GetForm CepForm">
      <label>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder=""
          maxLength={8}
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
    </form>
  );
};

export default FormCep;
