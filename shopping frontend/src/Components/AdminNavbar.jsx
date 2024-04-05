import { Link } from "react-router-dom";
import "../Style/AdminNavbar.css"
const AdminNavbar = () => {
    return ( 
        <div className="AdminNavbar">
            <div className="logo">
            <h1>Food<span>babe</span></h1>
            </div>
            <div className="options">
                <Link to = "/AdminHomePage/adminview">View Item </Link>
                <Link to = "/AdminHomePage/adminaddproduct">Add Products</Link>
            </div>
        </div>
     );
}
 
export default AdminNavbar;