import ModelAirx1Image from "../../public/modelairx1.jpg";

const Section5 = () => {
  return (
 
             <div className="w-full flex h-screen">
                 <div className="relative w-1/2 h-full">
                     <div
                         className="absolute inset-0 bg-cover bg-left"
                         style={{
                             backgroundImage: `url(${ModelAirx1Image})`,
                             backgroundSize: "cover",
                             backgroundPosition: "left",
                         }}
                     />
                 </div>
 
                 <div className="w-1/2 h-full flex flex-col justify-center pl-16 pr-12 bg-black">
                     <h2 className="text-2xl font-sans text-white mb-6">
                         Model Air X Specifications
                     </h2>
                     <div className="grid grid-cols-2 gap-y-6 text-white text-lg">
                         <div className="flex flex-col gap-6">
                             <div>
                                 <p className="font-sans text-sm">
                                     Range (EPA est.)
                                 </p>
                                 <p className="text-gray-300 text-sm">
                                     Up to 300 miles
                                 </p>
                             </div>
                             <div>
                                 <p className="font-sans text-sm">Peak Power</p>
                                 <p className="text-gray-300 text-sm">400 hp</p>
                             </div>
                             <div>
                                 <p className="font-sans text-sm">Towing</p>
                                 <p className="text-gray-300 text-sm">
                                     2000 pounds
                                 </p>
                             </div>
                             <div>
                                 <p className="font-sans text-sm">
                                     Drag Coefficient
                                 </p>
                                 <p className="text-gray-300 text-sm">0.28 cd</p>
                             </div>
                         </div>
                         <div className="flex flex-col gap-6">
                             <div>
                                 <p className="font-sans text-sm">
                                     Acceleration
                                 </p>
                                 <p className="text-gray-300 text-sm">
                                     4.5s 0-60 mph
                                 </p>
                             </div>
                             <div>
                                 <p className="font-sans text-sm">Wheels</p>
                                 <p className="text-gray-300 text-sm">
                                     19’’ or 20’’
                                 </p>
                             </div>
                             <div>
                                 <p className="font-sans text-sm">Seating</p>
                                 <p className="text-gray-300 text-sm">Up to 5</p>
                             </div>
                             <div>
                                 <p className="font-sans text-sm">Top Speed</p>
                                 <p className="text-gray-300 text-sm">130 mph</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
  );
};

export default Section5;