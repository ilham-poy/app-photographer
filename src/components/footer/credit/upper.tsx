import { FaInstagram, FaBehance, FaFacebookF } from "react-icons/fa"
import { FiMapPin } from "react-icons/fi"
export default function UpperCreditPage() {
    return (
        <div className="flex flex-col justify-around items-center mt-6 mx-8 md:flex-row" >
            <div className="flex flex-col  items-center ">
                <h1 className="flex items-center gap-2 text-white text-xl">
                    <FiMapPin className="text-white" />
                    Based in Indonesia</h1>
                <p className="text-sm">Available Worldwide</p>
            </div>
            <div className="bg-[url('/logo-Snapfinity.png')] bg-contain bg-center bg-no-repeat w-[170px] h-[70px]"></div>
            <div>
                <h1 className='text-white text-xl'>Follow My Journey:</h1>
                <div className="flex flex-row justify-evenly items-center" >
                    <p>  <FaInstagram className="w-7 h-7 text-[#E1306C] hover:opacity-80 transition" /></p>
                    <p>  <FaBehance className="w-7 h-7 text-[#1769FF] hover:opacity-80 transition" /></p>
                    <p> <FaFacebookF className="w-5 h-5 text-[#1877F2] hover:opacity-80 transition" /></p>
                </div>
            </div>
        </div>
    )
}