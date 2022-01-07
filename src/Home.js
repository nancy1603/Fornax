import Navbar from './Navbar';
import Timeline from './Timeline';
import Footers from "./Footers";
import Team from "./Team";


const Home = () => {
    return (
        <div>
            <div className="sign">
                <div className="container">
                    <Navbar />
                   
                    <div className="about" id="about">
                        <h1>What does <span style={{color:"cyan"}}>Fornax</span> do?</h1>
                        <p style={{fontWeight:"700"}}>
                            It’s a website for smart city development. You can file a complain for your local problems. The site is accessible to everyone. It aim to reduce the time
                            taken to resolve the issues.
                       </p>
                    </div>
                    <Timeline />
                    <Team />
                    <Footers />
                </div>
            </div>

        </div>
    );
}

export default Home;