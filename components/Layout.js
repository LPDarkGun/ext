import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getSession, useSession, signIn } from "next-auth/react";
import Nav from "./Nav";
import Logo from "./Logo";
import Spinnertwo from "./Spinnertwo";


export default function Layout({ children }) {
  const { data: session, status } = useSession();
  const [showNav,setShowNav] = useState(false);


  //!Проверяем session и jwt-token
  useEffect(() => {
    if (session) {
      console.log("JWT Token:", session.jwt);
      console.log(session);
    }
  }, [session]);
  
  

  if (status === 'loading') {
    return (
      <main className="bg-black w-screen h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <Spinnertwo />
          <h1 className="text-center text-red-300 text-4xl mb-4">Please wait</h1>
        </div>
      </main>
    )
  }

  console.log(session, status)
  

  if (!session) {
    return (
      <div className="bg-bgBlackMain w-screen h-screen flex flex-col items-center justify-center bg-black">
        <h1 className="text-center text-red-300 text-4xl mb-4">Login</h1>
        <button className="p-3 rounded-lg bg-white" onClick={() => signIn('discord')}>Sign in with Discord</button>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} />
        <div className="flex-grow p-4">
          {children}
        </div>
      </div>
    </div>
  );
}


