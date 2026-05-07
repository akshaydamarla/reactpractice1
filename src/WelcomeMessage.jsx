function WelcomeMessage(props){
    return (props.isLoggedin? <h2 className="welcome-msg">Welcome {props.username}</h2> : <h2 className="remainder-msg">Please login to continue</h2>);
}
export default WelcomeMessage;