
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    return(
      
       <div className="navbar">
        <div className="logo">FORNAX</div>
        <input type="checkbox" id="click" />
        <label for="click" className="menu-btn">
           <FontAwesomeIcon icon={faBars} className="i"></FontAwesomeIcon>
        </label>
    
    <ul>
       
         <li><a href="#complain">Complain</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#logout">Logout</a></li>
       
    </ul>
    </div>
   
    );
}

export default Navbar;