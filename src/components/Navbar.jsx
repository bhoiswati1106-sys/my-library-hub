import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>

      <Link to="/books" style={{ color: "white", textDecoration: "none" }}>
        Books
      </Link>

      <Link to="/add-book" style={{ color: "white", textDecoration: "none" }}>
        Add Book
      </Link>

      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
        About
      </Link>
    </nav>
  );
}

export default Navbar;