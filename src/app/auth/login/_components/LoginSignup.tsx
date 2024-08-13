'use client'
// import React, { useEffect } from "react";

import './user.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";


interface Props {
    searchParams: URLSearchParams;
}

const LoginSignup: React.FC<Props> = ({searchParams}) => {
    console.log(searchParams);
    
    const tab = searchParams.get('tab') || 'login';

    

  const social_icons =
    "btn btn-link btn-floating mx-1 bg-gray-300  text-gray-500  rounded-full hover:bg-indigo-400 hover:text-white  ";
  const $active = "bg-indigo-600 text-white";
  const $button =
    "inline-block font-semibold text-black bg-gray-300 rounded h-10 w-32 flex items-center justify-center ";

//   useEffect(() => {
//     function switchTab(
//       activeTabId: string,
//       inactiveTabId: string,
//       activeContentId: string,
//       inactiveContentId: string
//     ) {
//       document.getElementById(activeTabId)
//         ?.addEventListener("click", function (e) {
//           e.preventDefault();
//           document.getElementById(activeContentId)?.classList.remove("hidden");
//           document.getElementById(inactiveContentId)?.classList.add("hidden");
//           this.classList.add(...`${$active}`.split(' '));
//           document.getElementById(inactiveTabId)?.classList.remove(...`${$active}`.split(' '));
//           localStorage.setItem("activeTab", activeTabId);
//         });
//     }

//     switchTab("tab-login", "tab-register", "pills-login", "pills-register");
//     switchTab("tab-register", "tab-login", "pills-register", "pills-login");

//     const activeTab = localStorage.getItem('activeTab') || 'tab-login';
//     document.getElementById(activeTab)?.click();

//   }, [$active]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-gradient-to-r from-indigo-500">
      <div className="w-full max-w-md mt-4">
        <ul className="flex justify-around mb-6">
          <li className="nav-item">
            <a
              className={`nav-link ${$button} ${tab === 'login' ? $active : ''}`}
              id="tab-login"
              href="?tab=login"
            >
              LOGIN
            </a>
          </li>
          <li className="nav-item">
            <a
                 className={`nav-link ${$button} ${tab === 'register' ? $active : ''}`}
              id="tab-register"
             href="?tab=register"
            >
              REGISTER
            </a>
          </li>
        </ul>

        <div id="pills-content">
          <div id="pills-login" className={`tab-pane fade ${tab === 'login' ? 'show active' : 'hidden'}`}>
            <form
              method="POST"
              action=""
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-center mb-3">
                
             <p className="text-lg font-semibold pb-2 text-black">Sign in with:</p>
                <div className="social_accounts">
                  <Button className={social_icons} type="button">
                    <i className="fab fa-google"></i>
                  </Button>
                </div>
              </div>
              <p className="text-center font-medium text-black">or:</p>

              <Input
                type="email"
                id="loginName"
                placeholder="Email or username"
                name="email"
                label="Email or username"
              />

              <Input
                type="password"
                id="loginPassword"
                placeholder="Password"
                name="password"
                label="Password"
              />

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <input type="checkbox" id="loginCheck" className="form-check-input" />
                  <label htmlFor="loginCheck" className="ml-2 text-gray-700">Remember me</label>
                </div>
                <a href="#!" className="text-indigo-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <Button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded-lg"
                id="signinbtn"
              >
                Sign in
              </Button>
              <div className="text-center mt-4">
                <p>
                  Not a member?{" "}
                  <a href="#!" className="text-indigo-500 hover:underline">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div id="pills-register" className={`tab-pane fade ${tab === 'register' ? 'show active' : 'hidden'}`}>
            <form
              method="POST"
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-center mb-3">
                <p className="text-lg font-semibold pb-2 text-black">Sign up with:</p>
                <Button className={social_icons} type="button">
                  <i className="fab fa-google"></i>
                </Button>
              </div>
              <p className="text-center font-medium text-black">or:</p>

              <Input
                type="text"
                id="registerFullName"
                placeholder="Full Name"
                name="name"
                label="Full Name"
              />
              <Input
                type="email"
                id="registerEmail"
                placeholder="Email"
                name="email"
                label="Email"
              />
              <Input
                type="password"
                id="registerPassword"
                placeholder="Password"
                name="password"
                label="Password"
              />
              <Input
                type="password"
                id="registerRepeatPassword"
                placeholder="Repeat Password"
                name="password_confirmation"
                label="Repeat Password"
              />

              <div className="flex justify-center items-center mb-4">
                <input type="checkbox" id="registerCheck" className="form-check-input" />
                <label htmlFor="registerCheck" className="ml-2 text-gray-500">I have read and agree to the terms</label>
              </div>

              <Button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded-lg"
                id="signupbtn"
              >
                Sign up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
