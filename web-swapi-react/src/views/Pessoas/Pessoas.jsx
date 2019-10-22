import React, { Component } from "react"
import { connect } from "react-redux"
import Table from "../../components/Table/Table.jsx"
import { getPessoas } from '../../actions'
import { height } from "@material-ui/system";
import LinearProgress from "@material-ui/core/LinearProgress"

const colunas = [
  "Nome",
  "Altura (m)",
  "Peso (kg)",
]

class Pessoas extends Component {
  componentDidMount() {
    this.props.getPessoas()
  }
  render() {
    const pessoas = this.props.pessoas    
    return (
      <div>
        {pessoas.loading ?
          <LinearProgress />
          : null
        }
        {pessoas.list && pessoas.list.results ?
          <Table 
            tableHead={colunas}
            rows={pessoas.list.results.map(pessoa => [
              pessoa.name,
              pessoa.mass,
              pessoa.height
            ])}
          />
        : null
        }
      </div>
    )
  }
}

const mapStateToProps = ({ pessoas }) => {
  return { pessoas }
}

export default connect(mapStateToProps, {
  getPessoas
})(Pessoas)