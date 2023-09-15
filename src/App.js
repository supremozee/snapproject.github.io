import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Authcontext from './Store/Auth-context';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); 
  // const loginHandler = (email, password) => {
  //   localStorage.setItem('isLoggedIn', "2")
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isloggedIn")
  //   setIsLoggedIn(false);
  // };
  // useEffect(()=> {
  //   const storeData = localStorage.getItem("isLoggedIn")
  //   if(storeData === "2") {
  //     setIsLoggedIn(true)
  //   }
  //  }, [])
const ctx = useContext(Authcontext)
  return (
    <>
    <MainHeader isAuthenticated={ctx.isLoggedIn} onLogout={ctx.onLogout} />
      <main>
        {!ctx.isLoggedIn && <Login onLogin={ctx.onLogin} />}
        {ctx.isLoggedIn && <Home onLogout={ctx.onLogout} />}
      </main></>
  );
}

export default App;
