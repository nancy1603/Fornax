import Home from "./Home";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import PreLoader from "./PreLoader";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NotFound from "./NotFound";



function App() {
  return (
    <div className="App">
     <Router>
       <div>
         <Routes>
         <Route exact path="/" element={<Home />}>
             </Route>
             <Route exact path="/signin" element={<SignIn />}>
             </Route>
             <Route exact path="*" element={<NotFound />}>
             </Route>
             <Route exact path="/signup" element={<SignUp />}>
             </Route>
             <Route exact path="/preloader" element={<PreLoader />}>
             </Route>
         </Routes>
       </div>
     </Router>
    
    </div>
  );
}

export default App;
