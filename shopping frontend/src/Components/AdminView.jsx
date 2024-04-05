import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Style/AdminView.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useNavigate } from 'react-router-dom';
const AdminView = () => {
  let [data, setData] = useState([])
  let [force, setForce] = useState(true);
  useEffect(() => {
    axios.get('http://localhost:4080/Products')
    .then((res) =>{
      console.log(res.data);
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [force])
  
  let remowDish= (id, name) => {
    axios.delete(`http://localhost:4080/Products/${id}`)
   .then((res) => {
        alert(name+ " Dish removed successfully")
        setForce(!force)
      })
   .catch((err) => {
        alert("Invalid Data")
      })
  }
  
  let navigate = useNavigate();
  function editProduct(id){
    navigate(`/adminhomepage/editProduct/${id}`)
  }
    return (
        <div className='adminviewpage'>
          {data.map((x)=>{
            return(
              <div className='displayproduct'>
                <img src={x.thumbnailurl} alt="" />
                <div className='restaurant'>
                <h4>{x.restname} || </h4>
                <b>{x.rating} <StarOutlineIcon id='star'/></b>
                </div>
                  <span>{x.dishname}</span> 
                  <strike> <p>₹{x.price}.00</p></strike>
                  <div class="opt">
                  <span>₹{x.price - x.price * 20/100}</span>
                  <div class="price">
                    <button  onClick={() =>{editProduct(x.id)}}>Edit</button>
                    <button onClick={() =>{remowDish(x.id, x.dishname)}}>Delete</button>
                  </div>
                  </div>
              </div>
            )
          })}    
    </div>
      );
    }
export default AdminView;