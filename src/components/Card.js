import "../Styles/Card.css"

const Card = (props) => {

    console.log (props)
console.log(props.nombre)


    //Los parámetros de un componente en REACT se llaman "PROPS"
    //Los parametros van a ser objetos 

    return(
        <article className="card">

        <h2> {props.nombre} </h2>
        <img src={props.imagen}/>

        </article>
    )
}
export default Card;

