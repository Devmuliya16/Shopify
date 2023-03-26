import React,{useEffect, useState} from 'react'

function contact() {
  const [longlet,_longlet] = useState({longitude:0,latitude:0});

  useEffect(() => {
    const successCallback = (position) => {
      //console.log(position.coords.longitude,position.coords.latitude);
      _longlet({longitude:position.coords.longitude,latitude:position.coords.latitude})
    };
    
    const errorCallback = (error) => {
    //  console.log(error);
    };
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  
  }, [])
  

  return (
    <>
    <style jsx global>
        {`
          nav {
            display: none;
          }
         
        `}
      </style>
    <section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%"  title="map"  src={`https://maps.google.com/maps?q=${longlet.latitude},${longlet.longitude}&z=15&output=embed`}/>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
      <p className="leading-relaxed mb-5 text-gray-600">You can also provide your feedback here</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-black h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
      </div>
      <button className="text-black border-black border-2 rounded-lg duration-100 py-2 px-6 focus:outline-none hover:text-white hover:bg-black text-lg">Send</button>
      
    </div>
  </div>
</section>
</>

  )
}

export default contact
