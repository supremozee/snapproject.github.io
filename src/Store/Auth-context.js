import React, { useEffect, useState } from "react"
const Authcontext = React.createContext({
  isLoggedIn: false,
  onLogout: ()=>{},
   onLogin: ()=>{}
})
export const AuthContextProviderv= (props)=> {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  useEffect(()=> {
   const storedUser = localStorage.getItem("isLoggedIn")
   if(storedUser === "1") {
      setIsLoggedIn(true)
   }
  }, [])
  const logoutHandler = ()=> {
   localStorage.removeItem("isLoggedIn")
   setIsLoggedIn(false)
  }
  const loginHandler = ()=> {
   localStorage.setItem("isLoggedIn", "1")
   setIsLoggedIn(true)
  }
  return(
<Authcontext.Provider
value={{
   isLoggedIn:isLoggedIn,
   onLogout: logoutHandler,
   onLogin: loginHandler
}}
>
{props.children}
</Authcontext.Provider>
  )
}

export default Authcontext;