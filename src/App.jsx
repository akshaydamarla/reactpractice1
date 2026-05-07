import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import Phones from "./Phones";
import WelcomeMessage from "./WelcomeMessage";
import iPhone13Pro from "./assets/iPhone13Pro.jpg"
import iPhoneXR from "./assets/iPhoneXR.jpeg"
import oppo from "./assets/oppoa5s.jpeg"

function App(){
  return(
   <>
   <WelcomeMessage isLoggedin={true} username ="Akshay Damarla"/>
    <Header/>
    <Card name="iPhone 13 Pro" img={iPhone13Pro} text="This is my latest iPhone"/>
    <Card name="iPhone XR" img={iPhoneXR} text="This is my First iPhone"/>
    <Card name="Oppo A5s" img={oppo} text="This is my First Android"/>
    <Phones/>
    <Footer/>
    </>
  );
}

export default App;