import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import HappyClient from "../components/HappyClient";
import MeetTheTeam from "../components/MeetTheTeam";
import VolunteerNeedsSection from "../components/VolunteerNeedsSection";
import Reviews from "../components/Reviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CareCrew ~ Home</title>
            </Helmet>
            <Banner />
            <VolunteerNeedsSection/>
            <MeetTheTeam/>
            <HappyClient/>
            <Reviews/>
        </div>
    );
};

export default Home;