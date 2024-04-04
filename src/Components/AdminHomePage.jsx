import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminView from "./AdminView";
import AdminAddProduct from "./AdminAddProduct";
import EditProduct from "./EditProduct";
const AdminHomePage = () => {
    return ( 
        <div>
            <AdminNavbar/>
           <h1>Welcome to Admin Home Page </h1>

            <Routes>
                <Route path="/adminview" element={<AdminView />} />
                <Route path="/adminaddproduct" element={<AdminAddProduct />} />
                <Route path="/editProduct/:id" element={<EditProduct />} />
            </Routes>
            
        </div>
     );
}
export default AdminHomePage;