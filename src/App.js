import React from 'react'
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Loginthemes from './Pages/Loginthemes';
import Error from "./Pages/Error";
import Sharedlayout from './Pages/Sharedlayout';
import Adminmenu from "./Pages/Adminmenu";
import Metaboxes from './Pages/Metaboxes';
import Settings from './Pages/Settings';
import Wp from './Pages/Wp'
import Branding from './Pages/Branding';
// import Toggletheme from './Pages/Toggletheme';

const App = () => {
  return (
    <div>
    {/* <Toggletheme /> */}
      <BrowserRouter>
<Routes>
  <Route path='/' element={<Sharedlayout />}>
    <Route index element={<Homepage />} />
    <Route path='LoginThemes' element={<Loginthemes />} />
    <Route path='Adminmenu' element={<Adminmenu />} />
    <Route path='Metaboxes' element={<Metaboxes />} />
    <Route path='Settings' element={<Settings />} />
    <Route path='Wp' element={<Wp />} />
    <Route path='Branding' element={<Branding />} />
  </Route>
  <Route path='*' element={<Error />} />
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App

