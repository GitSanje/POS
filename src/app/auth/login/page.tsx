'use client'
import React from 'react';
import LoginSignup from './_components/LoginSignup';

import { useSearchParams } from 'next/navigation';

const LoginPage: React.FC = () => {

    const searchParams = useSearchParams();
    console.log(searchParams);
    
  return (
    <div>
      <LoginSignup searchParams={searchParams} />
    </div>
  );
};

export default LoginPage;
