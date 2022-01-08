import Maps from "./Maps";
import {Link} from "react-router-dom";
import GoogleMaps from "./GoogleMaps";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Complain = () => {
    return (
        <div className="sign">
            <div className="container" style={{width:"70%"}}>


    <div className="navbar">
    <h2 style={{textAlign:"center",color:"cyan",margin:"10px",fontSize:"2em"}}>Complain</h2>
    <input type="checkbox" id="click" />
        <label for="click" className="menu-btn">
           <FontAwesomeIcon icon={faBars} className="i"></FontAwesomeIcon>
        </label>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/logout">Logout</Link></li>
         </ul>
     </div>



     <form>
            <input type="text" className="contact" placeholder="Name"  autoComplete="off"/>
            <input type="text" className="contact" placeholder="Location"  autoComplete="off"/>
            <select class="contact" placeholder="Problem Type"  autoComplete="off">
              <option value="Road">Road</option>
               <option value="Garbage">Garbage</option>
               <option value="Crime">Crime</option>
              <option value="Services">Services(electricity,water)</option>
              <option value="Other">Other</option>
             </select>
             <textarea type="text" name="Message" class="contact text-area"  placeholder="Desription" autoComplete="off"></textarea>
             <input type="file" name="fileToUpload" id="fileToUpload" class="contact" />
             <input type="submit" value="Upload Image" name="submit" className="contact send" style={{height:"30px",fontSize:"1em"}}/>
             
             <input type="submit" className="contact send" value="Submit"/>
        </form>
                   
                   
                   
                   <div style={{position:"relative",marginBottom:"30px"}}>
                        <GoogleMaps />
                    </div>
        
        
        
    </div>
</div>
           
        );
}

export default Complain;