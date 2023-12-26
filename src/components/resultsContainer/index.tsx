import './style.scss'
import Result from './result.interface'




interface ListResults{
  listOfResults: Result[],
  ShowResults: boolean
}

const ResultCard = ({listOfResults, ShowResults}: ListResults) => {

  const RenderResult = () => {

    console.log(listOfResults)

    return listOfResults.map((result,index) => (
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



  return (
    <section className="results">
          {ShowResults && <div className="number_results">
            <p>{listOfResults.length} resultado(s) encontrado(s)</p>
            </div>}
          {ShowResults && RenderResult()}
        </section>
  )
}

export default ResultCard