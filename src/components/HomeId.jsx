import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Home(){
    return(
        <>
            <Navbar img={true}/>
                <div className=" mt-32 px-20 sm:px-5 pb-20 min-h-[100vh] font">
                    {/* <h1 className=" text-6xl text-center p-5 text-gray-400 font-extrabold">My_Personal_Blogs</h1> */}
                    <div className=" flex flex-wrap justify-center gap-20">
                        {/* <div className=" border border-gray-500 rounded w-[500px] h-[300px] shadow-lg overflow-hidden">
                            <img className=" object-cover w-full" src="https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg" alt="not found" />
                        </div> */}
                        <div className=" overflow-hidden blog-card p-5 w-[500px] h-[280px] shadow-lg">
                            <h1 className=" text-3xl sm:text-2xl font-bold mb-10">New Blog</h1>
                            <p className=" w-full h-24 overflow-hidden text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit vitae in nihil aliquid, unde ex pariatur necessitatibus alias quo at iusto eaque ipsa fugit quos repudiandae incidunt porro perferendis repellat.
                            Quasi tenetur similique non quisquam lab28iosam molestias dolor esse labore eligendi, nisi odit ullam ab culpa voluptate. Quod quas, corporis, debitis molestiae porro temporibus repudiandae mollitia possimus minima voluptas esse.
                            Reprehenderit omnis commodi minus iure tempore nostrum vitae nesciunt facilis eum veritatis, non officiis temporibus doloribus cupiditate ipsum architecto minima deleniti sed dolor quaerat modi possimus quidem facere. Accusamus, atque.
                            Nostrum vero ad sunt ducimus eiusnostrum nesciunt nulla placeat cum voluptatum hic fugit ipsa odio reprehenderit. Iure quas minima distinctio officiis! Molestias harum officiis obcaecati?</p>
                            <button className=" mt-8 text-blue-500 hover:text-blue-400"><a href="#">Learn More...</a></button>
                        </div>
                        <div className=" blog-card p-5 w-[500px] h-[280px] shadow-lg">
                            <h1 className=" text-3xl sm:text-2xl font-bold mb-10">New Blog</h1>
                            <p className=" w-full h-24 overflow-hidden text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic consequatur harum facere veritatis natus. Ea nulla molestiae odio voluptas expedita aliquid, ipsum repudiandae, quam amet suscipit magni rem reprehenderit.</p>
                            <button className=" mt-8 text-blue-500 hover:text-blue-400"><a href="#">Learn More...</a></button>
                        </div>
                        <div className=" blog-card p-5 w-[500px] h-[280px] shadow-lg">
                            <h1 className=" text-3xl sm:text-2xl font-bold mb-10">New Blog</h1>
                            <p className=" w-full h-24 overflow-hidden text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic consequatur harum facere veritatis natus. Ea nulla molestiae odio voluptas expedita aliquid, ipsum repudiandae, quam amet suscipit magni rem reprehenderit.</p>
                            <button className=" mt-8 text-blue-500 hover:text-blue-400"><a href="#">Learn More...</a></button>
                        </div>
                        <div className=" blog-card p-5 w-[500px] h-[280px] shadow-lg">
                            <h1 className=" text-3xl sm:text-2xl font-bold mb-10">New Blog</h1>
                            <p className=" w-full h-24 overflow-hidden text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic consequatur harum facere veritatis natus. Ea nulla molestiae odio voluptas expedita aliquid, ipsum repudiandae, quam amet suscipit magni rem reprehenderit.</p>
                            <button className=" mt-8 text-blue-500 hover:text-blue-400"><a href="#">Learn More...</a></button>
                        </div>
                        <div className=" blog-card p-5 w-[500px] h-[280px] shadow-lg">
                            <h1 className=" text-3xl sm:text-2xl font-bold mb-10">New Blog</h1>
                            <p className=" w-full h-24 overflow-hidden text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic consequatur harum facere veritatis natus. Ea nulla molestiae odio voluptas expedita aliquid, ipsum repudiandae, quam amet suscipit magni rem reprehenderit.</p>
                            <button className=" mt-8 text-blue-500 hover:text-blue-400"><a href="#">Learn More...</a></button>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}