import React from 'react';
import "./App.scss"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNum:0,
      secondNum:0,
      result:0
    }
  }

  handleChange(e) {
    const {name,value} = e.target //desestructuracion
    this.setState({
      [name]: value   // [e.target.name] lee variable y dinamisa la funcion = e.target.value; 
    })
  }

  handleSum() {
    const {firstNum, secondNum} = this.state

    this.setState({
      result: parseInt(firstNum) + parseInt(secondNum) //pasa de estring a numero, si no pongo esto concatena
    })
  }

  render() {
    const {result} = this.state
    return (
      <div className="inputs">
        <input className="input"name="firstNum" onChange={(e) => this.handleChange(e)} type="number" />
        <input className="input" name="secondNum" onChange={(e) => this.handleChange(e)} type="number" />
        <button className="button" onClick={ () => this.handleSum()}>Sumar</button>
        <div>
          <p>Resultado: {result}</p>
        </div>
      </div>

    )
  }
}
export default App;
