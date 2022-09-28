import {useState} from 'react';

function Form({addPerson}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastName = (e) => { 
        setLastName(e.target.value);
    }

    const handleAddress = (e) => { 
        setAddress(e.target.value);
    }

    const handlePhoneNumber = (e) => { 
        setPhoneNumber(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            firstName,
            lastName,
            address,
            phoneNumber,   
        }
        addPerson(newPerson);
        setFirstName("");
        setLastName("");
        setAddress("");
        setPhoneNumber("");
    };

    return(
        <form>
            <label htmlFor=""></label>
            <input value={firstName} type='firstName' name='firstName' placeholder="First Name" autoComplete='off' onChange={handleFirstName}></input>
            <input value={lastName} type='lastName' name='lastName' placeholder="Last Name" autoComplete='off' onChange={handleLastName}></input>
            <input value={address} type='address' name='address' placeholder="Address" autoComplete='off' onChange={handleAddress}></input>
            <input value={phoneNumber} type='phoneNumber' name='phoneNumber' placeholder="Phone Number" autoComplete='off' onChange={handlePhoneNumber}></input>
            <button type="submit" name='saveButton' onClick={handleSubmit}>Submit</button>
        </form>
        )
    };


  export default Form;