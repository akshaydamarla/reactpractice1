function Clickevent(){
    const handleclick = (e)=>(alert("Added to cart"));
    const handledoubleclick = (e)=>(console.log("Bought the item"));
    return (<><button  onClick={(e)=>handleclick(e)}>Add to cart</button><br/>
    <button onClick={(e)=>handledoubleclick(e)} >Buy Now</button></>)
}
export default Clickevent;