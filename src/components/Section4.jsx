import Airx2Image from "../assets/airx2.jpg";

const Section4 = () => {
  return (
    <div
                 className="w-full flex items-center bg-cover bg-white bg-center relative h-[90vh]"
                 style={{
                     backgroundImage: `url(${Airx2Image})`,
                     backgroundSize: "80%",
                     backgroundPosition: "bottom center",
                     backgroundRepeat: "no-repeat",
                 }}>
                 <div className="w-[45%] h-full flex flex-col justify-start pt-20 pl-16 ml-12 px-8 relative z-10">
                     <h2 className="text-5xl font-semibold text-black">Air X</h2>
                     <h3 className="text-3xl font-semibold text-black mt-2 py-2">
                         Accelerate into a New Era
                     </h3>
                     <p className="text-black mt-4 w-[55%] leading-relaxed py-4 font-sans">
                         Experience the thrill of cutting-edge innovation with
                         Lexo Z. Designed for speed and efficiency.
                     </p>
 
                     <div className="mt-6 flex gap-4">
                         <button className="px-6 py-2 text-black font-semibold bg-white border-black hover:bg-black hover:text-white">
                             Order Now
                         </button>
                         <button className="px-6 py-2 text-black font-semibold bg-white border-black hover:bg-black hover:text-white transition">
                             Learn More
                         </button>
                     </div>
                 </div>
             </div>
  );
};

export default Section4;