import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {

  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Carlos', age: 33 },
      { name: 'Ida', age: 29 }
    ]
  })

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'Carlos', age: 35 },
        { name: 'Ida', age: 31 }
      ]
    })
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Change name and age</button>
        <Person 
          name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person 
          name={personState.persons[1].name} age={personState.persons[1].age} />
      </div>
    )
}
export default App
