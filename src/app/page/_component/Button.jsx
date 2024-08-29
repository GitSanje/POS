import React from "react";
// import { Link } from "next/link";

const Button = () => {
    return (
        
         <div className="md:flex space-x-4">
                <a href='../page/login' className="bg-transparent text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 transition">Login</a>
                <a href="../page/signup" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    Sign Up</a>
         </div>
        
    );
};

export default Button;
