import React from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import './App.css';

 class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cities: this.props.cities
    }
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione
    let apiKey = '1697663579fe3a8df6c28b1f607f72ee';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        this.setState(()=>{
          return {cities: [...this.state.cities, ciudad]}
        });
      } else {
        alert("Ciudad no encontrada");
      }
    });
  }

  onClose = (id)=>{
    this.setState(()=>{
      return {cities: this.state.cities.filter(c => c.id !== id)}
    })
  }

  render(){
    return (
      <div className="App">
        <Nav onSearch={this.onSearch}/>
        <Cards cities={this.state.cities}
               onClose={this.onClose}
        />
      </div>
    );
  }
}

export default App;