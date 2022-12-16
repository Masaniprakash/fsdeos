import axios from "axios"
import { useEffect, useState } from "react"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import "./Plans.css"

const Plans = () => {
    const[user,setUser]=useState()
    let amount=0

    let getUser=JSON.parse(localStorage.getItem("fsdeos")) || null
    let token=getUser?.token;

    console.log(user);

    user?.product?.map(i=>{
        amount=amount+i.amount
    })

    useEffect(()=>{
        let fetch=async()=>{
            if(token){
                try {
                    let res=await axios({
                        method: 'get',
                        url:`http://localhost:1234/api/user/gettoken`,
                        headers: {
                            accept: 'application/json',
                            token:token
                        }
                    })
                    console.log(res.data);
                    setUser(res.data)
                } catch (error) {
                    console.log(error.message);
                }
            }            
        }
        fetch()
    },[token])

    return (
        <div>
            <Navbar />
            <div className="planContainer">
                <div className="planSubCon">
                    <h1 className="planTitle">Your order</h1>
                    <div className="planCon">
                        {<>{user?.product?.map((item, index) => (
                        <div className="planWrapper" key={index}>
                            <h2 className="planName" style={{textTransform:"capitalize"}}>{item.name}</h2>
                            <h3 className="planAmount">Rs:{item.amount}</h3>
                        </div>
                        ))}
                        </>}
                    </div>
                    <p>Total amount{amount}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Plans