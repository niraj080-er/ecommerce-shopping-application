import { Link } from "react-router-dom";
import "../style/UserNav.css";
const UserNav = () => {
  return (
    <nav className="usernav">
      <div className="ulogo">
        <Link to={"/userHomePage"}>
          <h1 title="click here to go to home page">
            Food<span>Cart</span>
            <span>
              <img
                height={25}
                src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
                alt=""
              />
            </span>
          </h1>
        </Link>
      </div>
      <div className="opt">
        <Link to={"/userHomePage/userview"}>View Food items</Link>
        <Link to={"/userHomePage/usercart"}>Your Cart</Link>
      </div>
    </nav>
  );
};
export default UserNav;