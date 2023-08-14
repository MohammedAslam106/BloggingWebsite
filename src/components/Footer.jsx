import { TbBrandFacebook, TbBrandGithub, TbBrandLinkedin, TbLocation, TbMail, TbPhone } from "react-icons/tb";

export default function Footer({setCopy}){
    return(
        <>
            
            <div id="footer" className=" mb-auto px-20 sm:px-4 py-8  bg-[#1d2b34]  text-[lightyellow]">
                <div className=" my-5 flex flex-wrap justify-between items-">
                <div className=" relative">
                    <h2 className=" font-extrabold">Details</h2>
                    <ul className=" line-effect">
                        <li className=" w-fit">
                            <div onClick={()=>navigator.clipboard.writeText('9482599734').then(()=>{
                                    setCopy(true)
                                    setTimeout(()=>setCopy(false),1500)
                                })} className=" flex items-center gap-2 cursor-pointer">
                                <TbPhone size={15}/>
                                <p  >
                                    +91-9482599734
                                </p>
                            </div>
                        </li>
                        <li className=" w-fit">
                            <div className="flex items-center gap-2">
                                <TbMail className=" " size={15}/>
                                <a href="mailto:mohammedaslam4106@gmail.com" className="inli-2">Contact Us</a>
                            </div>
                        </li>
                        <li className=" w-fit">
                            <div className=" flex items-center gap-2">
                                <TbLocation  size={15}/>
                                <a href="https://www.google.com/maps/@14.4559514,75.8750999,13z?entry=ttu" >Davangere, Karnataka, India</a>

                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className=" font-extrabold">Social</h2>
                    <div className=" float-right flex flex-col justify-center items-center gap-8 mt-5">
                        <TbBrandFacebook className=" hover:bg-[lightyellow] hover:text-[#1d2b34] border border-[lightyellow] rounded-full p-3 " size={40}/>
                        <TbBrandGithub className=" hover:bg-[lightyellow] hover:text-[#1d2b34] border border-[lightyellow] rounded-full p-3 " size={40}/>
                        <TbBrandLinkedin className=" hover:bg-[lightyellow] hover:text-[#1d2b34] border border-[lightyellow] rounded-full p-3 " size={40}/> 
                    </div>
                </div>
                
                </div>
                <div className=" w-full bg-[lightyellow] h-[1px]"/>

                <p className=" pt-3">
                    Design and created by <a href="https://my-port-folio-liard.vercel.app/">@mohammedaslam</a>
                </p>
            </div>
        </>
    )
}