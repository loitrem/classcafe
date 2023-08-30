import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

// Add the following import
import { getUser } from '../src/utilities/users-service';

//import components
import AuthPage from './pages/Auth/AuthPage'
import NewOrderPage from './pages/NewOrder/NewOrderPage'
import OrderHistoryPage from './pages/OrderHistory/OrderHistoryPage'
import NavBar from './components/NavBar/NavBar';
import Index from './pages/Index/Index'

//import css
// import './index.css';

function App() {
  const [user, setUser] = useState(getUser());

  console.log('APP JS USER',user);

  return (
    <main className={styles.App}>
      { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/orders/new/" element={<NewOrderPage user={user} setUser={setUser} />}/>
            <Route path="/orders/history/" element={<OrderHistoryPage  user={user}  setUser={setUser}/>}/>
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Index />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
