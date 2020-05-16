import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './validation'

const App = props => {

  const [personState, setPersonState] = useState({
    persons: [
      {id: 1, name: 'Carlos', age: 33 },
      {id: 2, name: 'Ida', age: 29 }
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
    const person = {...personState.persons[personIndex]}

    person.name = event.target.value;
    const persons = [...personState.persons];
    persons[personIndex] = person;

    setPersonState({persons: persons})
  }

  // const togglePersonhandler = () => {
  //   const doesShow = showPersonsState.showPersons
  //   setShowPersonsState({
  //     showPersons: !doesShow
  //   })
  // }

const deletePersonHandler = (index) => { 
  const persons = [...personState.persons];
  persons.splice(index, 1); 
  setPersonState({persons: persons})
}

const inputChangeHandler = (event) => {
  setUserInputState({
   userInput: event.target.value
  })
}

  let person = null;

  if (showPersonsState.showPersons) {
    person = (
      < div >
      {personState.persons.map((element, index) => { 
        return <Person
        click={ () =>deletePersonHandler(index)} 
        name={element.name} 
        age={element.age}
        key= {element.id}
        changed={(event) => {nameChangeHandler(event, element.id)}}
  />})}
      </div>
    )

  }
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button className="button" id="button"
        onClick={nameChangeHandler}>Change name and age</button>
      {person}
      <input type="text" 
      onChange = {inputChangeHandler}
       value={userInputState.userInput}/>
       <p>{userInputState.userInput}</p>
       <Validation inputLength = {userInputState.userInput.length} />
    </div >
      )
}
export default App
