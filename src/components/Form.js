import { useState } from 'react';
import { nanoid } from 'nanoid'

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
            id: nanoid(),
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
        <form class="form">
            <label htmlFor=""></label>
            <div class="name-inputs">
                <input class="first-name" value={firstName} type='firstName' name='firstName' placeholder="First Name" autoComplete='off' onChange={handleFirstName}></input>
                <input class="last-name" value={lastName} type='lastName' name='lastName' placeholder="Last Name" autoComplete='off' onChange={handleLastName}></input>
            </div>  
            <input class="address" value={address} type='address' name='address' placeholder="Address" autoComplete='off' onChange={handleAddress}></input>
            <input class="phone-number" value={phoneNumber} type='phoneNumber' name='phoneNumber' placeholder="Phone Number" autoComplete='off' onChange={handlePhoneNumber}></input>
            <div class="button">
                <button type="submit" name='submitButton' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
        )
    };


  export default Form;