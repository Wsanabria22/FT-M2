import React from "react";

function validate (input) {
  let error = {}
  if (!input.username){
    error.username = "Username is require"
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    error.username = "Usuario incorrecto"
  }
if (!input.password){
    error.password = "password is require"
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    error.password = "Password incorrecto"
  }
return error
}


export default function Form() {

  const initalState = {
    username: "",
    password: "",
  };

  let [input, setInput] = React.useState(initalState);
  let [error, setError] = React.useState({})

  let handleOnChange = (e) => {
    setInput(prevState => ({
      ...prevState, // username y password --> username: '', password: ''
      [e.target.name] : e.target.value //--> reasigno unicamente la propiedad que quiero modificar 
      // setInput(...initialState, [e.target.name] : e.target.value)
    }))
  }

  let handleOnBlur = (e) => {
    let objError = validate({...input, [e.target.name] : e.target.value })
    setError(objError)
  }

  let handleOnSubmit = (e) => {
    e.preventDefault();
    setError(validate({...input, [e.target.name] : e.target.value }))
    // --> enviamos la info al back (en el M3 hacemos un post)
    setInput(initalState)
  }

  return (
    <form>
      <h1> Formulario de Prueba </h1>
      <hr />

      <div>
        <label>Username: </label>
        <input
        type= 'text'
        value= {input.username}
        name = 'username'
        onChange = {handleOnChange}
        onBlur={handleOnBlur}
        className = {error.username && 'danger'}
        />
      </div>
      <p style={{visibility: error.username? 'visible' : 'hidden'} }>{error.username}</p>

      <div>
        <label>Password: </label>
        <input
        type= 'password'
        value= {input.password}
        name = 'password'
        onChange = {handleOnChange}
        className = {error.password && 'danger'}
        onBlur={handleOnBlur}
        />
      </div>
      <p style={{visibility: error.password? 'visible' : 'hidden'}}>{error.password}</p>

    <button disabled={!input.username || Object.keys(error).length > 0} onSubmit={handleOnSubmit}> ENVIAR </button>
    </form>
  );
}
