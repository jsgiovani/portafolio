import React from 'react'

const Project = () => {
  return (
    <>
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
    </>
  )
}

export default Project