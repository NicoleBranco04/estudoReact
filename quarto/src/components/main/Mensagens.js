import { useState } from "react";
export default function Mensagens(props){

    const [produto,setProdutos] = useState("");

    return (
        <div className="mensagem"> 
         {props.info.map((m,i) =>(
        <div key={i}>
          <h4>
               Titulo da Mensagem:
               <br />
               {m.titulo}
          </h4>

           <h5>Autor: {m.autor}</h5>
           <p>Mensagem: {m.mensagem}</p>
           <hr/>
           <br/>
           </div>

           ))}
        </div>
    );
}