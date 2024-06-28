import About from "../About/About";
import Banner from "../Banner/Banner";


const HomePage = () => {
    return (
        <div className="bg-gradient-to-b from-gray-200 to-gray-50">
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default HomePage;