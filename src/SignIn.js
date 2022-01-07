
import {Link} from "react-router-dom";
import Footers from "./Footers";
const SignIn = () => {
    return(
        <div className="sign">
        <div className="glowing">
        <span style={{'--i':1}}></span>
        <span style={{'--i':2}}></span>
        <span style={{'--i':3}}></span>
       
    </div>
    <div className="glowing">
        <span style={{'--i':1}}></span>
        <span style={{'--i':2}}></span>
        <span style={{'--i':3}}></span>
       
    </div>
    
    <div className="container">
        <div className="nav">
            <h1>FORNAX</h1>
      </div>
        <p>Sign In</p>
        <form>
            
            <input type="email" className="contact" placeholder="Email" />
            <input type="password" className="contact" placeholder="Password" />
            <input type="submit" className="contact send" value="Login" />
        </form>
       <div className="link">
           <div className="footer"> <p>Don't have account ?<span><Link to="/signup">  Sign Up</Link></span></p></div>
       
    </div>
    <Footers />
    </div>
    </div>
    );
}

export default SignIn;