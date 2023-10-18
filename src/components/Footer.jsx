import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocationDot,faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='container mx-auto px-[2%]  md:px-[6%] 2xl:p-x[12%] my-10'>
        <h4 className='uppercase text-blue-600 text-xl font-bold mb-2'>Contact</h4>
        <h2 className='font-bold text-3xl mb-10'>Don't be shy! Hit me up!</h2>

        <div className='flex flex-col md:flex-row md:items-center gap-5 md:gap-10'>

            <div className="flex items-center gap-2">
                <FontAwesomeIcon className='text-violet-700 text-xl' icon={faMapLocationDot} />
                <p className='text-violet-700'>New York, United States</p>
            </div>


            <a href='mailto:jsjosgiovani@gmail.com' target="_blank" className="flex items-center gap-2">
                <FontAwesomeIcon className='text-violet-700 text-xl' icon={faSquareEnvelope} />
                <p className='text-violet-700'>jsjosgiovani@gmail.com</p>
            </a>

            <a href='tel:+19176156927' target="_blank" className="flex items-center gap-2">
                <FontAwesomeIcon className='text-violet-700 text-xl' icon={faPhone} />
                <p className='text-violet-700'>917-615-6927</p>
            </a>

            <a href='https://api.whatsapp.com/send?phone=+19176156927&text=Hi Giovani! We are interested to...' target="_blank" className="flex items-center gap-2">
                <FontAwesomeIcon className='text-violet-700 text-xl' icon={faWhatsapp} />
                <p className='text-violet-700'>917-615-6927</p>
            </a>
        </div>

    </footer>
  )
}

export default Footer