import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OFFER from "../components/Topoffer";
import Navbar from "../components/navbar";



function Home(){
    return(
        < >
       <Header/>
        <Navbar/>
         < Banner/>
         <OFFER/>
         
         <Footer/>
        </>
    )
}
export default Home;