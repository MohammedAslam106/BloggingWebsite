// import JoditEditor from 'jodit-react';
// import { useEffect, useRef, useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

// // eslint-disable-next-line react/prop-types
// export default function DisplayEdit({editBlog}){
    
//     const [newContent,setNewContent]=useState('')
//     const [newTitle,setNewTitle]=useState('')
//     const [newCategory,setNewCategory]=useState('')
//     const editor=useRef(null)
//     useEffect(()=>{
//         console.log(editBlog)
//         setNewContent(editBlog?.data.content)
//         setNewTitle(editBlog?.data.title)
//         setNewCategory(editBlog?.data.category)
//     },[])
//     return(
//         <>
//             <Navbar/>
//             <div className=" mt-32 px-20 sm:px-5 pb-20 min-h-[100vh] font">
//                 <div className=" flex flex-col justify-center items-center">
//                     <ul className=" w-[75%] sm:w-full">
//                         <li className=" py-3">
//                             <label >Title</label> <br />
//                             <input value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} className="w-full border border-gray-400 text-gray-500  shadow-sm p-4 px-4" type="text" name="title" placeholder="Title" />
//                         </li>
                        
//                         <li className=" py-3">
//                             <label>Write Blog Here</label> <br />
//                             <JoditEditor
//                             tabIndex={1}
//                             ref={editor}
//                             value={newContent}
//                              // preferred to use only this option to update the content for performance reasons
//                             onChange={newContent => {setNewContent(newContent)}}
//                         />
//                             {/* <textarea className="w-full h-44 border border-gray-400 text-gray-500  shadow-sm p-4 px-4" name="blog" placeholder="Type..." ></textarea> */}
//                         </li>
//                         <li className=" py-3">
//                             <label>Selcet Category</label>
//                             <select placeholder="Category" value={newCategory} onChange={(e)=>setNewCategory(e.target.value)} className="w-full border border-gray-400 text-gray-500  shadow-sm p-4 px-4" name="category" >
//                                 <option value="Choose">Choose</option>
//                                 <option value="js">Java Script</option>
//                                 <option value="react">reactjs</option>
//                                 <option value="vite">vite</option>
//                                 <option value="node">NodeJs</option>
//                             </select>
//                         </li>
//                     </ul>
//                     <div className=" flex justify-center items-center gap-10">
//                         <button
//                         onClick={()=>{
//                             alert('Do you really want to clear all the data')
//                             setNewCategory('')
//                             setNewTitle('')
//                             setNewContent('')
//                         }}
//                          className=" bg-gray-500 p-3 px-8 border hover:border-gray-500 text-white">
//                             Reset
//                         </button>
//                         <button onClick={()=>{
//                             // storeData()
//                         }}
//                          className=" bg-red-500 p-3 px-8 border hover:border-red-500 text-white">
//                             Post
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <Footer/>
//         </>
//     )
// }