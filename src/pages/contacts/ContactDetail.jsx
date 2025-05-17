import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const ContactDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (response.status === 404) {
          // User not found, set contact to null, no error
          setContact(null);
        } else if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const data = await response.json();
          setContact(data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p>Loading contact details...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Contact Details</h2>
      {contact ? (
        <div>
          <p>
            <strong>Name:</strong> {contact.name}
          </p>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
          <p>
            <strong>Phone:</strong> {contact.phone}
          </p>
          <Link to="/contacts">Back to Contacts List</Link>
        </div>
      ) : (
        <p>No contact found.</p>
      )}
    </div>
  );
};

export default ContactDetail;
