import {Link} from "react-router-dom";
import Footers from "./Footers";
const SignUp = () => {
    return ( 
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
        <p>Sign Up</p>
        <form>
            
            <input type="text" className="contact" placeholder="Name" />
            <input type="email" className="contact" placeholder="Email" />
            <input type="text" className="contact" placeholder="Address" />
            <input type="tel" className="contact" placeholder="Contact Number" />
            <input type="password" className="contact" placeholder="Password" />
            <input type="password" className="contact" placeholder="Confirm Password" />
            <input type="submit" className="contact send" value="Sign Up" />
        </form>
       <div className="link">
           <div className="footer"> <p>Already have account ?<span><Link to="/signin">  Sign In</Link></span></p></div>
       
    </div>
    <Footers />
    </div>
    </div>
     );
}
 
export default SignUp;