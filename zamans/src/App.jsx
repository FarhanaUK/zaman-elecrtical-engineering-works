import Call from './components/Call'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import Images from './components/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function App() {
  

  return (
    <div className=" flex flex-col min-h-screen mt-3">
      <div className='flex-grow'>
   <Call/>
        <h1 className="flex justify-center text-6xl font-bold text-blue-900 p-4
        font-arsenal font-bold">Zamans Electrical Engineering Works</h1>
<p className='text-center text-green-500 text-xl mb-8'>Services for Domestic and Commercial Premisses</p>

<Marquee/>
<h1 className='flex justify-center font-bold text-6xl mt-12 font-arsenal font-bold'>Services</h1>

<div className="flex flex-wrap justify-between text-sm mt-8 mb-8 ml-12">
      <ul className="w-1/4 space-y-1">
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical fixture installation</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical fuse changing</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical heat resistor changing</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical inspections</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical socket & switch installation</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical socket & switch relocation</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical socket & switch repair</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical panel repair</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical panel replacement/upgrading</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical parts assembly</li>
      </ul>

      <ul className="w-1/4 space-y-1">
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical power restoration</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical wiring installation</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical wiring repair</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Fan installation</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Fan repair</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />General alarm installation</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />General repairs</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Light fixture installation</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Light fixture repair</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Outdoor lighting installation</li>
      </ul>

      <ul className="w-1/4 space-y-1">
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Security system installation</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Commercial electrical service London</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Complete Electrical Solutions</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Comprehensive Electrical Services</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Comprehensive Maintenance Service</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Domestic Electrical Wiring</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Domestic Smoke Alarms</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />EICR</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electric Boiler Repair</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electric Water Heater Repair</li>
      </ul>

      <ul className="w-1/4 space-y-1">
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electric panel wall radiators</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical Bathroom appliances installations</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical Callout</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical Certificate</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical Emergency</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical Fault Finding & Inspections</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical Inspecting & Testing</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical Maintenance works</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />Electrical Wiring Installations</li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-1" />New Electrical Installation</li>
      </ul>
    </div>
<Images/>


</div>
<Footer/>
    
    </div>
  )
}

export default App
