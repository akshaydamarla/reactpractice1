function Clickevent(){
    const handleclick = (e)=>(alert("Added to cart"));
    const handledoubleclick = (e)=>(console.log("Bought the item"));
    return (<><button className="clickevbuttons" onClick={(e)=>handleclick(e)}>Add to cart</button>
    <button className="clickevbuttons" onClick={(e)=>handledoubleclick(e)} >Buy Now</button></>)
}
export default Clickevent;