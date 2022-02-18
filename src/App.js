
import './App.css';
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";




const App = () => {
  return (
    <div className="container">
     
      <h1>Hola mundo!</h1>
      <Nav />
      <Main />
      
      <Button mensaje="Hola" color="rojo"/>
      <Button mensaje="Chau" color ="verde"/>
      <Button mensaje="???" color="azul"/>
      
      <Footer />

      </div>
    
  )
}

export default App;
