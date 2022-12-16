import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import useFetch from "../../Hooks/useFetch"
import "./Home.css"
import axios from "axios"
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate=useNavigate()
    let img=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOP59YD6HSz0NYeUpsfXsHOB2y4Dgy9LJwrw&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOpbfgBFkRQdrUjA4Nd4-7aYL4_E_SKwCUw&usqp=CAU',
'data:image/jpeg;base64,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']
    const {data,loading}=useFetch(`http://localhost:1234/api/product/`)

    let user=JSON.parse(localStorage.getItem("fsdeos")) || null
    let token=user?.token

   
    const handleClick=async(item)=>{
        if(!user){
            return navigate("/login")
        }
        else{
            try {
                await axios({
                    method: 'put',
                    url:`http://localhost:1234/api/user/`,
                    data:{
                        name:item.name,
                        amount:item.amount,
                        date:Date.now()
                    },
                    headers: {
                        accept: 'application/json',
                        token:token
                    }
                })
                toast.success(`Buy ${item.name} successfully !!!`,{position:"top-right",autoClose:2500})
                
            } catch (error) {
                toast.error(error.message,{position:"top-right",autoClose:2500})
            }
            
        }
    }

    return (
        <div> 
            <Navbar />
            <div className="homeContainer">
                {loading?<p>please wait</p>:<>{data?.map((item,index)=>(
                    <div className='video' key={index}>
                        <img src={img[index]} alt="" className="videoSrc" />
                        <div className="videoDesc">
                            <h1 className="videoTitle"  style={{textTransform:"capitalize"}}>{item?.name}</h1>
                                <button className='videoCheckButton' onClick={()=>handleClick(item)}>Buy Now</button>                       
                        </div>
                    </div>))}
                </>}
            </div>
            <ToastContainer/>
            <Footer />
        </div>
    )
}

export default Home