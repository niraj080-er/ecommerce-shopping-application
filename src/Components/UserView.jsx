import axios from "axios";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "../style/userview.css";
import { useNavigate } from "react-router-dom";

const UserView = () => {
  let [data, setdata] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:1001/product")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        alert("Cant get products due to network issues");
      });
  }, []);

  function order(dis, id) {
    alert(`${dis} ordered`);
    navigate(`/userHomePage/display/${id}`);
  }
  return (
    <div className="userview">
      {data.map((x) => {
        let addCart = (e) => {
          if (e.target.innerText == "Add to cart") {
            axios
              .post("http://localhost:1002/cart", x)
              .then((res) => {
                alert(`${res.data.catagory} added to your cart...!!!`);
              })
              .catch((err) => {
                // alert("cant add data to cart json");
              });
            e.target.innerText = "Remove from cart";
          } else {
            // alert(`${x.catagory} removed from your cart...!!!`);
            axios
              .delete(`http://localhost:1002/cart/${x.id}`)
              .then((res) => {
                alert(`data removed from cart json`);
              })
              .catch((err) => {
                alert(`cant delete from cart json`);
              });
            e.target.innerText = "Add to cart";
          }
        };
        return (
          <div className="viewmain">
            <img src={x.image} alt="" /> <hr />
            <div className="udet">
              <div className="urest">
                <h3>{x.resname}</h3>
                <button>
                  {x.rating}
                  <span>
                    {" "}
                    <StarIcon />
                  </span>
                </button>
              </div>
              <div className="ucatg">
                <h5>{x.catagory} </h5>
                <h5 id="upr">
                  <CurrencyRupeeIcon />
                  {x.price}
                </h5>
              </div>
              <div className="btns">
                <button onClick={addCart}>Add to cart</button>
                <button
                  onClick={() => {
                    order(x.disname, x.id);
                  }}
                >
                  Order it
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UserView;