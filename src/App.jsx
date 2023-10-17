import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faMapPin} from '@fortawesome/free-solid-svg-icons'
import Header from "./components/Header"
import image from '/img/giovani.jpeg'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from './components/Footer';


const App = () => {


  return (
    <>

        <Header/>

        {/* HERO */}
        <div className='px-4 h-screen relative'>

            <div className="hero md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:w-3/4">


                <div className="grid md:grid-cols-2 md:gap-2">
                    <div className="developer-info">

                        <div className='mt-8 md:mt-0 text-center md:text-left'>
                            <h1 className="font-black text-3xl md:text-6xl">Full-Stack Web Developer</h1>
                            <p className='my-5'>Hi, I am Giovani Velasquez. A passionate Full-Stack Web Developer based in NY, United States of America <span><FontAwesomeIcon className='text-red-600' icon={faMapPin} /></span> </p>
                        </div>


                        <div className="socials flex gap-3 justify-center md:justify-start pb-4 md:pb-0">
                            <a href="https://www.linkedin.com/in/jose-giovani-tzoc-vel%C3%A1squez-173948a4/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='text-3xl' icon={faLinkedin} />
                            </a>


                            <a href="https://github.com/jsgiovani" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='text-3xl' icon={faGithub} />
                            </a>
                            
                            <a className='font-medium text-md border rounded-lg px-2 bg-black text-white overflow-hidden'href="./img/php.png" download target="_blank" rel="noopener noreferrer">
                                Resume
                            </a>

                        </div>


                    </div>

                    <div className='img-container flex justify-center items-center'>
                        <img className='w-72 md:w-96 rounded-full border-4' src={image} alt="Image giovani" />
                    </div>



                </div>

                

                <div className="md:flex mt-8 items-center gap-10">
                    <h3 className='pb-3 md:border-r-4 md:pr-8 text-center font-bold'>Tech Stack</h3>

                    <ul className='flex gap-8'>

                        <li>
                            <img className='w-8 h-10 object-scale-down' src="./img/html.png" alt="" />
                        </li>
                        <li>
                            <img className='w-8 h-10 object-scale-down' src="./img/css.png" alt="" />
                        </li>
                        <li>
                            <img className='w-12 h-12 object-scale-down' src="./img/tailwind.svg" alt="" />
                        </li>
                        <li>
                            <img className='w-8 h-10 object-scale-down' src="./img/js.png" alt="" />
                        </li>
                        <li>
                            <img className='w-8 h-10 object-scale-down' src="./img/react.png" alt="" />
                        </li>
                        <li>
                            <img className='w-8 h-10 object-scale-down' src="./img/php.png" alt="" />
                        </li>
                        <li>
                            <img className='w-8 h-10 object-scale-down' src="./img/laravel.png" alt="" />
                        </li>
                    </ul>
                </div>



            </div>


        
        </div>


        <hr />

        {/* ABOUT */}
        <section   className='container mx-auto grid md:grid-cols-2 gap-10 md:px-[6%] 2xl:p-x[12%] h-screen items-center'>
           

            <img className='rounded-md' src="./img/about.jpg" alt="img about" />

            <div className='about-info text-center'>

                <h3 className='uppercase text-blue-600 text-xl font-bold'>About me</h3>
                <h2 className='font-semibold text-3xl my-4'>A dedicated Full-Stack Web Developer roudmap</h2>
                <p className='font-light md:px-12 text-slate-700'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptatem. Velit deserunt aliquam nemo impedit, repudiandae aperiam similique eius earum eum, iure sit mollitia amet suscipit ipsum in quos! Voluptates!
                    At quisquam quasi, dolorem possimus explicabo facilis vitae praesentium.
                </p>

                <p className='font-light md:px-12 text-slate-700 mt-3'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptatem. Velit deserunt aliquam nemo impedit, repudiandae aperiam similique eius earum eum, iure sit mollitia amet suscipit ipsum in quos! Voluptates!
                    At quisquam quasi, dolorem possimus explicabo facilis vitae praesentium.
                </p>


            </div>

        </section>


        {/* PORTFOLIO */}
        <section className="container mx-auto md:px-[6%] 2xl:p-x[12%] mt-24 md:mt-0">
            <h4 className='uppercase text-blue-600 text-xl font-bold'>Portfolio</h4>
            <h2 className='font-semibold md:text-2xl mb-10 text-xl'>Each project is a unique piece knowledge, concentration and process of development</h2>

            {/* portafolio-item 1*/}
            <div className='grid md:grid-cols-2 gap-10 mb-24'>
                <img className='rounded-md'  src="./img/project1.png" alt="image project # 1" />

                <div className='text-center'>
                    <h2 className='mb-3 text-xl font-semibold'>Movie App</h2>
                   <p className='md:px-20 font-light text-slate-700'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dicta non, eum odit repellendus nihil exercitationem eveniet rerum fuga officia, ratione maiores amet commodi velit quos mollitia tenetur architecto sequi!
                   </p>

                   <div className='flex justify-center mt-5'>
                        <ul className='flex gap-4'>
                            <li><p className='border p-1 px-2 rounded-2xl bg-slate-500 font-medium text-white text-md'>HTML</p></li>
                            <li><p className='border p-1 px-2 rounded-2xl bg-slate-500 font-medium text-white text-md'>CSS</p></li>
                            <li><p className='border p-1 px-2 rounded-2xl bg-slate-500 font-medium text-white text-md'>Javascript</p></li>
                        </ul>
                   </div>
                    

                   <div className='flex justify-center mt-5'>

                        <ul className='flex gap-8 items-center'>
                            <li>
                                <a className='text-xl' href="https://github.com/jsgiovani/movie" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>

                            <li>
                                <a className='flex gap-1 items-center text-xl' href="https://jsgiovaniwebsites-movieapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <p className='text-sm'>Live Demo</p>
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </li>

                        </ul>
                   </div>

                </div>

            </div>

            {/* portafolio-item 2*/}
            <div className='grid md:grid-cols-2 gap-10 md:grid-flow-row-dense mb-24'>
                <img className='rounded-md md:col-start-2'  src="./img/project2.png" alt="image project # 1" />

                <div className='text-center md:col-start-1'>
                    <h2 className='mb-3 text-xl font-semibold'>Barber Shop</h2>
                   <p className='md:px-20 font-light text-slate-700'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dicta non, eum odit repellendus nihil exercitationem eveniet rerum fuga officia, ratione maiores amet commodi velit quos mollitia tenetur architecto sequi!
                   </p>

                   <div className='flex justify-center mt-5'>
                        <ul className='flex gap-4'>
                            <li><p className='border p-1 px-2 rounded-2xl bg-slate-500 font-medium text-white text-md'>HTML</p></li>
                            <li><p className='border p-1 px-2 rounded-2xl bg-slate-500 font-medium text-white text-md'>CSS</p></li>
                            <li><p className='border p-1 px-2 rounded-2xl bg-slate-500 font-medium text-white text-md'>Javascript</p></li>
                        </ul>
                   </div>
                    

                   <div className='flex justify-center mt-5'>

                        <ul className='flex gap-8 items-center'>
                            <li>
                                <a className='text-xl' href="https://github.com/jsgiovani/barberShop" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>

                            <li>
                                <a className='flex gap-1 items-center text-xl' href="https://jsgiovaniwebsites-barbershop.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <p className='text-sm'>Live Demo</p>
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </li>

                        </ul>
                   </div>

                </div>

            </div>

            {/* portafolio-item 3*/}
            <div className='grid md:grid-cols-2 gap-10'>
                <img className='rounded-md'  src="./img/project3.png" alt="image project # 1" />

                <div className='text-center'>
                    <h2 className='mb-3 text-xl font-semibold'>Movie App</h2>
                   <p className='md:px-20 font-light text-slate-700'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dicta non, eum odit repellendus nihil exercitationem eveniet rerum fuga officia, ratione maiores amet commodi velit quos mollitia tenetur architecto sequi!
                   </p>

                   <div className='flex justify-center mt-5'>
                        <ul className='flex gap-4'>
                            <li><p className='border p-1 px-2 rounded-2xl bg-slate-500 font-medium text-white text-md'>HTML</p></li>
                            <li><p className='border p-1 px-2 rounded-2xl bg-slate-500 font-medium text-white text-md'>CSS</p></li>
                            <li><p className='border p-1 px-2 rounded-2xl bg-slate-500 font-medium text-white text-md'>Javascript</p></li>
                        </ul>
                   </div>
                    

                   <div className='flex justify-center mt-5'>

                        <ul className='flex gap-8 items-center'>
                            <li>
                                <a className='text-xl' href="https://github.com/jsgiovani/furnitureStore" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>

                            <li>
                                <a className='flex gap-1 items-center text-xl' href="https://jsgiovaniwebsites-ftstore.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <p className='text-sm'>Live Demo</p>
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </li>

                        </ul>
                   </div>

                </div>

            </div>

        </section>

        {/* Footer */}
        <Footer/>

      
    </>
  )
}

export default App