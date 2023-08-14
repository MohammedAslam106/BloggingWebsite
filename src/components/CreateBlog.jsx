import { useRef, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import JoditEditor from 'jodit-react';
import { collection,addDoc,getDocs } from 'firebase/firestore'
import { database } from "../firebaseConfig";
import { useAuth } from "../AuthContext/Auth";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Modal from "./Modal";
import { TbX } from "react-icons/tb";

export default function CreateBlog(){
    const [isOpen,setIsOpen]=useState(false)
    const [content,setContent]=useState('')
    const [title, setTitle]=useState('')
    const [category,setCategory]=useState('')
    const [words,setWords]=useState(100)
    const [attractingText,setAttractingText]=useState('')
    const editor=useRef(null)
    const {currentUser}=useAuth()
    const collectionRef=collection(database,'blog')
    const navigate=useNavigate()
    const categoryRef=collection(database,'category')
    const [categories,setCategories]=useState([])
    const catRef=collection(database,'category')
    const [catTitle,setCatTitle]=useState('')
    const [catDesc,setCatDesc]=useState('')
    function storeData(){
        addDoc(collectionRef,{
            title:title,
            content:content,
            category:category,
            desc:attractingText,
            createdBy:currentUser.user.uid
        }).then((res)=>{
            console.log(res)
            navigate('/')
        }).catch((error)=>{
            console.log(error)
        })
    }

    function addCategory(){
        addDoc(catRef,{
            title:catTitle,
            description:catDesc,
            createdBy:currentUser.user.uid
        }).then((res)=>{
            console.log(res)
            window.location.reload()
        }).catch(error=>console.log(error))
    }


    useEffect(()=>{
        getDocs(categoryRef).then((res)=>{
            setCategories(res.docs.map((item)=>{
                return {id:item.id,data:item.data()}
            }))
        }).catch(error=>console.log(error))
    },[])

    return(
        <>
            <Navbar/>
            <div className=" mt-32 px-20 sm:px-5 pb-20 min-h-[100vh] font">
                <div className=" flex flex-col justify-center items-center">
                    <ul className=" w-[75%] sm:w-full">
                        <li className=" py-3">
                            <label >Title</label> <br />
                            <input required value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full border border-gray-400 text-gray-500  shadow-sm p-4 px-4" type="text" name="title" placeholder="Title" />
                        </li>
                        
                        <li className=" py-3">
                            <label>Write Blog Here</label> <br />
                            <JoditEditor
                            tabIndex={1}
                            ref={editor}
                            value={content}
                             // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => {setContent(newContent)}}
                        />
                            {/* <textarea className="w-full h-44 border border-gray-400 text-gray-500  shadow-sm p-4 px-4" name="blog" placeholder="Type..." ></textarea> */}
                        </li>
                        <li className=" py-3">
                                <label>Selcet Category</label>
                            <div className="  flex justify-center gap-2 items-cente">
                                <select required placeholder="Category" value={category} onChange={(e)=>setCategory(e.target.value)} className="w-full border border-gray-400 text-gray-500  shadow-sm p-4 px-4" name="category" >
                                    <option value="null">--Choose</option>
                                    {categories.map((cat,id)=>{
                                        if(cat.data.createdBy===currentUser.user.uid){
                                            return (
                                                <option key={id} value={cat.id}>{cat.data.title}</option>
                                            )
                                        }
                                    })}
                                </select>
                           <button onClick={()=>{
                                setIsOpen(true)
                           }} className=" p-2 px-3 shadow-sm bg-gray-300">Add New Category</button>
                            </div>
                        </li>
                        <li className=" relative py-3">
                            <label>Write the content to attract the readers</label>
                            <textarea required onChange={(e)=>{
                                setAttractingText(e.target.value)
                                setWords((pre)=>{
                                    if(pre==0){
                                        return 0
                                    }
                                    else if(pre<=100){
                                        return 100-e.target.value.length
                                    }
                                })
                            }} name="display" className=" h-20 w-full border border-gray-400 text-gray-500  shadow-sm p-4 px-4" placeholder="Type..." ></textarea>
                            <span className=" absolute left-1 bottom-5  border   text-xs">Min Words:{words}</span>
                        </li>
                    </ul>
                    <div className=" flex justify-center items-center gap-10">
                        <button
                        onClick={()=>{
                            alert('Do you really want to clear all the data')
                            setCategory('')
                            setTitle('')
                            setContent('')
                        }}
                         className=" font-semibold bg-gray-500 p-3 px-8 border hover:border-gray-500 text-white">
                            Reset
                        </button>
                        <button onClick={()=>{
                            storeData()
                        }}
                         className=" font-semibold bg-red-500 p-3 px-8 border hover:border-red-500 text-white">
                            Post
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
            <Modal isOpen={isOpen} closeModal={()=>setIsOpen(false)}>
                <div>
                    <div className=' flex justify-between items-center ' >
    
                        <p className=' font-semibold text-lg'>
                            Add Category
                        </p>
                        <TbX onClick={()=>setIsOpen(false)} className='  p-1 cursor-pointer hover:bg-gray-200' size={30}/>
                    </div>
                    <ul>
                        <li className=' my-3'>
                            <label>Title</label>
                            <input onChange={(e)=>setCatTitle(e.target.value)} className=' p-2 px-3 w-full shadow-sm border border-gray-400 text-gray-500' type="text" placeholder='Title' />
                        </li>
                        <li className=' my-3'>
                            <label>Description</label>
                            <textarea onChange={(e)=>setCatDesc(e.target.value)} className=' p-2 px-3 w-full h-20 shadow-sm border border-gray-400 text-gray-500' type="text" placeholder='Description'></textarea>
                        </li>
                    </ul>
                    <div className=' flex justify-end gap-2'>
                        <button onClick={()=>{
                            addCategory()
                            setIsOpen(false)
                        }} className=' hover:opacity-70 text-white p-2 px-3 border border-blue-200 bg-blue-300 rounded shadow-sm'>
                            Submit
                        </button>
                        <button onClick={()=>setIsOpen(false)} className=' hover:opacity-70 text-white p-2 px-3 border border-gray-400 bg-gray-400 rounded shadow-sm'>
                            Close
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}