import Form from '../components/Form';

import './App.css';
import {useState} from 'react';


const INITIAL_PERSON = [{firstName: 'John', lastName: 'Smith', address: '100 Main Street, Greenville SC 29601', phoneNumber: '864-555-5555'}];


function App() {
  const [person, setPerson] = useState(INITIAL_PERSON);

  const addPerson = (newPerson) => {
    setPerson([...person, newPerson])
  }

  return (
    <div className="App">
      <Form person={person} addPerson={addPerson} />
    </div>
  );
}

export default App;