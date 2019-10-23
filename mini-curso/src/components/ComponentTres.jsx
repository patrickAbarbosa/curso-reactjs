import React, { Component } from "react";

class ComponentDois extends Component {
    state= {
        title: ""
    }

    handle(e){
        this.setState({ title: e.target.value })
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <input onChange={(e) => this.handle(e)} placeholder="Digite aqui"/>
            </div>
        )
    }
}

export default ComponentDois;