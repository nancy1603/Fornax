import Home from "./Home";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import PreLoader from "./PreLoader";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NotFound from "./NotFound";
import {useState,useEffect} from "react";


function App() {

  const[loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    },4000)
  }, [])

  return (
    <div className="App">
     <Router>
     {
       loading ?
       (<PreLoader />)
       :
           (<div>
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
       </div>)
     }
       
     </Router>
    
    </div>
  );
}

export default App;
