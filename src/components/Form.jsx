/* import React, {useContext} from 'react'
import { CategoriasContext } from '../context/CategoriasContext' */

export default function Form() {

   /*  const { categorias } = useContext(CategoriasContext) */
    

    return (
       <form className='col-12'>
           <fieldset className='text-center'>
               <legend>Search drinks by Category or Ingredients</legend>
           </fieldset>

           <div className="row mt-4">
               <div className="col-md-4">
                   <input
                    type="text"
                    className="form-control"
                    placeholder='Search by ingredients'
                    name='nombre'
                    />
               </div>
               <div className="col-md-4">
                   <select
                    className='form-control'
                    name='categoria'
                   >
                       <option value="">-- Select Category --</option>
                   </select>
               </div>
               <div className="col-md-4">
                   <input
                    type="text"
                    className="btn btn-block btn-primary"
                    value='Find Cocktail'
                    />
               </div>
           </div>
       </form>
    )
}
