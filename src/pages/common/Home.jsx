import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero.jsx";
import PageTransition from "../../components/PageTransition";
function Home() {
    return (
        <>
        <PageTransition>

            <Navbar />

            <Hero />
           
        </PageTransition>
   
        </>
    );
}

export default Home;