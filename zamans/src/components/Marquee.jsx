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
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee">
          {reviews.concat(reviews).map((review, index) => (
            <div key={index} className="flex-shrink-0 px-6 py-4 bg-white shadow-lg mx-4 rounded-lg border-l-4 border-blue-500 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <p className="text-xl font-semibold text-gray-900">{review.name}</p>
              <p className="text-md text-gray-700 italic">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Marquee;
  