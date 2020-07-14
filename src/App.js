import React from 'react';


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
    const {name,value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSum() {
    const {firstNum, secondNum} = this.state

    this.setState({
      result: parseInt(firstNum) + parseInt(secondNum)
    })
  }

  render() {
    const {result} = this.state
    return (
      <React.Fragment>
        <input name="firstNum" onChange={(e) => this.handleChange(e)} type="text" />
        <input name="secondNum" onChange={(e) => this.handleChange(e)} type="text" />
        <button onClick={ () => this.handleSum()}>Sumar</button>
        <div>
          <p>Resultado: {result}</p>
        </div>
      </React.Fragment>

    )
  }
}
export default App;
