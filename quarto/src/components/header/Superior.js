import Cabecalho from "./Cabecalho";
import Logo from "./Logo";

export default function Superior(){

    const dados = {
       img:"./img/logo5.png",
       usuario:"Nicole"
    }

    return (
        <div className = "header">
         <Logo img = {dados.img}/>
         <Cabecalho user = {dados.usuario}/>
        </div>
    );
}