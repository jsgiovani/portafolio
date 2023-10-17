import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocationDot,faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className='container mx-auto md:px-[6%] 2xl:p-x[12%] my-10'>
        <h4 className='uppercase text-blue-600 text-xl font-bold'>Contact</h4>
        <h2 className='font-bold text-4xl mb-10'>Don't be shy! Hit me up!</h2>

        <div className='flex flex-col md:flex-row items-center gap-5 md:gap-10'>

            <div className="flex items-center gap-2">
                <FontAwesomeIcon className='text-blue-600 text-xl' icon={faMapLocationDot} />
                <p className='text-slate-700 font-light'>New York, United States</p>
            </div>



            <div className="flex items-center gap-2">
                <FontAwesomeIcon className='text-blue-600 text-xl' icon={faSquareEnvelope} />
                <p className='text-slate-700 font-light'>jsjosgiovani@gmail.com</p>
            </div>

            <div className="flex items-center gap-2">
                <FontAwesomeIcon className='text-blue-600 text-xl' icon={faPhone} />
                <p className='text-slate-700 font-light'>917-615-69XX</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer