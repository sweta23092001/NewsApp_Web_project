// import logo from './logo.svg';
import './App.css';
//rcc
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";
// search react top loading bar
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize = 15;
  
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />

          {/* <News setProgress={setProgress} pageSize={pageSize}country='in' category="science"/> */}
          <Routes>
            {/* aalag alag key dene se samjh jaega ke hmlog ko re render karna hai */}
            <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country='us' category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country='us' category="business" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country='us' category="technology" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country='us' category="entertainment" />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country='us' category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country='us' category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country='us' category="sports" />}></Route>
          </Routes>
        </Router>
      </div>
    )
}
export default App;