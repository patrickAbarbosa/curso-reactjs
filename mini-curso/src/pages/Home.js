import React         from "react";
import ExempleOne    from "../components/ExemploUm.jsx";
import InputTitle    from "../components/InputInTitle";
import ComponetProps from "../components/ComponentProps.jsx";
import { Link }      from 'react-router-dom';

function App(props){
    return (
        <div>
            <ExempleOne />
            <hr/>
            <InputTitle />
            <hr/>
            <ComponetProps label={"Recebi as informações"} />
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}

export default App