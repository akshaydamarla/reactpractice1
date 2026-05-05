import iPhone13Pro from "./assets/iPhone13Pro.jpg"

function Card(){
    return(
        <div className="card">
            <img className ="card-img" src={iPhone13Pro} alt="iPhone 13 Pro"></img>
            <h2 className="card-title">iPhone 13 Pro</h2>
            <p className="card-text">This is My Mobile</p>
        </div>
    );
}

export default Card