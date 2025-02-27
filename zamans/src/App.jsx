import Call from './components/Call'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import Images from './components/images'
import Services from './components/Services'


function App() {
  

  return (
    <div className=" flex flex-col min-h-screen mt-3">
      <div className='flex-grow'>
   <Call/>
        <h1 className="flex justify-center text-6xl font-bold text-blue-900 p-4
        font-arsenal font-bold">Zamans Electrical Engineering Works</h1>
<p className='text-center text-green-500 text-xl mb-8'>Services for Domestic and Commercial Premisses</p>
<Services/>


<Images/>

<Marquee/>
</div>
<Footer/>
    
    </div>
  )
}

export default App
