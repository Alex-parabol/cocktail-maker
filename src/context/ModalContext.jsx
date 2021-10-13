import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';

// crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    // state del provider
    const [ idReceta, setIdReceta ] = useState(null);
    const [ informacion, setInformacion] = useState({});

    // una vez que tenemos una receta, llamar la api
    useEffect( () => {
        const obtenerReceta = async () => {
            if(!idReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;

            const resultado = await axios.get(url);

           setInformacion(resultado.data.drinks[0]);
        }
        obtenerReceta();
    }, [idReceta]);

    return ( 
        <ModalContext.Provider
            value={{
                informacion,
                setIdReceta,
                setInformacion
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;