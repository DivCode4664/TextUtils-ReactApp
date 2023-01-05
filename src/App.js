import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [txt, settxt] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      settxt('light');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enable", "success");
      document.title = 'TextUtils - DarkMode';
    }
    else {
      setmode('light');
      settxt('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      document.title = 'TextUtils - LightMode';
    }
  }


  return (
    <>
      
        <Navbar title="TextUtils" mode={mode} txt={txt} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={mode} />} />
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={mode} />
        </div>
      
    </>
  );
}

export default App;
