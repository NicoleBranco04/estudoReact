import Conteudo from "./Conteudo";
import Mensagens from "./Mensagens";
import {useState,useEffect} from "react"

export default function Container(){

  //Vamos iniciar o projeto lendo a url com dados da api
    //Neste caso temos os produtos para ler mmontar a tela do conteudo
    //Vamos usar o comando useState para iniciar o estado de dados
    //dos produtos. Depois usaremos o comando useEffect para carregar os produtosque vem da api.
    //O comando useEffect é um comando de laço, portanto é necessario fazer
    //ele parar o laço quando terminar de carregar os dados. Isso é feito usando um colchetes ao final da instrução.
    //Para obter so dados iremos usar o comando fetch dentro do useEffect

    const [produtos,setProdutos] = useState([
      {
          id:"",
          nome:"",
          categoria:"",
          preco:"",
          msg:[],
      },
  ]);
  useEffect(()=>{
      fetch("http://10.26.44.30:5500/")
      .then((response)=>response.json())
      .then((dados)=>{
        setProdutos(dados.output);
      });
  },[]);
    
    return(
      <div className="container">
          <Mensagens dados = {produtos}/>
          <Conteudo dados = {produtos}/>
      </div>
    )
}