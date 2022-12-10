import React, { useState } from 'react'


export const NuevoRestaurante = () => {
  const [ valorForm, setValorForm ] = useState({});
  const { Nombre = '', Descripción = '', Dirección = '', Imagen_URL = '' } = valorForm;


  const handleOnChange = (e) => {
    setValorForm({ ...valorForm, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault(); 
    console.log(valorForm);
  }

  return (
    <div className="container-fluid mt-3">
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Nombre </label>
          <input required type="text" name="Nombre" value={Nombre} 
              className="form-control" onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <input required type="text" name="Descripción" value={Descripción} 
              className="form-control" onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input required type="text" className="form-control" name='Dirección' 
              value={ Dirección } onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen URL</label>
          <input required type="url" className="form-control" name='Imagen_URL' 
              value={ Imagen_URL } onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  )
}