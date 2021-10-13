import React, {useContext} from 'react'
import { ModalContext } from '../context/ModalContext'

export default function Receta({receta}) {

    const { setIdReceta } = useContext(ModalContext);

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">
                    {receta.strDrink}
                </h2>
                <img src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} className="card-img-top" />
                <div className="card-body">
                    <button
                        type='button'
                        className='btn btn-block btn-primary'
                        onClick={()=> {
                            setIdReceta(receta.idDrink)
                        }
                    >
                        How to make
                    </button>
                </div>
            </div>
        </div>
    )
}
