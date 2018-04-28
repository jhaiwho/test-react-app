import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { 
  // onClick(){
  //   alert('Clicked');
  // }

  onChange(event){
    console.log(event.target.value);
  } 

  onSubmit(event){
    event.preventDefault();
    alert('submitted');
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
          <input onChange={this.onChange}/>
        </form>
      </div>
    );
  }
}

export default App;
