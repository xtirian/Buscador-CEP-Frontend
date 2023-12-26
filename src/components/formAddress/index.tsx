import React from 'react'
import '../forms-styles.scss'

const FormAddress = () => {
  return (
    <form className="GetForm ">
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