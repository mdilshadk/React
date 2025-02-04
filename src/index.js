import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from './Demo';
import Navi from './navi';
import Result from './Result';
import Mapping from './Mapping';
import Maparr from './Maparr';
import Market from './Market';
import Parents from './Parents';
import Styling from './Styling';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Roottask from './Roottask';
import Aboutp from './Aboutp';
import Contactp from './contactp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter><Routes>
      <Route path='/a' element={<Styling></Styling>} ></Route>
      <Route path='/mapping' element={<Mapping/>} ></Route>
      <Route path='/home' element={<Roottask></Roottask>}></Route>
      <Route path='/about' element={<Aboutp></Aboutp>}></Route>
      <Route path='/contact' element={<Contactp></Contactp>}></Route>
      </Routes>

      </BrowserRouter>
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
