import Header from "@/components/layouts/header.layout";
import Home from "./home";
import Footer from "@/components/layouts/footer.layout";
import HotelDetails from "./hotel-details";
import AuthPage from "./auth/signin";
import { SignInPage, SignUpPage } from "./auth";

function App(){
    return (
        <div>
            <Header/>
            <Home />
            {/* <HotelDetails/> */}
            {/* <AuthPage/> */}
            {/* <SignInPage/> */}
            {/* <SignUpPage/> */}
            {/* <SignInPage/> */}
            <Footer/>
        </div>
    )
}
export default App;