import Teste  from './Teste';
import Imagem from './assets/a.jpg'


function App() {
  
  // criando variaveis
  let nome = "fiapinho";
  let sobreNome = "Mascote";
  let novoNome = nome.toUpperCase();

  // criando função
  function soma(a,b){
    return a + b;
  }

  // criando uma arrow function
  const soma1=(w,f)=>{return w * f}

  return (
    // fragments
    <>
    <Teste/>
      <h1>Fiap</h1>
      <h2>Meu nome é {novoNome} e sou o {sobreNome}</h2>
      <p>A soma da Função é: {soma(10,50)}</p>
      <p>A Soma da Arrow Function é: {soma1(10,50)}</p>
      <img src={Imagem} alt="Foto de rua com prédios" width="300"/>
    </>
  )
}

export default App
