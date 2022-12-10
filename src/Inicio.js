import { lrestaurantes } from './lista-restaurantes';
import React, { useState } from 'react'

export const Inicio = () => {
    const [restaurantes, setRestaurantes] = useState(lrestaurantes)
  return (
    <div className="container-fluid mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                {
                    restaurantes.map(restaurante => {
                        return (
                            <div className="col" key={restaurante.Id}>
                                <div className="card">
                                    <img src={restaurante.Imagen} className="card-img-top" alt="Error" />
                                    <div className="card-body">
                                        <h5 className="card-title">{restaurante.Nombre}</h5>
                                        <p className="card-text">{restaurante.Dirección}</p>
                                        <p className="card-text"><small className="text-muted">{restaurante.Descripción}</small></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
  )
}

