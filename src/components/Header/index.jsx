import Button from "../btn";
import Logo from "../logo";

function Header (){
    return(
        <>
        <div className="container"> 
        <div className="header">
        <Logo/>
        <input type="search" name="search" id="" placeholder="  Serch for products"/>
        <Button/>
        </div>
        </div>
        </>
    )
}
export default Header;