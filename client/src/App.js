import { useState } from 'react'
import {Route, Routes, Navigate } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import CreatePrint from './screens/Prints/CreatePrint';
import EditPrint from './screens/Prints/EditPrint';
import Prints from './screens/Prints/Prints';
import SinglePrint from './screens/Prints/SinglePrints';
import SignIn from './screens/SignUp&In/SignIn';
import SignUp from './screens/SignUp&In/SignUp';
function App() {
 const [user, setUser] = useState(null)


  // create useEffect to fetch verified user
  return (
    <div className="App">
      {/* create Routes */}
      <Routes>
        <Route
          exact path='/'
          element={<Home/>}
        />
        <Route
          path='/sign-in'
          element={<SignIn/>}
          />
        <Route
          path='/sign-up'
          element={<SignUp/>}
          />
        <Route
          path='/print/:id'
          element={<SinglePrint/>}
          />
        <Route
          path='/prints'
          element={<Prints/>}
          />
        <Route
          path='/print-edit/i:d'
          element={<EditPrint/>}
          />
        <Route
            path='/create-print'
          element={<CreatePrint/>}
          />
        <Route
          path='/about-us'
          element={<About/>}
          />
      </Routes>
    </div>
  );
}

export default App;
