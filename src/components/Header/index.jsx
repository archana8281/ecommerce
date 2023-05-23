
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping ,faUser} from '@fortawesome/free-solid-svg-icons';
function Header (){
    return(
        <>
        <div className="container"> 
        <div className="header">
        <a href="/"><img src="images/shop.png" alt="loading" /></a>
        <input type="search" name="search" id="" placeholder="  Serch for products"/>
        <div className="fa"><FontAwesomeIcon icon={faUser} /></div>
        <div className="fa"><FontAwesomeIcon icon={faCartShopping} /></div>
        <button>login</button>
        </div>
        </div>
        </>
    )
}
export default Header;