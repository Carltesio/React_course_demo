import React, { useState } from 'react';
import Person from './Persons/Person';
import Validation from './validation';
import Char from './Char';
import Persons from './Persons/Persons';
import Cockpit from './Cockpit/Cockpit';
import classes from './App.module.css';
// import styled from 'styled-components'

const App = props => {

  const [personState, setPersonState] = useState({
    persons: [
      { id: 1, name: 'Carlos', age: 33 },
      { id: 2, name: 'Ida', age: 29 }
    ],
  })

  const [showPersonsState, setShowPersonsState] = useState({
    showPersons: true
  })

  const [userInputState, setUserInputState] = useState({
    userInput: ''
  })

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'Carlos', age: 35 },
        { name: 'Ida', age: 31 }
      ]
    })
  }

  const nameChangeHandler = (event, id) => {
    const personIndex = personState.persons.findIndex(p => {
      return p.id === id;
    })
    const person = { ...personState.persons[personIndex] }
    person.name = event.target.value;
    const persons = [...personState.persons];
    persons[personIndex] = person;
    setPersonState({ persons: persons })
  }

  const togglePersonhandler = () => {
    const doesShow = showPersonsState.showPersons
    setShowPersonsState({
      showPersons: !doesShow
    })
  }

  const deletePersonHandler = (index) => {
    const persons = [...personState.persons];
    persons.splice(index, 1);
    setPersonState({ persons: persons })
  }

  const inputChangeHandler = (event) => {
    setUserInputState({
      userInput: event.target.value
    })
  }

  const deleteCharHandler = (index) => {
    let char = userInputState.userInput.split('')
    char.splice(index, 1)
    const updatedChar = char.join('')
    setUserInputState({
      userInput: updatedChar
    })
  }

  const charList = userInputState.userInput.split('').map((ch, index) => {
    return <Char character={ch} key={index} clicked={() => { deleteCharHandler(index) }} />
  })

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

  let person = null;

  if (showPersonsState.showPersons) {
    person =
      <Persons
        persons={personState.persons}
        clicked={deletePersonHandler}
        changed={nameChangeHandler} />
    // style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // }
  }
const input = []
  return (
    <div>
 <div >
      <Cockpit
        showPersons={showPersonsState.showPersons}
        persons={personState.persons}
        clicked={togglePersonhandler}
      />
      {person}
    </div >

    <div className={classes.App}>
      <input 
        type="text"
        onChange={inputChangeHandler}
        value={userInputState.userInput} />
      <p>{userInputState.userInput}</p>
      <Validation inputLength={userInputState.userInput.length} />
      {charList}
    </div>
    </div>
   
  )
}
export default App