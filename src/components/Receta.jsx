import React from 'react'

export default function Receta({receta}) {
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
                    >
                        How to make
                    </button>
                </div>
            </div>
        </div>
    )
}
