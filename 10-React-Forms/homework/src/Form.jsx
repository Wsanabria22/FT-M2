import React, { useState } from 'react';
import validate from './validate';

export default function  Form() {

  const initialState = {
    username: '',
    password: ''
  }

  let [input, setInput] = useState(initialState);
  let [errors, setErrors] = useState({});

  const handleImputChange = (e)=>{
    setInput(prevState => ({ // setInput recibe siempre primero el estado previo.
      ...prevState, // {username:'', password:''}
      [e.target.name]: e.target.value // reasigno unicamente la propiedad a modificar
    }))
    // console.log(input)
    setErrors(validate({...input, [e.target.name]: e.target.value}))
  }

  const handleOnBlur = (e)=>{
    setErrors(validate({...input, [e.target.name]: e.target.value}))
  }

  const handleSubmmit = (e)=>{
    e.preventDefault();
    setErrors(validate(input))
    setInput(initialState)
  // post al servidor --> body = estado input 
  }

  return (
      <div>
        <form>
          <h1>Formulario de Prueba</h1>
          <hr />
          <div>
            <label>Username:</label>
            <input className={errors.username && 'danger'}
              type='text' name='username' value={input.username} 
              onChange={handleImputChange} onBlur={handleOnBlur} />
          </div>
          {errors.username && (<p className="danger">{errors.username}</p>)}
          <p style={{visibility: errors.username? 'visible': 'hidden' }} className="danger">{errors.username}</p>

          <div>
            <label>Password:</label>
            <input className={errors.password && 'danger'}
              type='password' name='password' value={input.password} 
              onChange={handleImputChange} onBlur={handleOnBlur} />
          </div>
          {errors.password && (<p className="danger">{errors.password}</p>)}
          <p style={{visibility: errors.password? 'visible': 'hidden' }} className="danger">{errors.password}</p>

          <button disabled={errors.username || errors.password ? true: false} onClick={handleSubmmit}>Enviar</button> 

          <button disabled={!input.username || Object.keys(errors).length>0} onSubmit={handleSubmmit}>Enviar</button> 

        </form>
      </div>
  )
}
