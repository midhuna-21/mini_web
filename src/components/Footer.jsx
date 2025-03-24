import { FaBars } from "react-icons/fa";

const Footer = () => {
  return (
   <div className="w-full text-white py-16 px-8">
   <h2 className="text-3xl font-sans mb-6">
       Subscribe to our newsletter
   </h2>
   <div className="flex items-center gap-4">
       <div className="relative">
           <input
               type="email"
               placeholder="enter your email"
               className="bg-transparent text-white text-sm outline-none placeholder-gray-500 placeholder:text-xs"
           />
           <button className="text-white font-semibold text-2xl">
               →
           </button>
           <div className="w-80 h-[1px] bg-white mt-1"></div>
       </div>
   </div>

   <div className="flex justify-between mt-16 gap-16">
       <div className="flex justify-between w-1/3">
           <div className="flex flex-col space-y-2">
               <p className="text-sm font-sans">Air X</p>
               <p className="text-sm font-sans">Lexo Z</p>
               <p className="text-sm font-sans">Gravity 9</p>
           </div>
           <div className="flex flex-col space-y-2">
               <p className="text-sm font-sans">Fleet</p>
               <p className="text-sm font-sans">Company</p>
               <p className="text-sm font-sans">Stories</p>
           </div>
       </div>

       <div className="flex justify-end w-2/3 space-x-16">
           <div className="flex flex-col space-y-2">
               <p className="text-sm font-sans">Purchasing</p>
               <p className="text-sm font-sans">Charging</p>
               <p className="text-sm font-sans">Insurance</p>
               <p className="text-sm font-sans">Service</p>
           </div>
           <div className="flex flex-col space-y-2">
               <p className="text-sm font-sans">Spaces</p>
               <p className="text-sm font-sans">Investors</p>
               <p className="text-sm font-sans">Career</p>
               <p className="text-sm font-sans">Contact Us</p>
           </div>
       </div>
   </div>
</div>
  );
};

export default Footer;