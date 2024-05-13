import Banner from "../components/Banner";
import HappyClient from "../components/HappyClient";
import VolunteerNeedsSection from "../components/VolunteerNeedsSection";

const Home = () => {
    return (
        <div>
            <Banner />
            <VolunteerNeedsSection/>
            <HappyClient/>
        </div>
    );
};

export default Home;