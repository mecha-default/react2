import "../Styles/Main.css";
import Card from "./Card";

const Main =()=>{

    return (

        <main>
        <h1>Bienvenidas a React</h1>
        <div className="tarjetas">
        <Card 
        nombre="Rita" 
        imagen='http://placekitten.com/200/200' 
        numero={5} 
        array={[1,2,3]}
        />

        <Card 
        nombre = "Trufa"
        imagen= "https://sumedico.blob.core.windows.net/images/2020/03/17/cuidadosgatobebe_2-focus-min0.07-0.45-640-384.jpg"
        />
        
        <Card 
        nombre ="Misha"
        imagen="https://hips.hearstapps.com/es.h-cdn.co/mcres/images/mi-casa/terraza-jardines-porche/cuidados-gatos-lactantes/1471229-1-esl-ES/me-he-encontrado-un-gatito-que-hago.jpg?resize=480:*"
        />

        </div>
        </main>
    )

}

export default Main;
