
import Food from 'assets/images/bg-alami.jpeg'
import Hiasan from 'assets/images/hiasan.svg';
import { ChevronRightIcon } from '@heroicons/react/outline'

const HeroHome = (props) => {
    return (
      <>
        <div style={{ backgroundImage:`url(${Food})`,height:'90vh',backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}}
            className="flex flex-col"
        >
            <div className="" style={{marginTop: '8%'}}>
            <h1 className="text-5xl font-hand text-center text-white">Catering services in New York</h1>
            <h1 className="text-white text-7xl text-center text-white font-weight-bold my-5">We use only the finest and freshet ingredients</h1>
            <p className="text-center text-white text-lg">
                At sway catering we know that food is an important part of life. <br></br>
                If the meal is not perfect, your event cannot be perfect
            </p>
            <div className="text-center my-5 flex justify-center">
                <button className="bg-green-400 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-full flex items-center">
                    Request A Quote <span><ChevronRightIcon className="h-4 w-4"/></span>
                </button>
            </div>
            </div>
            <img src={Hiasan} alt="hiasan" className="absolute bottom-0 w-full"/>
            
        </div>
     </>
    )
} 

export default HeroHome


