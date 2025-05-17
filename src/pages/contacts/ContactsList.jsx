import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const ContactsList = () => {
    const [contacts, setContacts] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setContacts(data);
            }
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchContacts();
    }
    , []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Contacts List</h2>
      <ul>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
        {contacts.map((contact)=>{
            return (
                <li key={contact.id} style={{ marginBottom: "0.5rem" }}>
                    <Link to={`/contacts/${contact.id}`}>
                    {contact.name} ({contact.email})
                    </Link>
                </li>
            )
        })}
      </ul>
       
    </div>
  );
  
}

export default ContactsList;