import './Login.css'
import { useState } from 'react'
// import {AuthContext} from "../../context/AuthContext"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify"
import  * as Yup from "yup"
import { useFormik } from "formik";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Login = () => {
    const navigate = useNavigate()  
    const [loading,setLoading]=useState(false)

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string().required("Password is required")
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema,
        onSubmit: async (data) => {
            setLoading(true)
            try {
                let res=await axios.post("http://localhost:1234/api/user/login", {
                    email: data.email,
                    password: data.password
                })
                toast.success("Login successfully !!!", {
                    position: "top-right",
                    autoClose: 2500
                })
                localStorage.setItem("fsdeos",JSON.stringify(res.data))
                setTimeout(() => {
                    setLoading(false)
                    navigate("/")
                }, 2500)
            } catch (err) {
                setLoading(false)
                toast.error(err.response.data.message, {
                    position: "top-right",
                    autoClose: 2500
                })
            }

        },
    });

    return (
        <>
            <Navbar />    
            <div className='login'>
                <div className="loginContainer">
                    <h1 className="loginHeading">LOGIN</h1>
                    <input type="email" id='email' placeholder='Email' className="loginInput" 
                        onChange={formik.handleChange} value={formik.values.email} required
                    />
                    {formik.errors.email &&
                        <p className="formErr">{formik.errors.email}</p>
                    }
                    <input type="password" id="password" placeholder='password' className="loginInput" 
                        onChange={formik.handleChange} value={formik.values.password} required
                    />
                    {formik.errors.password &&
                        <p className="formErr">{formik.errors.password}</p>
                    }
                    <button onClick={formik.handleSubmit} disabled={loading} className='loginButton'>Login</button>
                    <ToastContainer />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login