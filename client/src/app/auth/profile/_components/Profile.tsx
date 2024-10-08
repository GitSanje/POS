'use'
import { Chrome, Crown, Mail, MailIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Profile: React.FC = () => {
  
  return (
    <section className="bg-gray-400 p-4 h-screen">
      <div className="max-w-7xl mx-auto p-4 rounded-md grid-cols-1 lg:grid-cols-3 gap-4 text-black">
        {/* Profile Section */}
        <div className="col-span-1 lg:col-span-3 p-4 bg-gray-100 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4 items-center">
              <img
                className="h-16 w-16 object-cover rounded-full"
                src="https://images.pexels.com/photos/27593823/pexels-photo-27593823/free-photo-of-black-and-white-photo-of-a-building-with-balconies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile"
              />
              <div>
                <p className="font-semibold">Sukraj Chaudhary</p>
              </div>
            </div>
            <button className="bg-green-500 h-9 w-24 border-2 border-black rounded text-white">
              Edit
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Full Name</p>
              <p>Sukraj Chaudhary</p>
            </div>
            <div>
              <p className="font-semibold">Gender</p>
              <p>I’d prefer not to say</p>
            </div>
            <div>
              <p className="font-semibold">Country/Region</p>
              <p>Nepal</p>
            </div>
            <div>
              <p className="font-semibold">Language</p>
              <p>English</p>
            </div>
            <div>
              <p className="font-semibold">Time Zone</p>
              <p>(GMT+05:45) Nepal Time (Asia/Kathmandu)</p>
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="col-span-1 lg:col-span-3 p-4 bg-gray-100 rounded-md mt-4">
          <p className="font-semibold">My Email Address</p>
          <a
            href="mailto:sukrajchaudhary90@gmail.com"
            className="hover:underline hover:text-red-400 transition-all"
          >
            sukrajchaudhary90@gmail.com
          </a>
          <div className="flex justify-start gap-24 items-center  p-4 mt-4 rounded-md text-black">
            <div className="flex justify-center items-center gap-3">
              <div className="h-16 w-16 flex rounded-full bg-blue-800 justify-center items-center">
                <MailIcon color="#eef2ee" />
              </div>
              <div>
                <p className="font-semibold">Sukraj Chaudhary</p>
                <p>2 new messages</p>
              </div>
            </div>
            <div className="cursor-pointer flex gap-2 justify-center items-center">
              <Chrome color="#fb0909" className="animate-bounce " />
              <Crown color="#1acf17" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button type="button" className="text-blue-800">
              +Add Email Address
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
