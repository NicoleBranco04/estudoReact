import { useState } from "react";
export default function Mensagens(props){

    const [produto,setProdutos] = useState("");

    return (
        <div className="mensagem"> 
           <h4>
               Titulo da Mensagem
               <br />
               {props.info[0].titulo}
           </h4>
           <h2>Titulo da Mensagem</h2>
           <h3>Autor: {props.info[0].autor}</h3>
           <p>Mensagem: {props.info[0].mensagem}</p>
        </div>
    );
}