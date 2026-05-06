function Card(props){
    return(
        <div className="card">
            <img className ="card-img" src={props.img} alt={props.name}></img>
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.text}</p>
        </div>
    );
}

export default Card