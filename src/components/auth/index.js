import React from "react";
import Logo from "../../assets/logo.svg";
export default function Login() {
    return (
       <section className="grid h-screen place-items-center bg-gray-200">
           <div className="container py-12 px-12">
               <div className="flex justify-center items-center flex-wrap gap-6 text-gray-800">

                   <div className="block bg-white shadow-lg rounded-lg">
                       <div className="flex flex-wrap mt-8">
                           <div className="w-full px-8">
                               <div className="text-center">
                                   <img
                                       className="mx-auto w-48"
                                       src={Logo}
                                       alt="logo"
                                   />
                                   <h4 className="text-xl mt-1 mb-12 pb-1">Selamat Datang Di POS ReactJS</h4>
                               </div>
                               <form>
                                   <p>Please Login to your account</p>
                                   <div className="mb-4">
                                       <input
                                           type="text"
                                           className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                           id="exampleFormControlInput1"
                                           placeholder="Username"
                                       />
                                   </div>
                                   <div className="mb-4">
                                       <input
                                           type="password"
                                           className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                           id="exampleFormControlInput1"
                                           placeholder="Password"
                                       />
                                   </div>
                                   <div className="text-center pt-1 mb-12 pb-1">
                                       <button
                                           className="bg-emerald-600 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                           type="button"
                                           data-mdb-ripple="true"
                                           data-mdb-ripple-color="light"
                                       >
                                           Log in
                                       </button>
                                       <a className="text-gray-500" href="#!">Forgot password?</a>
                                   </div>
                               </form>
                           </div>
                       </div>
                   </div>

               </div>
           </div>
       </section>
    )
}