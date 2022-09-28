
function Contacts({person}){
    const contactList = person.map(({id, firstName, lastName, address, phoneNumber}) => (
    <li key={id}>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{address}</p>
        <p>{phoneNumber}</p>
    </li>
    ));
 
    return(
      <div> 
        <ul>
          {contactList}
        </ul>
      </div>
    )
};

export default Contacts;