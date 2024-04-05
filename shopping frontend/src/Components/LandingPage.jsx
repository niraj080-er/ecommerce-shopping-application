import { Link } from "react-router-dom";
import "../Style/LandingPage.css";
const LandingPage = () => {
  return (
    <div className="Landing">
      {/* <h1>Landing Page</h1> */}
      <div className="subLand">
        <Link to={"/admin"}>
          <img
            id="i1"
            src="https://static.vecteezy.com/system/resources/previews/009/636/683/original/admin-3d-illustration-icon-png.png"
            alt=""
          />
          <h3>Admin</h3>
        </Link>
        <br />
        <Link to={"/user"}>
          <img
            id="i2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
            alt=""
          />
          <h3> User</h3>
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;