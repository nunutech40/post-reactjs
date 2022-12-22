import React, { Fragment, useContext, useState } from 'react'
import Logo from "../../assets/logo.svg";
import axios from 'axios'
import { AuthContext } from '../../App';
import { Link } from 'react-router-dom';
const qs = require('querystring')
const api = 'http://localhost:8000/api'
var Recaptcha = require('react-recaptcha');

export default function Login(props) {

    const { dispatch } = useContext(AuthContext)

    const initialState = {
        isSubmitting: false,
        errorMessage: null,
        isVerified: false
    }

    const stateForm = {
        email: "",
        password: ""
    }

    const [data, setData] = useState(initialState)
    const [dataform, setDataForm] = useState(stateForm)

    var callback = () => {
        console.log('Done!!!!');

    };
    // specifying verify callback function
    var verifyCallback = (response) => {
        console.log(response);
        if (response) {
            setData({
                ...data,
                isVerified: true
            })
        }
    };

    const handleInputChange = event => {
        setDataForm({
            ...dataform,
            [event.target.name]: event.target.value,
        })

    }
    const handleFormSubmit = event => {
        event.preventDefault()

        if (data.isVerified) {
            setData({
                ...data,
                isSubmitting: true,
                errorMessage: null
            })

            const requestBody = {
                email: dataform.email,
                password: dataform.password
            }

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            axios.post(api + '/auth/login', qs.stringify(requestBody), config)
                .then(res => {
                    if (res.data.success === true && res.data.isVerified === 1) {
                        dispatch({
                            type: "LOGIN",
                            payload: res.data
                        })

                        //redirect ke dashboard
                        props.history.push("/home")
                    }
                    else if (res.data.success === true && res.data.isVerified === 0) {
                        setData({
                            ...data,
                            isSubmitting: false,
                            errorMessage: "Email anda belum terverifikasi, silahkan cek email!"
                        })
                    }
                    else {
                        setData({
                            ...data,
                            isSubmitting: false,
                            errorMessage: res.data.Message
                        })
                    }

                    throw res
                })
                .catch(e => {
                    console.log(e)
                })
        }
        else {
            alert('Anda diduga robot!')
        }
    }

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
                               <form onSubmit={handleFormSubmit}>
                                   <p>Please Login to your account</p>
                                   <div className="mb-4">
                                       <input
                                           type="email"
                                           className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                           id="idusername"
                                           placeholder="Username"
                                           name="email"
                                           onChange={handleInputChange}
                                           value={dataform.email}
                                       />
                                   </div>
                                   <div className="mb-4">
                                       <input
                                           type="password"
                                           className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                           id="idpassword"
                                           placeholder="Password"
                                           name="password"
                                           onChange={handleInputChange}
                                           value={dataform.password}
                                       />
                                   </div>
                                   <div className="text-center pt-1 mb-12 pb-1">
                                       <button
                                           className="bg-emerald-600 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                           type="button"
                                           data-mdb-ripple="true"
                                           data-mdb-ripple-color="light"
                                           disabled={data.isSubmitting}>
                                           {data.isSubmitting ? (
                                                   "..Loading"
                                               ) :
                                               (
                                                   "Login"
                                               )
                                           }
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