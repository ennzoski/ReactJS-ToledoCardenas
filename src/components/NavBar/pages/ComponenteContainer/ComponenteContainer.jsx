import Item from "../../Item/Item"
import { Titulo } from "../../Titulo/Titulo"

const ComponenteContainer = ({ greeting, children }) => {

    let tituloApp = 'Calcetines Compresivos' 
    const saludo = () => console.log('Hola')
    return (
      <div>
        <Titulo 
            titulo={tituloApp} 
            subTitulo={'Descanso, comodidad y estilo a tus piernas.'} 
          />
          <p>{greeting}</p>
          <Item saludo={ saludo } />
          {/*children*/}
      </div>
    )
  }
  
  export default ComponenteContainer
  