import About from "../About/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";


const HomePage = () => {
    return (
        <div className="bg-gradient-to-b from-yellow-200 to-yellow-50">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;