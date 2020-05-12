import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {

  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Carlos', age: 33 },
      { name: 'Ida', age: 29 }
    ],
    showPersons: false
  })

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'Carlos', age: 35 },
        { name: 'Ida', age: 31 }
      ]
    })
  }

  const nameChangeHandler = (event) => {
    setPersonState({
      persons: [
        { name: 'Carlos', age: 35 },
        { name: event.target.value, age: 31 }
      ]
    })
  }

  const togglePersonhandler = () => {
    const doesShow = this.state.showPersons
    setPersonState({
      showPersons: !doesShow
    })
  }


  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button className="button" id="button"
        onClick={togglePersonhandler}>Change name and age</button>
      {
        this.state.showPersons ? 
        < div >
        <Person
          name={personState.persons[0].name}
          age={personState.persons[0].age}
          click={switchNameHandler} />
        <Person
          name={personState.persons[1].name}
          age={personState.persons[1].age}
          changed={nameChangeHandler} />
        </div> : null}
      </div >
    )
}
export default App
