import React, {Component} from 'react';
import './App.css';
class Counter extends Component{
    state= {
        count:0,
    }
    handleIncreament=()=>
    {
        this.setState({ count: this.state.count + 1})
    };
    handleDecreament=()=>
    {
        this.setState({ count: this.state.count - 1})
    };
    x
    render() {
        return(
            <div className='App-header'>
                <button Onclick = {this.handleIncreament} >Increament</button>
                <span>{this.state.count}</span>
                <button Onclick = {this.handleDecreament} >Decreament</button>
            </div>    
        )
    }
};
export  default Counter;