import logo from './logo.svg';
import './App.css';

function App(){

  return (
    <div>
      <form onSubmit={presion}>
        <p>Escribe:
          <input type="letter" name="valor1" />
        </p>
        <p>
          <input type="submit" value="igresar" />
        </p>
      </form>
    </div>
  );

  function presion(e) {
    e.preventDefault();
   let letras=(e.target.valor1.value);
   
   let vocales = ['a','e','i','o','u'];
   let cantidad = 0;
   
   for(let i = 0; i < letras.length; i++){
       for(let l = 0; l < vocales.length; l++){
          
       if(letras[i] == vocales[l]){cantidad++;}
   
       }
   }
   alert('Total de vocales: ' +cantidad);
   }
}
  
export default App;