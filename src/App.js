import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
function App() {
  
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null)
}, 3000);
}
  const toggleMode=()=>{
    console.log("hello") 
    if(mode==='light'){
      
      setMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("Dark Mode has been enable","success");
      document.title="Textutilies-dark mode";



    }else{
setMode('light');
document.body.style.backgroundColor="white";
showAlert("light Mode has been enable","success");
//setInterval(() => {
  //document.title="Textutilies-light mode";
//}, 3000);
document.title="Textutilies-light mode";

}

  }
   return (
    <>
  <Router>
   <Navbar title="TextUtilies" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route path="/about" element={  <About />}>
          
          </Route>
          
          <Route path="/"element={  <TextForm heading="Enter the text to analyze"showAlert={showAlert} mode={mode}/> }>
            
          </Route>
          </Routes>
        
      
        </div>
        </Router>
   
   
   
    </>
   
   
  );
}

export default App;
