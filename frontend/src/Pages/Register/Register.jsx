import './Register.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify"
import { useFormik } from "formik";
import * as Yup from 'yup'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Register = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [Name, setName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    
    const handleSubmit=async()=>{
        setLoading(true)
            try {
                await axios.post("http://localhost:1234/api/user/register", {
                    name: Name,
                    email: email,
                    password: password,
                })
                toast.success("Register successfully !!!", {
                    position: "top-right",
                    autoClose: 2500
                })
                setTimeout(() => {
                    setLoading(false)
                    navigate("/login")
                }, 2500)
            } catch (err) {
                setLoading(false)
                toast.error(err.response.data.message, {
                    position: "top-right",
                    autoClose: 2500
                })
            }
    }
    return (
        <>
            <Navbar />
            <div className='reg'>
                <div className="regContainer">
                    <h1 className="regHeading">REGISTER</h1>
                    <input type="text" id='name' placeholder='Name' className="regInput"
                        onChange={(e)=>setName(e.target.value)}
                        value={Name}
                    />
                    <input type="email" id='email' placeholder='Email' className="regInput"
                        onChange={(e)=>setemail(e.target.value)}
                        value={email}
                        />
                    <input type="password" id="password" placeholder='Password' className="regInput"
                        onChange={(e)=>setpassword(e.target.value)}
                        value={password}
                    />
                    {/* <button onClick={formik.handleSubmit} disabled={loading} className='regButton'>Register</button> */}
                    <button onClick={handleSubmit} disabled={loading} className='loginButton'>Register</button>
                    <ToastContainer />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register