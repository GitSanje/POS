
'use client';

import LoginSignup from "./auth/login/_components/LoginSignup";
import { useSearchParams } from 'next/navigation';
import page from "./auth/profile/page";


export default function Home() {
  const SearchParams = useSearchParams()
  return (
    <>
     <LoginSignup searchParams={SearchParams}/>
     <page></page>
     </>
  
  );
}
