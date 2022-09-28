import Form from '../components/Form';
import Contacts from '../components/Contacts';
import './App.css';
import {useState} from 'react';


const INITIAL_PERSON = [{id: 1, firstName: 'John', lastName: 'Smith', address: '100 Main Street, Greenville SC 29601', phoneNumber: '864-555-5555'}];


function App() {
  const [person, setPerson] = useState(INITIAL_PERSON);

  const addPerson = (newPerson) => {
    setPerson([...person, newPerson])
  }

  return (
    <div className="App">
      <Form  person={person} addPerson={addPerson} />
      <Contacts  person={person} addPerson={addPerson} />
    </div>
  );
}

export default App;