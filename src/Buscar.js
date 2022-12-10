import React, { useState } from 'react';
import { lrestaurantes } from './lista-restaurantes';


const Buscar = () => {
    
        const [valoresFormulario, setValoresFormulario] = useState({});
        const [listado,setListado] = useState([]); 

        const { ingreso = '' } = valoresFormulario;
        


        const handleOnChange = (e) => {
            setValoresFormulario({ ...valoresFormulario, [e.target.name]: e.target.value });
        }

        const handleOnSubmit = (e) => {
            e.preventDefault(); 
            setListado(lrestaurantes.filter(rest => rest.Nombre.toLowerCase().includes(ingreso.toLowerCase())))
        }
        return <>
            <div className="container mt-3">
                <form onSubmit={(e) => handleOnSubmit(e)}>
                    <div className="mb-3">
                        <label className="form-label">Ingrese nombre del restaurante: </label>
                        <input  type="text" name="ingreso" value={ingreso}
                            className="form-control" onChange={(e) => { handleOnChange(e) }}  />
                            
                    </div>
                    <button type="submit" className="btn btn-primary">Buscar</button>
                    
                </form>
                <div className="container-fluid mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                {
                    listado.map(listado => {
                        return (
                            <div className="col" key={listado.Id}>
                                <div className="card">
                                    <img src={listado.Imagen} className="card-img-top" alt="Error" />
                                    <div className="card-body">
                                        <h5 className="card-title">{listado.Nombre}</h5>
                                        <p className="card-text">{listado.Dirección}</p>
                                        <p className="card-text"><small className="text-muted">{listado.Descripción}</small></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div> 
            </div>

            </>
    }
export {
    Buscar
}