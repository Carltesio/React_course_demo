import React, { useState } from 'react';
import classes from '/home/carlos/gitHub_repos/react_course/src/App.module.css';
import Person from './Person/Person';
import Validation from './validation';
import Char from './Char';
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

  let btnClass = '';
  let person = null;

  if (showPersonsState.showPersons) {
    person = (
      < div >
        {personState.persons.map((element, index) => {
          return <Person
            click={() => deletePersonHandler(index)}
            name={element.name}
            age={element.age}
            key={element.id}
            changed={(event) => { nameChangeHandler(event, element.id) }}
          />
        })}
      </div>
    )
    btnClass = classes.Red
    // style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // }
  }

  let assignedClasses = [];
  if (personState.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (personState.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.App}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} id="button" alt = {showPersonsState.showPersons}
        onClick={togglePersonhandler}>Change name and age</button>
      {person}
      <input type="text"
        onChange={inputChangeHandler}
        value={userInputState.userInput} />
      <p>{userInputState.userInput}</p>
      <Validation inputLength={userInputState.userInput.length} />
      {charList}
    </div >
  )
}
export default App
