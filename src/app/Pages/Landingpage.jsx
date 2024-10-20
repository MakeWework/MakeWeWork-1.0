import Categories from "../Components/Categories";
import Community from "../Components/Community";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Newsletter from "../Components/Newsletter";
import SectionB from "../Components/SectionB";
import Testimonials from "../Components/Testimonials";

function Landingpage () {
    return (
        <div>

            <Hero/>

            <SectionB/>

            <Categories/>

            <Community/>

            <Testimonials/>

            <Newsletter/>

            <Footer/>
        </div>
    );
}

export default Landingpage;