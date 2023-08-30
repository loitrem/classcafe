import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Add the following import
import { getUser } from '../src/utilities/users-service';

//import components
import AuthPage from './pages/Auth/AuthPage'
import NewOrderPage from './pages/NewOrder/NewOrderPage'
import OrderHistoryPage from './pages/OrderHistory/OrderHistoryPage'
import NavBar from './components/NavBar/NavBar';
import Index from './pages/Index/Index'
import Update from './components/Update/Update'

//import css
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  console.log('APP JS USER',user);

  // useEffect(()=>{
  //   getUser()
  // },[user])

  return (
    <main className="App">
      {user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/orders/new/" element={<NewOrderPage />}/>
            <Route path="/orders/history/" element={<OrderHistoryPage  user={user}/>}/>
            <Route path="/update/" element={<Update  user={user}/>}/>
          </Routes> 
        </>
        : <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
