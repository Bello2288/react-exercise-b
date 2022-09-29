
function Contacts({person}){
    const contactList = person.map(({id, firstName, lastName, address, phoneNumber}) => (
    <li key={id} class="contact-box">
        <p>{firstName} {lastName}</p>
        <p>{address}</p>
        <p>{phoneNumber}</p>
    </li>
    ));
 
    return(
      <div class="list">
        <ul class="list-items">Contact List 
          {contactList}
        </ul>
      </div>
    )
};

export default Contacts;