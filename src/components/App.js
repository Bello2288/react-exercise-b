import Form from '../components/Form';
import Contacts from '../components/Contacts';
import './App.css';
import { useState } from 'react';


const INITIAL_PERSON = [
    {id: 1, firstName: 'Gregg', lastName: 'Bellofatto', address: '100 Main Street, Greenville SC 29601', phoneNumber: '864-555-5555'},
    {id: 2, firstName: 'Sarah', lastName: 'Bellofatto', address: '567 S Puppy Blvd, Greenville SC 29601', phoneNumber: '864-444-4444'}
  ];


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