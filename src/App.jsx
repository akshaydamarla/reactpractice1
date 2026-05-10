import Card from "./Card";
import Clickevent from "./Clickevent";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import Phones from "./Phones";
import WelcomeMessage from "./WelcomeMessage";
import iPhone13Pro from "./assets/iPhone13Pro.jpg"
import iPhoneXR from "./assets/iPhoneXR.jpeg"
import oppo from "./assets/oppoa5s.jpeg"

function App(){

  const iphones = [{id: 1, model:"iPhone 13 Pro", price: 119000},
    {id: 2, model:"iPhone XR", price: 42000}
  ];
  const androids=[{id: 3, model:"Oppo a5s", price: 10000}]

  return(
   <>
   <WelcomeMessage isLoggedin={true} username ="Akshay Damarla"/>
    <Header/>
    <Card name="iPhone 13 Pro" img={iPhone13Pro} text="This is my latest iPhone"/>
    <Card name="iPhone XR" img={iPhoneXR} text="This is my First iPhone"/>
    <Card name="Oppo A5s" img={oppo} text="This is my First Android"/>
    <br/>
    <Clickevent/>
    <List phones={iphones} brand="iPhones"/>
    <List phones={androids} brand="Androids"/>
    <Phones/>
    <Footer/>
    </>
  );
}

export default App;