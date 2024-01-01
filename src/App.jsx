import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapPin, faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import Header from "./components/Header"
import image from '/img/giovani.jpeg'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from './components/Footer';


const App = () => {


  return (
    <>

        <Header/>

        {/* HERO */}
        <div className='h-screen relative'>

            <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:w-3/4">


                <div className="grid md:grid-cols-2 md:gap-2  items-center">
                    <div className="developer-info">

                        <div className='mt-8 md:mt-0 text-center md:text-left'>
                            <h1 className='text-xl md:text-3xl font-bold'>
                                Hi, I am 
                                <span className='text-slade-700 text-3xl md:text-4xl'> Giovani Velasquez</span> 
                                <span className='block md:mt-2 text-2xl md:text-3xl text-slade-700'>Junior Full-Stack Web Developer.</span>
                            </h1>
                            <p className='my-6'>I am a passionate Junior Full-Stack Web Developer based in NY, United States of America <span><FontAwesomeIcon className='text-red-600' icon={faMapPin} /></span></p>
                        </div>




                        <div className="socials flex gap-3 justify-center items-center md:justify-start pb-5 md:pb-0">
                            <a href="https://www.linkedin.com/in/jose-giovani-tzoc-vel%C3%A1squez-173948a4/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='text-3xl' icon={faLinkedin} />
                            </a>


                            <a href="https://github.com/jsgiovani" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='text-3xl' icon={faGithub} />
                            </a>
                            
                            <a className='p-1 px-3 rounded-2xl bg-black font-semibold text-white text-sm'href="./assets/cv.pdf" download target="_blank" rel="noopener noreferrer">
                                Resume
                            </a>

                        </div>


                    </div>

                    <div className='img-container flex justify-center items-center'>
                        <img className='w-72 md:w-96 rounded-full border-4' src={image} alt="Image giovani" />
                    </div>



                </div>

                

                <div className="md:flex mt-8 items-center gap-10">
                    <h3 className='pb-3 md:border-r-4 md:pr-8 text-center font-bold uppercase'>Best Skill on</h3>

                    <ul className='flex gap-8 justify-center px-[2%] md:p-0 md:justify-self-start'>

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
                            <img className='w-8 h-10 object-scale-down' src="./img/mysql.png" alt="" />
                        </li>
                        <li>
                            <img className='w-8 h-10 object-scale-down' src="./img/laravel.png" alt="" />
                        </li>
                    </ul>
                </div>



            </div>


        
        </div>



        {/* ABOUT */}
        <section id='#about' className='container mx-auto px-[2%] md:px-[6%] 2xl:p-x[12%] mt-24 md:mt-0'>
            <h2 className='text-blue-600 text-2xl font-bold mb-5'>About Me</h2>

            <div className="grid md:grid-cols-4 gap-8 items-center pb-10">
                <img className='hidden md:inline-grid md:col-span-1 rounded-3xl shadow-md' src="./img/giovani.jpeg" alt="imagen giovani" />
                <div className='md:col-span-3 shadow-md h-full rounded-2xl p-4 md:p-6 flex flex-col justify-center items-start'>
                    <h2 className='text-xl md:text-4xl font-semibold mb-2'>Giovani Velasquez</h2>
                    <p className='text-justify'>
                        I am a well-qualified self-taught Junior Full Stack Web Developer with more than two years developing real world projects from the front-end and back-end side. Proficient expectations in most used programming languages as HTML, CSS, JavaScript, PHP and MySQL to develop and/or integrate new features to run business operations. In order to speed up results, I use React library as my client side and Laravel Framework as my server side.                     
                    </p>
                </div>

                <div className='md:col-span-2 shadow-md h-full rounded-2xl p-4 md:p-6'>
                    <h3 className='text-xl font-semibold mb-4'>Experience</h3>
                    <ul>
                        <li className='mb-3'>
                            <p>2020 - 2021</p>
                            <p className='text-violet-500'>Junior Web Developer</p>
                            <p>Digital Investments.</p>
                        </li>

                        <li>
                            <p>2021 - Current</p>
                            <p className='text-violet-500'>HR Specialist</p>
                            <p>Hivolts Electrical Inc.</p>
                        </li>

                    </ul>
                </div>

                <div className='md:col-span-2 shadow-md h-full rounded-2xl p-4 md:p-6'>
                    <h3 className='text-xl font-semibold mb-4'>Education</h3>
                    <ul>
                        <li className='mb-3'>
                            <p>2013 - 2017</p>
                            <p className='text-violet-500'>Computer Science and Information Technology.</p>
                            <p className=''>Valle University</p>
                        </li>

                    </ul>
                </div>

            </div>

        </section>


        {/* PORTFOLIO */}
        <section className="container mx-auto px-[2%] md:px-[6%] 2xl:p-x[12%] mt-24 md:mt-0">
            <h4 className='text-blue-600 text-2xl font-bold mb-4'>My Portfolio</h4>

            {/* portafolio-item 1*/}
            <div className='flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-4  md:gap-16 mb-16'>

                <div className='flex justify-center'>
                    <img className='rounded-md h-64 object-center'  src="./img/project1.png" alt="image project # 1" />

                </div>



                <div className='text-justify md:text-center'>
                    <h2 className='mb-3 text-3xl font-semibold text-center'>MovieTracker</h2>
                   <p className='text-slate-700'>
                        MovieTracker is an online platform that allows people to show and search the most popular and upcoming  movies and TV Shows of the moment.
                   </p>

                   <div className='flex justify-center mt-5'>
                        <ul className='flex gap-3'>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>HTML</li>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>CSS</li>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>JavaScript</li>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>Fetch API</li>
                        </ul>
                   </div>
                    

                   <div className='flex justify-center mt-5'>

                        <ul className='flex gap-8 items-center'>
                            <li>
                                <a className='text-xl flex gap-2 items-center text-violet-700' href="https://github.com/jsgiovani/movie" target="_blank" rel="noopener noreferrer">
                                    <p className='text-sm font-semibold'>Code</p>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>

                            <li>
                                <a className='flex gap-2 items-center text-xl text-violet-700' href="https://jsgiovaniwebsites-movieapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <p className='text-sm font-semibold'>Live Demo</p>
                                    <FontAwesomeIcon className='text-sm' icon={faUpRightFromSquare} />
                                </a>
                            </li>

                        </ul>
                   </div>

                </div>

            </div>

            {/* portafolio-item 2*/}
            <div className='grid md:grid-cols-2 items-center gap-4  md:gap-16 mb-16'>
                <div className='text-justify md:text-center'>
                    <h2 className='mb-3 text-3xl font-semibold text-center'>Barber Shop</h2>
                   <p className='text-slate-700'>
                        Barber Shop is an online website that allows people to show the business owner what is his/her busines about, background, price, services, location, contact information and worktime. 
                   </p>

                   <div className='flex justify-center mt-5'>
                        <ul className='flex gap-3'>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>HTML</li>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>CSS</li>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>React</li>
                        </ul>
                   </div>
                    

                   <div className='flex justify-center mt-5'>

                        <ul className='flex gap-8 items-center'>
                            <li>
                                <a className='text-xl flex gap-2 items-center text-violet-700' href="https://github.com/jsgiovani/barberShop" target="_blank" rel="noopener noreferrer">
                                    <p className='text-sm font-semibold'>Code</p>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>

                            <li>
                                <a className='flex gap-2 items-center text-xl text-violet-700' href="https://jsgiovaniwebsites-barbershop.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <p className='text-sm font-semibold'>Live Demo</p>
                                    <FontAwesomeIcon className='text-sm' icon={faUpRightFromSquare} />
                                </a>
                            </li>

                        </ul>
                   </div>

                </div>

                <div className='flex justify-center'>
                    <img className='rounded-md h-64 object-center'  src="./img/project2.png" alt="image project # 1" />
                </div>
            </div>



            
            {/* portafolio-item 3*/}
            <div className='flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-4  md:gap-16 mb-16'>

                <div className='flex justify-center'>
                    <img className='rounded-md h-64 object-cover'  src="./img/project3.png" alt="image project # 1" />

                </div>



                <div className='text-justify md:text-center'>
                    <h2 className='mb-3 text-3xl font-semibold text-center'>Furniture Store</h2>
                   <p className='text-slate-700'>
                        Furniture Store is an online e-Commerce web application that helps the owner business to show and automatize all his/her products to potential customers, also allows to create a cart list, search products and finally allows customers to buy products in the web application.
                   </p>

                   <div className='flex justify-center mt-5'>
                        <ul className='flex gap-3'>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>HTML</li>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>CSS</li>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>React</li>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>Laravel</li>
                        </ul>
                   </div>
                    

                   <div className='flex justify-center mt-5'>

                        <ul className='flex gap-8 items-center'>
                            <li>
                                <a className='text-xl flex gap-2 items-center text-violet-700' href="https://github.com/jsgiovani/furnitureStore" target="_blank" rel="noopener noreferrer">
                                    <p className='text-sm font-semibold'>Code(React)</p>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>

                            <li>
                                <a className='text-xl flex gap-2 items-center text-violet-700' href="https://github.com/jsgiovani/furnitureStore-server" target="_blank" rel="noopener noreferrer">
                                    <p className='text-sm font-semibold'>Code(Laravel)</p>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>

                            <li>
                                <a className='flex gap-2 items-center text-xl text-violet-700' href="https://jsgiovaniwebsites-ftstore.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <p className='text-sm font-semibold'>Live Demo</p>
                                    <FontAwesomeIcon className='text-sm' icon={faUpRightFromSquare} />
                                </a>
                            </li>

                        </ul>
                   </div>

                </div>

            </div>

            <div className='flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-4  md:gap-16 mb-16'>

                <div className='flex justify-center'>
                    <img className='rounded-md h-64 object-cover'  src="./img/project4.png" alt="image project # 4" />

                </div>



                <div className='text-justify md:text-center'>
                    <h2 className='mb-3 text-3xl font-semibold text-center'>Real Estate Marketplace</h2>
                   <p className='text-slate-700'>
                        Real Estate allows you find easily your dream home. Also allows owners to post their available house, apartament, etc to be rented as soon as possible 
                   </p>

                   <div className='flex justify-center mt-5'>
                        <ul className='flex gap-3'>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>React</li>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>MongoDB</li>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>Express.js</li>
                            <li className='p-1 px-3 rounded-2xl bg-sky-600 font-semibold text-white text-sm'>Node.js</li>
                        </ul>
                   </div>
                    

                   <div className='flex justify-center mt-5'>

                        <ul className='flex gap-8 items-center'>
                            <li>
                                <a className='text-xl flex gap-2 items-center text-violet-700' href="https://github.com/jsgiovani/mern-estate.git" target="_blank" rel="noopener noreferrer">
                                    <p className='text-sm font-semibold'>Code(React)</p>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>

                            <li>
                                <a className='text-xl flex gap-2 items-center text-violet-700' href="https://github.com/jsgiovani/api-estate.git" target="_blank" rel="noopener noreferrer">
                                    <p className='text-sm font-semibold'>Code(Node.js)</p>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>

                            <li>
                                <a className='flex gap-2 items-center text-xl text-violet-700' href="https://jsgiovanisites-mern-realestate.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <p className='text-sm font-semibold'>Live Demo</p>
                                    <FontAwesomeIcon className='text-sm' icon={faUpRightFromSquare} />
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