import { Route, Routes } from "react-router-dom";
import UserNav from "./UserNavBar";
import UserCart from "./UserCart";
import UserView from "./UserView";
import Dis from "./Display";
const UserHomePage = () => {
    return (
        <div>
          <UserNav />
          <Routes>
            <Route path="/userview" element={<UserView />} />
            <Route path="/usercart" element={<UserCart />} />
            <Route path="/display/:id" element={<Dis />} />
          </Routes>
        </div>
      );
    };
 
export default UserHomePage;