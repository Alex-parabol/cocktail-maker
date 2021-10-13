import React, {useState,useContext} from 'react'
import { ModalContext } from '../context/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


export default function Receta({receta}) {

    //configuración del modal de material-ui

    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen ] = useState(false);

    const classes = useStyles()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const { setIdReceta, informacion, setInformacion } = useContext(ModalContext);

    //arregla la api que es una mierda.

    const mostrarIngredientes = informacion => {
        let ingredientes = [];
        for(let i = 1; i < 16; i++){
            if(informacion[`strIngredient${i}`]){
                ingredientes.push(
                    <li key={`strIngredient${i}`}>{informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}</li>
                    
                )
            }
        }
        return ingredientes
    }
    

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
                            handleOpen()
                        }}
                    >
                        How to make
                    </button>
                    <Modal
                        open={open}
                        onClose={()=>{
                            handleClose()
                            setIdReceta(null)
                            setInformacion({})
                        }}
                    >
                        <div
                         style={modalStyle}
                         className={classes.paper}
                         >
                             <h2>{informacion.strDrink}</h2>
                             <h2 className="mt-4">Instructions:</h2>
                             <p>{informacion.strInstructions} </p>
                             <img src={informacion.strDrinkThumb} alt="" className="img-fluid my-4" />
                             <h3>Ingredients and Measurements</h3>
                             <ul>
                                 { mostrarIngredientes(informacion)}
                             </ul>
                         </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
