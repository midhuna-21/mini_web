import Airx1Image from "../../public/airx1.jpg";

const Section2 = () => {
  return (
         <div className="w-full flex flex-col items-center my-10 relative">
                 <div className="relative w-[60vw] h-[60vh] flex items-center justify-center">
                     <div
                         className="absolute inset-0 bg-cover bg-center"
                         style={{
                             backgroundImage: `url(${Airx1Image})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center",
                         }}
                     />
 
                     <h2 className="absolute -top-10 left-0 text-5xl font-sans text-white px-5 py-2">
                         Air X
                     </h2>
                 </div>
                 <span className="text-white text-2xl font-sans  bg-opacity-50 rounded-lg mt-2 self-start ml-[20vw]">
                     Accelerate into a New Era
                 </span>
             </div>
  );
};

export default Section2;