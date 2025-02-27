import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Marquee = () => {
  const reviews = [
    { name: "Tahmida Begum", review: "I can’t thank Zaman Electrical Engineering enough! They came so quickly, even at 7 pm, and fixed my problem straight away. Excellent, professional, and reliable service. Highly recommend!" },
    { name: "Tanvirul Islam", review: "He has done excellent work on circuit breaker panel, fixed it quickly for me. Plus kitchen spark circuit replaced efficiently" },
    { name: "Vicky Qi Huang", review: "Gentleman's service, very professional, we needed an EICR for a rental property where landlord is abroad and agency provided the keys, Mr Zaman was reliable and tested everything thoroughly, communication was great throughout from booking to invoicing via phone, whatsapp and email." },
    { name: "John Bracey", review: "Mr Zaman was punctual, polite, and very professional . Great job would definitely use him again. Thanks" },
    { name: "Eleftherios Tsioutsioumis", review: "Zaman is very friendly and a proper professional. He was on time and completed socket installations around the flat quickly and everything was just perfect." },
    { name: "P Dickinson", review: "Fantastic electrician - did a brilliant job with our bathroom lights. Very efficient and professional." }
  ];

  return (
    <div className='my-8'>
      <h1 className="flex justify-center font-bold text-4xl mt-12 font-arsenal">See what out customers have to say</h1>
  
      <p className="mb-4 text-xl font-semibold text-gray-900 ml-8">Customer Reviews</p>

      <div className="flex items-center mb-4 ml-8 "> 
      
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-4xl mr-4">
          5.0
        </a> 

        <div className="flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-4xl text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="text-4xl text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="text-4xl text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="text-4xl text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="text-4xl text-yellow-400" />
        </div>
      </div>

      <div className="mb-4">
        <a href="https://www.google.com/search?q=zaman+electrical+engineering&rlz=1C1CHBF_en-GBGB943GB943&oq=zama&gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyCQgCEEUYORiABDINCAMQLhiDARixAxiABDINCAQQLhivARjHARiABDIGCAUQRRg7MgYIBhBFGDwyBggHEEUYPdIBCDEwMzNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x48761dae46a5f40d:0x2e591f207ddf0d2b,1,,,," target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 ml-8">
          Google Review
        </a>
      </div>
  
      
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee">
          {reviews.concat(reviews).map((review, index) => (
            <div key={index} className="flex-shrink-0 px-6 py-4 bg-green-300 shadow-lg mx-4 rounded-lg border-l-4 border-blue-800 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <p className="text-xl font-semibold text-gray-900">{review.name}</p>
              <p className="text-md text-gray-700 italic">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
