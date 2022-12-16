import "./Profile.css"
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Profile = () => {
    const navigate=useNavigate()
    const[user,setUser]=useState()

    let getToken=JSON.parse(localStorage.getItem("cstream")) || null
    let token=getToken?.token;

    useEffect(()=>{
        let fetch=async()=>{
            if(token){
                let res = await axios({
                    method: 'get',
                    url:"http://localhost:1234/api/user/token",
                    headers: {
                        accept: 'application/json',
                        token:token
                    }
                })
                setUser(res.data)
            }
        }
        fetch()
    },[token])

    const handleSubmit=()=>{
        navigate("/editProfile")
    }


    return (
        <div>
            <Navbar />
            <div className="profContainer">
                <div className="profWrapper">
                    <h2 className="profDetails">Name</h2>
                    <h3 className="profDetails">{user?.name?user?.name:<p style={{color:"green"}}>loading please wait</p>}</h3>
                    <h2 className="profDetails">Email</h2>  
                    <h3 className="profDetails">{user?.email?user?.email:<p style={{color:"green"}}>loading please wait</p>}</h3>
                    <h2 className="profDetails">Phone No</h2>
                    <h3 className="profDetails">{user?.phoneNo?user?.phoneNo:<p style={{color:"green"}}>loading please wait</p>}</h3>
                    <h2 className="profDetails">Current Plan</h2>
                    <h3 className="profDetails">
                        {user?.plan?.name ? user.plan.name:<p>No plan is subcribed</p>}
                    </h3>
                    <button className="profBtn" onClick={handleSubmit}>Edit Profile</button>
                </div>
            </div>
            {/* {open && <EditProfile setOpen={setOpen} namePro={user?.name} phoneNo={user?.PhoneNo} />} */}
            <Footer />
        </div>
    )
}

export default Profile