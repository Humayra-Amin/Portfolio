import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const HomePage = () => {
    return (
        <div className="bg-gradient-to-b from-yellow-200 to-yellow-50">
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;