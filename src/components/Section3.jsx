import Lexo1Image from "../assets/lexo1.jpg";

const Section3 = () => {
  return (
     <div className="w-full flex items-center my-10 p">
                 <div className="w-1/2 h-[80vh] flex flex-col justify-center pl-20 ml-12 px-10">
                     <h2 className="text-4xl font-bold text-white">Lexo Z</h2>
                     <h3 className="text-2xl font-semibold text-gray-300 mt-2">
                         Accelerate into a new era
                     </h3>
                     <p className="text-gray-400 mt-4 w-[62%] leading-relaxed">
                         Experience the thrill of cutting-edge innovation with
                         Lexo Z. Designed for speed and efficiency.
                     </p>
                     <p className="text-gray-400 mt-4 w-[62%] leading-relaxed">
                         With advanced aerodynamics and precision engineering,
                         Lexo Z delivers an unmatched driving experience,
                         ensuring power.
                     </p>
                     <p className="text-gray-400 mt-4 w-[62%] leading-relaxed">
                         Step into the new era of driving—where technology meets
                         performance. Take the journey beyond limits.
                     </p>
                     <div className="mt-6 flex gap-4">
                         <button className="px-6 py-2 text-white font-semibold hover:bg-white hover:text-black">
                             Order Now
                         </button>
                         <button className="px-6 py-2 text-white font-semibold hover:bg-white hover:text-black transition">
                             Learn More
                         </button>
                     </div>
                 </div>
                 <div className="w-1/2 h-[80vh] flex justify-end">
                     <div
                         className="w-full h-full bg-cover bg-center"
                         style={{
                             backgroundImage: `url(${Lexo1Image})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center",
                         }}
                     />
                 </div>
             </div>
  );
};

export default Section3;