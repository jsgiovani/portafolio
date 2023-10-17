import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocationDot,faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className='container mx-auto md:px-[6%] 2xl:p-x[12%] my-16'>
        <h4 className='uppercase text-blue-600 text-xl font-bold'>Contact</h4>
        <h2 className='font-bold text-4xl mb-16'>Don't be shy! Hit me up!</h2>

        <div className='flex gap-16'>

            <div className="contact flex items-center gap-5">
                <FontAwesomeIcon className='text-blue-600 text-4xl' icon={faMapLocationDot} />
                <div>
                    <h3 className='font-bold'>Location</h3>
                    <p className='text-slate-700'>New York, United States</p>
                </div>
            </div>



            <div className="contact flex items-center gap-5">
                <FontAwesomeIcon className='text-blue-600 text-4xl' icon={faSquareEnvelope} />
                <div>
                    <h3 className='font-bold'>Mail</h3>
                    <p className='text-slate-700'>jsjosgiovani@gmail.com</p>
                </div>
            </div>

            <div className="contact flex items-center gap-5">
                <FontAwesomeIcon className='text-blue-600 text-4xl' icon={faPhone} />
                <div>
                    <h3 className='font-bold'>Phone</h3>
                    <p className='text-slate-700'>917-615-69XX</p>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer