import React, {State} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Stateful extends App {
  constructor(props) {
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
}


function App() {
  
  

  

  function updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  function addItem(){
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem:""
    })

    
  }

  function deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id != id);
    this.setState({list: updatedList})
  }

  return (
    <div className="App">
      <input 
        type="text"
        placeholder="Type blog post here..."
        value={this.state.newItem}
        onChange={e => this.updateInput("newItem", e.target.value)}
      
      />

      <button 
        onClick={() => this.addItem()}
      >
        Add Post
      </button>
      <ul>
        {this.state.list.map(item => {
          return(
            <li key={item.id}>
              {item.value}
              <button onClick={() => this.deleteItem(item.id)}></button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;

