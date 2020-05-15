import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

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
        {/* <Person
          name={personState.persons[0].name}
          age={personState.persons[0].age}
          click={switchNameHandler} />
        <Person
          name={personState.persons[1].name}
          age={personState.persons[1].age}
          changed={nameChangeHandler} /> */}
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
    </div >
  )
}
export default App
