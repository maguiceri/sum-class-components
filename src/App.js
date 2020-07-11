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

  handleSum() {
    this.setState({
      result: parseInt(this.state.firstNum) + parseInt(this.state.secondNum)
    })
  }

  handleFirstNum(e) {
    this.setState({
      firstNum: e.target.value
    })
  }

  handleSecondNum(e) {
    this.setState({
      secondNum: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <input onChange={(e) => this.handleFirstNum(e)} type="text" />
        <input onChange={(e) => this.handleSecondNum(e)} type="text" />
        <button onClick={ () => this.handleSum()}>Sumar</button>
        <div>
          <p>Resultado: {this.state.result}</p>
        </div>
      </React.Fragment>

    )
  }
}
export default App;
