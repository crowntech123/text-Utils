import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React , {useState} from 'react'
import { BrowserRouter ,Route, Routes} from 'react-router-dom';






function App() {
  const [mode, setMode ]= useState('light')
  const [alert, setAlert ]= useState(null)
  const showAlertAs=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
       setAlert(null);
    } ,2000);
  }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor="#012244"
      showAlertAs("Dark mode has been enabled",'primary')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="rgb(227 233 239);"
      showAlertAs("light mode has been enabled",'primary')
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container ">
      <Routes>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about"
            element={<About mode={mode} />}>
          </Route>
          <Route exact path="/"
            element={<TextForm showAlert={showAlertAs} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}>
          </Route>
    </Routes>
     
      </div>
      </BrowserRouter>  
      
    </>
  );
}

export default App;
