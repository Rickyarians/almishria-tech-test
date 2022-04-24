import { ThumbUpIcon, CubeIcon, ViewGridIcon} from '@heroicons/react/outline'
import Feather from './../../assets/icons/feather.png'

const FooterHome = (props) => {
    return (
      <>
        <div className="grid grid-cols-4 gap-0">

            <div className="col-span-4 md:col-span-1 h-56 md:h-auto flex justify-center items-center" style={{background: '#404040'}}>
            <h1 className="text-white text-4xl italic">My Portofolio</h1>
            </div>

            <div className="col-span-4 md:col-span-2" style={{background: '#30272A'}}>

            <div className="grid grid-cols-2 gap-4 px-12 py-12 md:py-0 md:pb-24">
                <div className="col-span-2 md:col-span-1 p-6" style={{background: '#362A2E'}} >  
                <CubeIcon className="h-20 w-20" color="#9A7A83"/>
                <h1 className=" text-2xl font-bold mt-8" style={{color: '#F0767B'}}>Design</h1>
                <p className="text-sm mt-4" style={{color: '#9A7A83'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </div>
                <div className="col-span-2 md:col-span-1 p-6" style={{background: '#362A2E'}}>
                <ViewGridIcon className="h-20 w-20 " color="#9A7A83"/>
                <h1 className="text-2xl font-bold mt-8" style={{color: '#F0767B'}}>Develop</h1>
                <p className="text-sm mt-4" style={{color: '#9A7A83'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </div>
                <div className="col-span-2 md:col-span-1 p-6" style={{background: '#362A2E'}}>
                {/* <PencilAltIcon className="h-20 w-20 " color="#9A7A83"/> */}
                <img src={Feather} className="h-24 w-20"/>
                <h1 className="text-red-400 text-2xl font-bold mt-8" style={{color: '#F0767B'}}>Write</h1>
                <p className=" text-sm mt-4" style={{color: '#9A7A83'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </div>
                <div className="col-span-2 md:col-span-1 p-6" style={{background: '#362A2E'}}>
                <ThumbUpIcon className="h-20 w-20 " color="#9A7A83"/>
                <h1 className="text-red-400 text-2xl font-bold mt-8" style={{color: '#F0767B'}}>Promote</h1>
                <p className="text-gray-500 text-sm mt-4" style={{color: '#9A7A83'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </div>
            </div>

            </div>


        <div className="col-span-4 md:col-span-1 p-6 " style={{background: '#30272A'}}>
                <h1 className="text-red-400 font-bold text-2xl">Services</h1>
                <p className="mb-4 mt-8" style={{color: '#9A7A83'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="text-sm mb-4 " style={{color: '#9A7A83'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <p className="text-sm" style={{color: '#9A7A83'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            <div className="flex flex-row mt-12">
                <button className="text-white px-4 py-2 border border-red-400 rounded-3xl text-xs mr-6">Download CV</button>
                <button className="text-white px-4 py-2 border border-red-400 rounded-3xl text-xs">Check My Portofolio</button>
            </div>
        </div>
    </div>
     </>
    )
} 

export default FooterHome