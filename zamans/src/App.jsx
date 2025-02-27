import Call from './components/Call'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import Images from './components/images'
import Services from './components/Services'


function App() {
  

  return (
    <div className=" flex flex-col min-h-screen">
      <div className='flex-grow'>
   <Call/>
        <h1 className="flex justify-center text-6xl font-bold text-blue-900
        font-arsenal font-bold">Zamans Electrical Engineering Works</h1>
<p className='text-center text-green-500 text-xl mb-8'>Services for Domestic and Commercial Premisses</p>

<div className="relative w-full">
  <img src="/bg.png" className="w-full" />
  <h1 className="absolute top-1/4 left-1/3 transform -translate-x-1/2 text-6xl font-bold text-gray-800 font-arsenal italic">
    London Based
  </h1>
  <h1 className="absolute top-1/3 left-1/3 transform -translate-x-1/2 text-4xl mt-4 font-bold text-gray-800 font-arsenal italic">
    Affordable Solutions
  </h1>
</div>
<Services/>

<Images/>

<Marquee/>
</div>
<Footer/>
    
    </div>
  )
}

export default App
