import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";

function HTTPdemo() {
    const [products,setProducts] = useState([]);    

//      const fetchProducts = () => {
//     const url = 'https://dummyjson.com/products';
//     axios.get(url).then(response=>{
//         console.log(response.data.products);
//         setProducts([...response.data.products]);
//     }).catch(err=>{
//         console.log(err)
//     })
//   }; 
  const fetchProducts = async () => {
    const url = "https://dummyjson.com/products";
    const response = await axios.get(url);
    setProducts([...response.data.products]);
  };

    useEffect(()=>{
        fetchProducts();
    },[]);

    return (
        <>
        <h1 className="text-center"><u>Products Details</u></h1>
        <div className="container">
        <div className="row">
          {products.map((product, ind) => {
            return (
              <div className="col-sm-3 card" key={ind}>
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  style={{ height: "150px" }}
                  alt=""
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.brand}</h5>
                  <p className="card-text">{product.title}</p>
                  <p className="card-text">Price: {product.price}</p>
                  <p className="card-text">Ratings: {product.rating}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
        </>
    );
}

export default HTTPdemo;