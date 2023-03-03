//Main Product Component - Product Component (to allow user to save product to db)
//Create a component to display all products in table
//Product Item components to allow user to see product in detail and add that to cart

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { saveProduct } from "../../state/Product/ProductAction";
import DisplayProducts from "./ProductDisplayComponent";

const ProductComponent = (props) => {

    let defaultProd = useSelector((state)=>state.productReducer.defaultProduct)

    let [name, setName] = useState(defaultProd.name);
    let [price, setPrice] = useState(defaultProd.price);
    let [desc, setDescription] = useState(defaultProd.desc);
    let [rating, setRating] = useState(defaultProd.rating);
    

    //let onNameChange = (evt)=>{setName(evt.target.value)}

    let dispatchToSave = useDispatch();

    let saveProductClick = (evt)=>{
        let productToBeSaved = {name, price, desc, rating} ;//this makes a product object

        alert("Save Product will be implemented here!! "+ JSON.stringify(productToBeSaved));
        
        dispatchToSave(saveProduct(productToBeSaved))
        evt.preventDefault();
    }

    return(
        <>

            <h1>Product component</h1>

            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6" value={name} maxLength={25}
                            onChange={(evt)=>setName(evt.target.value)}
                        />
                    </div>
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="number" className="form-control col-md-6" value={price} 
                        placeholder="Product Price"
                        onChange={(evt)=>setPrice(evt.target.value)} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Description </b>
                    <input type="text" className="form-control col-md-6" value={desc} 
                        placeholder="Please Describe the product"
                        onChange={(evt)=>setDescription(evt.target.value)} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Ratings </b>
                    <input type="text" className="form-control col-md-6" value={rating} 
                        placeholder="Ratings"
                        onChange={(evt)=>setRating(evt.target.value)} />
                    </div>

                    <input type="button" className={"form-control btn btn-primary col-md-3"} 
                        value={"Save Product"} 
                        onClick={saveProductClick}/>
                </div>
            </section>
            <hr/>
            <DisplayProducts/>
        </>
    )
}

export default ProductComponent;