import '../forms-styles.scss'

interface changeForm {
  changeFormFunction: Function;
}

export const FormSelector = ({ changeFormFunction }: changeForm) => {
  return (
    <form className="formSelectionForm">
      <label>
        <input
          type="radio"
          name="formType"
          id=""
          value={"CEP"}
          onClick={(e) => {
            const value = e.currentTarget.value;

            changeFormFunction(value);
          }}
        />{" "}
        CEP
        <span className="checkmark"></span>
      </label>

      <label>
        <input
          type="radio"
          name="formType"
          id=""
          value={"ADDRESS"}
          onClick={(e) => {
            const value = e.currentTarget.value;

            changeFormFunction(value);
          }}
        />{" "}
        Endereço
        <span className="checkmark"></span>
      </label>
    </form>
  );
};
