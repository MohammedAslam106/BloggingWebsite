import Footer from "./Footer"
import Navbar from "./Navbar"
import { database } from "../firebaseConfig"
import { getDoc,doc,collection, addDoc, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useAuth } from "../AuthContext/Auth"
import { useParams } from "react-router"

export default function Display(){
    const param=useParams()
    const docRef=doc(database,'blog',param.id)
    const commentRef=collection(database,'comment')
    // const collectionRef=collection(database,'comment')
    const [storeBlog,setStoreBlog]=useState([])
    const [comments,setComments]=useState([])
    const [comment,setComment]=useState('')
    const newObj={__html:storeBlog.content}
    const {currentUser}=useAuth()

    const submitComment=()=>{
        addDoc(commentRef,{
            name:currentUser.user.displayName,
            img:currentUser.user.photoURL,
            message:comment,
            blogId:param.id
        }).then((res)=>{
            console.log(res)
            window.location.reload()
        }).catch(error=>console.log(error))
    }

    useEffect(()=>{
        getDoc(docRef).then((res)=>{
            setStoreBlog(res.data())
        }).catch(error=>console.log(error))

        
    },[])

    useEffect(()=>{
        getDocs(commentRef).then((res)=>{
            setComments(res.docs.map((item)=>{
                 return {id:item.id,data:item.data()}
             }))
         })
    },[])


    return(
        <>
            <Navbar/>
            <div className=" mt-32 px-20 sm:px-5 pb-20 min-h-[100vh]">
                <div className=" px-[10%] sm:px-[0%] flex justify-center gap-20">
                    <div className=" shadow-md p-5 w-full">
                        <h1 className=" text-5xl font-bold">{storeBlog.title}</h1>
                        <div dangerouslySetInnerHTML={newObj}/>
                    </div>
                </div>
                <div id="comment-section" className=" px-[20%] sm:px-0 mt-20">
                    <ul>
                        <li>
                            <h1 className=" text-xl font-semibold text-center mb-2">Leave your comment here ❤</h1>
                            <textarea value={comment} onChange={(e)=>{
                                e.preventDefault(true)
                                setComment(e.target.value)}} className=" w-full border border-gray-500 h-[100px] p-3" placeholder="Your Thoughts..."></textarea>
                        </li>
                        <li className=" flex justify-end gap-2">
                            <button onClick={()=>setComment('')} className=" font-semibold rounded p-2 bg-teal-400 text-white px-3">Reset</button>
                            <button onClick={(e)=>{
                                e.preventDefault()
                                if(comment){
                                    submitComment()
                                }
                            }} className=" font-semibold rounded p-2 bg-teal-400 text-white px-3">Post</button>
                        </li>
                    </ul>
                    <div className=" mt-10">
                        {comments.map((commentor,id)=>{
                            console.log(param.id)
                            if(commentor.data.blogId===param.id){
                                console.log('is it rendering')
                            return (
                                <div className=" p-5 border rounded my-5" key={id}>
                                    <div className=" flex justify-start items-center gap-3 mb-5 font-semibold">
                                        <img className=" w-8 h-8 rounded-full" src={commentor.data.img} alt="not found" />
                                        <h1 className=" ">{commentor.data.name}</h1>
                                    </div>
                                    <p>{commentor.data.message}</p>
                                </div>
                            )}
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}