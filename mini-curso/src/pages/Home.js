import React         from 'react';
import ComponentUm   from '../components/ComponentUm.jsx/index.js';
import ComponentTres from '../components/ComponentTres.jsx';
import ComponentDois from '../components/ComponentDois.jsx/index.jsx';
import { Link }      from 'react-router-dom';

function App(props){
    return (
        <div>
            <ComponentUm />
            <hr/>
            <ComponentTres />
            <hr/>
            <ComponentDois label={"Recebi as informações"} />
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}

export default App