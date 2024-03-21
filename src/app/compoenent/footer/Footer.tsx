import Link from 'next/link';
import { BiMessage, BiMessageDetail } from 'react-icons/bi';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer className="mt-16 ">
        <div className="container mx-auto px-4">
            <Link href="/" className='font-black text-tertiary-dark'>
                Hotelzz
            </Link>

            <h4 className='font-semibold text-[40px] py-6'>Contact</h4>

            <div  className='flex flex-wrap gap-16 item-center justify-content-between '>
                <div className='flex-1'>
                    <p>123 Road</p>
                    <div className='flex items-center py-4'>
                        <BsFillSendFill/>
                        <p className='ml-2'>codewithlari</p>
                    </div>
                    <div className='flex items-center'>
                        <BsTelephoneOutbound/>
                        <p className='ml-2'>078-516-1487</p>
                    </div>
                    <div className='flex items-center py-4'>
                        <BiMessageDetail/>
                        <p className='ml-2'>codewithlari</p>
                    </div>
                </div>
                <div className="flex-1 md:text-right">
                    <div className="pb-4">Our Story</div>
                    <div className="pb-4">Get in Touch</div>
                    <div className="pb-4">Our Privacy Commitment</div>
                    <div className="pb-4">Terms of service</div>
                    <p>Customer Assistance</p>
                </div>
                <div className="flex-1 md:text-right">
                    <p className='pb-4'>Dining Experience</p>
                    <p className='pb-4'>Wellness</p>
                    <p className='pb-4'>Fitness</p>
                    <p className='pb-4'>Sports</p>
                    <p>Event</p>
                </div>
            </div>
        </div>
        <div className='bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0'></div>


    </footer>
  )
}

export default Footer
