import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'
export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([])
    const [ busqueda, buscarRecetas ] = useState({
        nombre: '',
        categoria: ''
    })

    const [consulta, setConsulta ] = useState(false)

    const { nombre, categoria } = busqueda

    useEffect(()=>{
        if(consulta){
             const obtenerRecetas = async ()=> {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
            const consutltaAPI = () => {
                const respuesta = axios.get(url)
                console.log(respuesta)
            }
        }

        obtenerRecetas()
        }
       
    },[busqueda]);

    return (
        <RecetasContext.Provider
            value={{
                buscarRecetas,
                setConsulta
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider