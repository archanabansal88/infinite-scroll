import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/images"}>Images</Link>
        <Link to={"/todo-lists"}>Todolist</Link>
      </div>
    </div>
  );
};

export default Navbar;
