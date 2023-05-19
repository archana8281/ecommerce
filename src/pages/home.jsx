import Header from "../components/Header";



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
         <div className="banner">
            <img src="images/banner.png" alt=""  className="ban" />
            <div className="ban-con">
             <div className="bans">Starting 99</div>
               customer most loved home range</div>
         </div>
        </>
    )
}
export default Home;