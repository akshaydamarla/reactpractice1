import { use, useState } from "react";

function AddCart(){

    const [cart, setCart] = useState(0);

    const addcart = ()=>{
        setCart(cart+1);
    }

    const removecart = ()=>{
        setCart(cart-1);
    }

    const handleclick = ()=>{
        (alert("Bought the item"));
        console.log("Bought the item");
        setCart(0);
    }


    return (
    <>
        <div className="CartDisplay">🛒 {cart}</div>
        <button className="clickevbuttons" onClick={(e)=>addcart(e)}>Add to cart</button>
        <button className="clickevbuttons" onClick={(e)=>removecart(e)}>Remove from cart</button>
        <button className="clickevbuttons" onClick={(e)=>handleclick(e)} >Buy Now</button>

    </>);

}

export default AddCart;