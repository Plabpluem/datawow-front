"use client"
import { useEffect } from "react"
import TopicAdmin from "../components/TopicAdmin"
import { useRouter } from "next/navigation"

const OurBlogsPage = () => {
    const router = useRouter()

    useEffect(()=>{
        const checkLogin = JSON.parse(localStorage.getItem('user'))
        if(!checkLogin){
            router.push('/')
        }
    },[])
    return <TopicAdmin />
}

export default OurBlogsPage