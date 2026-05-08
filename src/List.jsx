
function List(props) {

    const phonesList = props.phones;
    const brand = props.brand;

    const listphones = phonesList.map(phone=>
        <li key={phone.id}>{phone.model}: <b>{phone.price}</b></li>
    );
    return(
        <>
        <h3 className="list-brand">{brand}</h3>
        <ol className="actuallist">{listphones}</ol>
            
        </>
    );
}

export default List