import Banner from "../components/Banner";
import Header from "../components/Header";
import OFFER from "../components/Topoffer";



function Home(){
    return(
        < >
       <Header/>
        <div className="nav">
            <div className="container">
            <ul className="ul-itm">
                <li className="itm">Top offers </li>
                <li className="itm">Grocery</li>
                <li className="itm">Mobile</li>
                <li className="itm">Fashion</li>
                <li className="itm">Electronics</li>
                <li className="itm">Home Applians</li>
                <li className="itm">Grocery</li>
                <li className="itm">Toys</li>
            </ul></div>
        </div>
         < Banner/>
         <OFFER/>
        </>
    )
}
export default Home;