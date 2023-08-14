import { useState } from 'react'
import {TbHome, TbUser, TbX} from 'react-icons/tb'
import { useAuth } from '../AuthContext/Auth';
import { useNavigate } from 'react-router';
import Modal from './Modal';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../firebaseConfig';

// import user from '../assets/image/user.png'


export default function Navbar(){
    const [showBar,setShowBar]=useState(false)
    // document.body.addEventListener('click', ()=>setShowBar(false), true);  -->this line will triggered where ever a onClick event listener is called
    const {signin}=useAuth()
    const {signout}=useAuth()
    const {currentUser}=useAuth()
    const navigate=useNavigate()
    const [isOpen,setIsOpen]=useState(false)
    const catRef=collection(database,'category')
    const [title,setTitle]=useState('')
    const [desc,setDesc]=useState('')

    function addCategory(){
        addDoc(catRef,{
            title:title,
            description:desc,
            createdBy:currentUser.user.uid
        }).then((res)=>{
            console.log(res)
        }).catch(error=>console.log(error))
    }

    return (
        <>
            <div className=" z-10 fixed top-0 bg-[lightyellow] w-full px-10 py-5 flex sm:justify-center justify-between items-center">
                <div className=' sm:w-full flex justify-center sm:justify-between items-center gap-20'>
                    <a href="/"><TbHome onClick={()=>{
                        localStorage.removeItem('tempId')
                    }} className='  text-red-400 cursor-pointer' size={35}/></a>
                    <div onMouseOver={(e)=>{
                            e.preventDefault()
                            setShowBar(true)
                        }} onMouseLeave={()=>setShowBar(false)} className=' relative'>
                        {currentUser ? <img  className='  border-red-400 w-9 h-9 rounded-full cursor-pointer' src={(localStorage.getItem('blogUserImg'))} alt="not found" /> : 
                        <TbUser  size={35} className='text-red-400 cursor-pointer'/> }
                        {showBar && <div className={'bg-white absolute sm:right-0 w-32 p-2 px-3 shadow-xl'}>
                            <button 
                            onClick={()=>{
                                if(!currentUser){
                                    signin()
                                }else{
                                    navigate(`/${currentUser.user.uid}/create-blog`)
                                }
                                }} 
                                className=' py-2 font-semibold'>
                                Create Blog
                            </button>
                            <button onClick={()=>setIsOpen(true)} className=' py-2 font-semibold'>
                                Add Category
                            </button>
                            <button className=' py-2 font-semibold'>
                                <a href="#footer">Contact Us</a>
                            </button>
                            {currentUser ? <button className=' py-2 font-semibold' 
                            onClick={()=>{
                                
                                signout()
                                navigate('/')
                                window.location.reload()
                            }}>Signout</button>:
                            <button className=' py-2 font-semibold' 
                            onClick={()=>{
                                console.log('clicked')
                                    signin()
                            }}>Signin</button>}

                        </div>}
                    </div>
                </div>
                <div>
                    <button onClick={()=>{
                        if(!currentUser){
                            signin()
                        }else{
                            navigate(`/${currentUser.user.uid}/create-blog`)
                        }
                    }} className=' font-semibold sm:hidden bg-red-400 px-10 py-5 border text-white shadow-sm hover:border-red-500 hover:opacity-90'>Creat Blog</button>
                </div>
            </div>
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
                            <input onChange={(e)=>setTitle(e.target.value)} className=' p-2 px-3 w-full shadow-sm border border-gray-400 text-gray-500' type="text" placeholder='Title' />
                        </li>
                        <li className=' my-3'>
                            <label>Description</label>
                            <textarea onChange={(e)=>setDesc(e.target.value)} className=' p-2 px-3 w-full h-20 shadow-sm border border-gray-400 text-gray-500' type="text" placeholder='Description'></textarea>
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