

import { toast } from "react-toastify";
import LoginSignup from "./auth/login/_components/LoginSignup";
import { useSearchParams } from 'next/navigation';
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { User } from "./user";
import { LoginButton, LogoutButton } from './auth'

// import { useEffect } from "react";

export default async function Home() {
  // const SearchParams = useSearchParams()
  // const searchParams = useSearchParams();
  // const isLoggedIn = searchParams.get('loggedIn');
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     toast.success('Logged in successfully!', {
  //       autoClose:2000
  //     });
  //   }
  // }, [isLoggedIn]);
  const session = await getServerSession(authOptions)
  return (
    <>
     {/* <LoginSignup searchParams={SearchParams}/>
     */}
      <LoginButton />
      <LogoutButton />
      <h2>Server Call</h2>
     <pre>{JSON.stringify(session)}</pre>
     <h2>Client Call</h2>
     <User/>
    
     </>
  
  );
}
