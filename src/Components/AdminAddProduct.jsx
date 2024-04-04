import { useState } from "react";
import axios from "axios";
import "../Style/AddProd.css"
const AdminAddProduct = () => {

    let [category, setCategory] = useState("");
    let [restname, setRestname] = useState("");
    let [dishname, setDishname] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("");
    let [description, setDescription] = useState("");
    let [thumbnailurl, setThumbnailurl] = useState("");
    let [rating, setRating] = useState("");

    let data = { category, restname, dishname, price, quantity, description, thumbnailurl, rating };

    let addProduct = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4080/Products', data)
            .then((res) => {
                console.log(res);
                alert("Dish added successfully")
            })
            .catch((err) => {
                alert("Invalid Data")
            })
    }

    return (

        <div className="additems">
            <form onSubmit={addProduct}>
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
                <button> Add product</button>
            </form>
        </div>

    );
}

export default AdminAddProduct;