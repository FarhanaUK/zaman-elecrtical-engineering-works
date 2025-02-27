const Images = () => {
    return (
      <div>
        {/* First Image and Text Block */}
        <div className="flex justify-center items-center flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 mt-12 bg-gray-200">
          <img
            src="/1.jpg"
            className="mt-2 mb-2 rounded-lg shadow-lg w-2/5 md:w-1/3 h-auto object-cover"
          />
          <div className="text-center md:text-left max-w-xl space-y-4">
            <h1 className="text-2xl text-gray-900 font-arsenal font-bold">
              London Based Electrical Service.
            </h1>
            <p className="text-lg text-gray-700">
              Our electricians are UK standard, qualified, trained, NAPIT registered, and have over 8 years of field experience. We are insured to carry out any electrical work. Our services are reasonably priced to match your requirements. We value our customers and always ensure we look after them in the best possible way. Fluent in: English, Italian, Bengali (বাংলা).
            </p>
          </div>
        </div>
  
        {/* Second Image and Text Block with Image on Right */}
        <div className="flex justify-center items-center flex-col md:flex-row-reverse space-y-6 md:space-y-0 md:space-x-12 mb-12 bg-gray-200">
          <img
            src="/4.jpg"
            className="mt-2 mb-2 rounded-lg shadow-lg w-2/5 md:w-1/3 h-auto object-cover"
          />
          <div className="text-center md:text-left max-w-xl space-y-4">
            <h1 className="text-2xl text-gray-900 font-arsenal font-bold">
              Your Safety, Our Priority
            </h1>
            <p className="text-lg text-gray-700">
              We are well-known in the industry for providing safe electrical work in London. Our team of experienced electricians can competently handle all your electrical requirements.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Images;
  