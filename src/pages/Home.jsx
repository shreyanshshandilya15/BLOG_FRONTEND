import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Card from "../components/Card.jsx"
import Abouts from "../components/Abouts"
import { useEffect, useState } from "react"
import Posts from "../components/Posts.jsx"
import { useLocation } from "react-router-dom"


export default function Home() {
   const [posts,setPosts]=useState([]);
   const {search}=useLocation();
   
   const getdata=async()=>{
    let response=await fetch("http://localhost:4000/api/v1/post/"+search,{
      method:"GET",
      headers:{
        'Content-Type':"application/json"
      }
    })
    response=await response.json();
    setPosts(response);
   }
   useEffect(()=>{
    getdata();
   },[search]);

  return (
    <div>
       <Navbar/>
       <Slider />
       <div className="flex gap-4">
        <Posts posts={posts}/>
        <div className="w-1/5">
        <Abouts/>
        </div>
       </div>
    </div>
  )
}
