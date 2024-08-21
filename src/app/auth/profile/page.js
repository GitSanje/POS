"use client";
import { useState } from "react";
import { Chrome, Crown, MailIcon, Phone } from "lucide-react";
import Modal from "../modal/page";
import Sidebar from "../sidebar/page"
import React from "react";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [sidebarOpen,setSideBarOpen]=useState(false)

  const handleAddEmail = () => {
    setModalType("email");
    setIsModalOpen(true);
  };

  const handleAddPhone = () => {
    setModalType("phone");
    setIsModalOpen(true);
  };

  const handleSubmit = (value) => {
    if (modalType === "email") {
      submitEmail(value);
    } else if (modalType === "phone") {
      submitPhone(value);
    }
    setIsModalOpen(false);
  };

  const submitEmail = (email) => {
    console.log(email);
    alert("Email submitted:" + email);
  };

  const submitPhone = (phone) => {
    alert("Phone number submitted:" + phone);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          showModal={() => setIsModalOpen(false)}
          dialougeTitle={`Add ${
            modalType === "phone" ? "Mobile Number" : "Email Address"
          }`}
          dialougePlaceholder={`Enter your ${
            modalType === "phone" ? "phone number" : "email address"
          }`}
          onSubmit={handleSubmit}
        />
      )}

      <section className="bg-gray-200  h-full">
        <nav className="bg-white shadow dark:bg-gray-800 sticky top-0">
          <div className="container flex items-center justify-center p-2 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <div className="flex justify-between ml-auto items-center">
              <button onClick={()=>setSideBarOpen(!sidebarOpen)} className="flex gap-4 items-center">
                <img
                  className="h-10 w-10 object-cover rounded-full cursor-pointer"
                  src="https://images.pexels.com/photos/27593823/pexels-photo-27593823/free-photo-of-black-and-white-photo-of-a-building-with-balconies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Profile"
                />
                <div>
                  <p className="font-semibold">Sukraj Chaudhary</p>
                </div>
              </button>
           
            </div>
          </div>
        </nav>
        <Sidebar sidebarOpen={sidebarOpen} setSideBarOpen={setSideBarOpen}></Sidebar>
        <div className="max-w-7xl mx-auto p-4 rounded-md grid-cols-1 lg:grid-cols-3 gap-4 overflow-y-auto">
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
            <div className="flex justify-start gap-24 items-center   p-4 mt-4 rounded-md">
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
              <button
                type="button"
                onClick={() => handleAddEmail("email")}
                className="text-blue-800"
              >
                +Add Email Address
              </button>
            </div>
          </div>
          {/* Mobile Number Section */}
          <div className="col-span-1 lg:col-span-3 p-4 bg-gray-100 rounded-md mt-4">
            <p className="font-semibold">My Mobile Numbers</p>
            <p>View and manage all of the mobile numbers associated with you</p>
            <div className="flex justify-start gap-24 items-center  p-4 mt-4 rounded-md">
              <div className="flex justify-center items-center gap-2">
                <div className="h-16 w-16 flex rounded-full  justify-center items-center">
                  <Phone color="#1b990a" />
                </div>
                <div>
                  <p className="font-semibold">+977 9809521702</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={() => handleAddPhone("phone")}
                className="text-white text-xs bg-green-500 px-2 p-2 rounded-lg border-2"
              >
                Add Mobile Numbers
              </button>
            </div>
          </div>
          
        </div>
      
      </section>
    </>
  );
};

export default Page;
