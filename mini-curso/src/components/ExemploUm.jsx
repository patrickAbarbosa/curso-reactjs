import React, { Component } from "react";

class Card extends Component {
    render(){
        return(
            <div>
                <h1>Mini curso de ReactJS</h1>
                <input onChange={(e) => console.log(e.target.value)} placeholder="Digite aqui"/>
            </div>
        )
    }
}

export default Card;