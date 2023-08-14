import Footer from "./Footer";
import Navbar from "./Navbar";
import { collection,getDocs } from 'firebase/firestore'
import { database } from "../firebaseConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../AuthContext/Auth";
import { TiTick } from "react-icons/ti";
import 'animate.css';
import Modal from "./Modal";


// eslint-disable-next-line react/prop-types
export default function Home({copy,setCopy}){
    const collectionRef=collection(database,'blog')
    const catRef=collection(database,'category')
    const [blogs,setBlogs]=useState([])
    const navigate=useNavigate()
    const {currentUser}=useAuth()
    const [categories,setCategories]=useState([])
    const {signin}=useAuth()
    const [isOpen,setIsOpen]=useState(false)
    const [displayCat,setDisplayCat]=useState([])


    useEffect(()=>{
        function getBlogs(){
            getDocs(collectionRef).then((res)=>{
                setBlogs(res.docs.map((item)=>{return {id:item.id,data:item.data()}}))
            }).catch(error=>console.log(error))
        }

        function getCategories(){
            getDocs(catRef).then((res)=>{
                setCategories(res.docs.map((item)=>{
                    return {id:item.id,data:item.data()}
                }))
            })
        }
        getBlogs()
        getCategories()
    },[])

    useEffect(()=>{
        if(copy){
            window.document.querySelector('body').classList.add('copy')
        }else{
            window.document.querySelector('body').classList.remove('copy')
        }
    },[copy])
    return(
        <>
            <Navbar/>
            {copy && <div style={{left:'calc(50% - 70px)',animation:'backInDown', animationDuration:'0.5s',animationDirection:'forwords'}} className=" text-white z-20 fixed top-2 right-1/2 bg-gray-700 w-44 flex justify-center gap-2 p-8 py-3  font-semibold">
                Copied
                <TiTick size={25} className=" border border-gray-50 p-1 rounded-full"/>
            </div>}
                <div className=" mt-32 px-20 sm:px-5 pb-20 min-h-[100vh] font">
                    {/* <h1 className=" text-6xl text-center p-5 text-gray-400 font-extrabold">My_Personal_Blogs</h1> */}
                    <div className=" flex flex-wrap justify-center gap-20">
                        {blogs.map((blog,id)=>{
                            return(
                                <div role="button" onClick={()=>{
                                    localStorage.setItem('tempId',blog.id)
                                    if(currentUser){
                                        navigate(`/${currentUser.user.uid}/display`)
                                    }
                                    else{
                                        signin()
                                    }
                                    }  
                                }
                               
                                className=" rounded relative blog-card p-5 py-7 w-[500px] -[200px] shadow-lg" key={id}>
                                        {
                                            categories.map((cat,id)=>{
                                                if(cat.id==blog.data.category){
                                                    return(
                                                        <button key={id} onClick={(e)=>{
                                                            e.stopPropagation()
                                                            setIsOpen(true)
                                                            setDisplayCat(cat)
                                                        }} className=" text-sm border  rounded px-2 py-1 mb-2 tag bg-transparent text-center text-blue-400 bg-blue-200">{
                                                            cat.data.title
                                                        }
                                                        </button>

                                                    )
                                                }
                                            })
                                         
                                        }
                                        <h1 className=" h-20 text-2xl sm:text-2xl font-semibold mb-8">{blog.data.title}</h1>
                                        <p className=" h-19 overflow-hidden">{blog.data.desc}</p>
                                        <button className=" mt-5 text-blue-500 hover:text-blue-400">Learn More...</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            <Footer setCopy={setCopy}/>
            <Modal isOpen={isOpen} closeModal={()=>setIsOpen(false)}>
                <div>
                    <h1 className=" font-semibold text-2xl my-2 text-center">{displayCat.data?.title}</h1>
                    <p className=" text-justify">{displayCat.data?.description}</p>
                </div>
            </Modal>
            
        </>
    )
}