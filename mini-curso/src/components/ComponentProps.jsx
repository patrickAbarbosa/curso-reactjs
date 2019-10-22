import React, { Component } from "react";

class ComponentProps extends Component {
    render(){
        const { label } = this.props;
        return(
            <div>
                <h1><b>{this.props.label}</b> <small>label 1</small></h1>
                <h1><b>{label}</b> <small>label 2</small></h1>
            </div>
        )
    }
}

export default ComponentProps;