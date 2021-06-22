import React, { Component } from 'react'
import './App.css'
import Calculator from './Components/Calculator'

export default class App extends Component {
  render() {
    return (
      <Calculator />
    )
  }
}

// export default class Calculator extends Component {
//     constructor(props) {
//         super()
//         this.state = {
//             total: null
//         }
//     }

//     setNum = (e, num) => {
//       this.setState({ [num]: e.target.value})
//     }

//     sumNums = (num1, num2) => {
//       this.setState({
//         total: parseInt(this.state.num1) + parseInt(this.state.num2)
//       })
//     }

//     render (){
//         return (
//             <div className="container">
//             <h1>Add with React!</h1>
          
//             <div className="add">
//             <input type="number"
//               name="num1"
//               placeholder="Enter your first number"
//               value={this.state.num1}
//               onChange={ (e) => this.setNum(e, 'num1') }
//             />
//               <span>+</span>
//               <input type="number"
//                 name="num2"
//                 placeholder="Enter your second number"
//                 value={this.state.num2}
//                 onChange={(e) => this.setNum(e, 'num2')}
//               />
//               <button onClick={(e) => this.sumNums(e)}>=</button>
//               <h3>{this.state.total}</h3>
//             </div>
//           </div> 
//         )
//     }

// }