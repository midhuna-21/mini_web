import { FaBars } from "react-icons/fa";

const Section6 = () => {
  return (
   <div className="w-full flex justify-center py-12">
   <div className="grid grid-cols-4 gap-6 w-[80%] text-white text-center">
       <div className="flex flex-col items-center p-6 space-y-4">
           <p className="text-sm text-gray-400">Max Power</p>
           <p className="text-5xl font-bold">1200+</p>
           <p className="text-lg text-gray-300">hp</p>
       </div>
       <div className="flex flex-col items-center p-6 space-y-4">
           <p className="text-sm text-gray-400">
               EPA Estimated Range Up To
           </p>
           <p className="text-5xl font-bold">516</p>
           <p className="text-lg text-gray-300">mi</p>
       </div>
       <div className="flex flex-col items-center p-6 space-y-4">
           <p className="text-sm text-gray-400">
               Minutes to Charge 200 miles
           </p>
           <p className="text-5xl font-bold">12</p>
           <p className="text-lg text-gray-300">mins</p>
       </div>
       <div className="flex flex-col items-center p-6 space-y-4">
           <p className="text-sm text-gray-400">0-60 mph</p>
           <p className="text-5xl font-bold">&lt;2</p>
           <p className="text-lg text-gray-300">sec</p>
       </div>
   </div>
</div>

  );
};

export default Section6;