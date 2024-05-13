import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import HappyClient from "../components/HappyClient";
import MeetTheTeam from "../components/MeetTheTeam";
import VolunteerNeedsSection from "../components/VolunteerNeedsSection";

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
        </div>
    );
};

export default Home;