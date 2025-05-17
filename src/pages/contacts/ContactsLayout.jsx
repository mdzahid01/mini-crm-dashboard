import { Outlet, Link } from "react-router-dom";

const ContactsLayout = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <div style={{display: "flex", gap: "1rem", marginBottom: "1rem"}}>
        <Link to="/">Home</Link>
        {/* <Link to='/dashboard'>Dashboard</Link> */}
      </div>
      <Outlet />
    </div>
  );
}

export default ContactsLayout;
