import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { 
  
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onClick(){
    alert('Clicked');
  }

  onChange(event){
    console.log(event.target.value);
  } 
  
  onSubmit(event){
    event.preventDefault();
    console.log(this.input.value);
  }

  render() {
    const list = [
      'Item 1',
      'Item 2',
      'Another Item'
    ];
    const title = 'Face Off: DTR App';
    return (
      <div className="App">
        <h1>{title}</h1>
        <h2>
          {
            list.map(item => {
              return(
                <div key={item} onClick={this.onClick}>{item}</div>
              );
            })
          }
        </h2>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} ref={input => this.input = input} />
        </form>
      </div>
    );
  }
}

export default App;
