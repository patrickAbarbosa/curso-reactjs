/*
 * Este arquivo cria uma instância do axios setando
 * a base do url a ser utilizado da nossa api
 */
import Axios from "axios"

const api = Axios.create({
    baseURL: "https://swapi.co/api"
})

export default api