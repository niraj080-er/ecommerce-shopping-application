import axios from "axios";
import { useEffect, useRef, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DeleteIcon from "@mui/icons-material/Delete";
import "../style/usercart.css";
const UserCart = () => {
  let [Cart, setcart] = useState([]);
  let [force, setforce] = useState(true);
  let q = 0;
  let cnt = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  console.log(cnt);
  useEffect(() => {
    axios
      .get("http://localhost:1002/cart")
      .then((res) => {
        setcart(res.data);
      })
      .catch((err) => {
        alert("try again...!!!");
      });
  }, [force]);
  let remdis = (id) => {
    axios
      .delete(`http://localhost:1002/cart/${id}`)
      .then((res) => {
        setforce(!force);
      })
      .catch((err) => {
        alert("cant remove from cart");
      });
  };

  return (
    <div className="outbt">
      <div className="cartmain">
        {Cart.map((x, i) => {
          let incr = (id) => {
            cnt.splice(id, 1, cnt[id]++);
          };
          let decr = (id) => {
            if (cnt[id] != 1) {
              cnt.splice(id, 1, cnt[id]--);
            }
          };
          q++;
          return (
            <div className="cartsub">
              <img src={x.image} alt="" />
              <div className="cartres">
                <h4>{x.resname}</h4>
                <p>
                  {x.rating}
                  <StarIcon />
                </p>
              </div>
              <div className="cartdet">
                <h4>{x.catagory}</h4>
                <h4>
                  <CurrencyRupeeIcon />
                  {x.price}
                </h4>
              </div>
              <div className="cartbtns">
                <span id="outerspan">
                  <button
                    onClick={() => {
                      decr(i);
                    }}
                  >
                    -
                  </button>
                  <button>{cnt[i]}</button>
                  <button
                    onClick={() => {
                      incr(i);
                    }}
                  >
                    +
                  </button>
                </span>
                <button
                  id="rmv"
                  onClick={() => {
                    remdis(x.id);
                  }}
                >
                  Remove
                  <DeleteIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button
        id="outerbtn"
        onClick={() => {
          alert(`${q} items from your cart ordered successfully...!!!`);
        }}
      >
        Proceed to order {q} items
      </button>
    </div>
  );
};
export default UserCart;