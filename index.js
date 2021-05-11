import React, {Component} from 'react';
import ReactDom from 'react-dom';
import "./index.css";

class Score extends Component {
    state = {
        a: 0,
    }
    minus = () => {
        if (this.state.a === -10){
            alert('минимальное значение')
        } else {            
            this.setState({a: this.state.a - 1})
        }        
    }
    plus = () => {
        if (this.state.a === 10){
            alert('максимальное число')
        } else {            
            this.setState({a: this.state.a + 1})
        }        
    }

    render() {
        return (
        <>
        <button onClick ={this.minus}>-</button><p>{this.state.a}</p><button onClick ={this.plus}>+</button>
        </>
        )}
}

const rootElement = document.querySelector("#root");
ReactDom.render(<Score/>, rootElement);