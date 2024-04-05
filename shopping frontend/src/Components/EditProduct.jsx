import { useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'
const EditProduct = () => {
    let [category, setCategory] = useState("");
    let [restname, setRestname] = useState("");
    let [dishname, setDishname] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("");
    let [description, setDescription] = useState("");
    let [thumbnailurl, setThumbnailurl] = useState("");
    let [rating, setRating] = useState("");

     let  param=useParams()
     console.log(param.id);
     axios.get(`http://localhost:4080/Products/${param.id}`)
     .then((response) => {
        console.log(response.data);
        setCategory(response.data.category);
        setRestname(response.data.restname);
        setDishname(response.data.dishname);
        setPrice(response.data.price);
        setQuantity(response.data.quantity);
        setDescription(response.data.description);
        setThumbnailurl(response.data.thumbnailurl);
        setRating(response.data.rating);
     })
     .catch((error) => {
        console.log(error);
     })

        return (
            <div className="additems">
                <form>
                    <label>
                        Categories:
                        <select required value={category} onChange={(e) => { setCategory(e.target.value) }}>
                            <option>Starters</option>
                            <option>Breads</option>
                            <option>Chinese</option>
                            <option>Desserts</option>
                            <option>Beverages</option>
                        </select>
                    </label><br />
                    <label>
                        Restaurant Name:
                        <input required value={restname} onChange={(e) => { setRestname(e.target.value) }} type="text" placeholder="Restaurant Name" />
                    </label><br />
                    <label>
                        Dish Name:
                        <input required value={dishname} onChange={(e) => { setDishname(e.target.value) }} type="text" placeholder="Product Name" />
                    </label> <br />
                    <label>
                        Product Price:
                        <input required value={price} onChange={(e) => { setPrice(e.target.value) }} type="text" placeholder="Product Price" />
                    </label> <br />
                    <label>
                        Quantity:
                        <input required value={quantity} onChange={(e) => { setQuantity(e.target.value) }} type="number" placeholder="Product Quantity" />
                    </label> <br />
                    <label>
                        Description:
                        <textarea required value={description} onChange={(e) => { setDescription(e.target.value) }} cols="30" rows="1" placeholder="Enter the Description "></textarea>
                    </label> <br />
                    <label>
                        Thumbnail Url:
                        <input required value={thumbnailurl} onChange={(e) => { setThumbnailurl(e.target.value) }} type="text" placeholder="Product Image url" />
                    </label><br />
                    <label>
                        Rating:
                        <input required value={rating} onChange={(e) => { setRating(e.target.value) }} type="text" placeholder="Rating" />
                    </label><br />
                    <button> Edit Product</button>
                </form>
            </div>
    
        );
}
export default EditProduct;