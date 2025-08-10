import Header from "@/components/layouts/header.layout";
import Home from "./home";
import Footer from "@/components/layouts/footer.layout";
import HotelDetails from "./hotel-details";

function App(){
    return (
        <div>
            <Header/>
            {/* <Home /> */}
            <HotelDetails/>
            <Footer/>
        </div>
    )
}
export default App;